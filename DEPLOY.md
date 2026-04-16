# Deploying WACA to Coolify with Nixpacks

This repo is pre-configured for a Nixpacks build on Coolify. No Dockerfile
is required — Nixpacks auto-detects Laravel from `composer.json` and we
extend it via `nixpacks.toml` and a small `nixpacks-start.sh` entrypoint.

## What's in the repo

| File | Purpose |
|---|---|
| `nixpacks.toml` | Pins Node 22 alongside the PHP 8.3 provider, runs `composer install`, `npm ci`, `npm run build`. Points the container CMD at `nixpacks-start.sh`. |
| `nixpacks-start.sh` | Container entrypoint. Runs `migrate --force`, rebuilds Laravel's config/route/view/event caches with the real runtime env vars, then starts nginx + php-fpm. |
| `.env.production.example` | Template for the env vars to set in Coolify's UI. Never commit filled-in values. |

### Why no Procfile?

Nixpacks turns Procfile `release:` entries into **build-time** `RUN`
steps in the generated Dockerfile. That's too early for `php artisan
migrate` — the DB service isn't reachable during the image build. So
migrations run at container boot via the start script instead.

## Coolify setup

1. **Create the database service first.** In your Coolify project, add a
   new *MariaDB* (or MySQL) resource. Note its internal hostname,
   database name, user, and password.

2. **Create the application.** New Resource → *Public/Private Git
   Repository* → point at this repo. Set Build Pack to **Nixpacks**.

3. **Set environment variables.** Copy every key from
   `.env.production.example` into Coolify's *Environment Variables*
   panel and fill in real values. In particular:
   - `APP_KEY` — generate locally with `php artisan key:generate --show`
     and paste it in.
   - `DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` — use the
     MariaDB service's internal credentials from step 1.
   - `APP_URL` — the domain Coolify will serve this app on.
   - Any `VITE_*` vars must be present at **build time**, not just
     runtime, since Vite bakes them into the compiled JS.

4. **Expose the port.** The Nixpacks PHP provider listens on port **80**
   inside the container by default. Make sure Coolify's *Network* tab
   points at 80.

5. **Deploy.** The deploy will:
   - Build image: `composer install --no-dev`, `npm ci`, `npm run build`
   - Boot container: run `nixpacks-start.sh` →
     - `php artisan migrate --force`
     - `php artisan storage:link`
     - `php artisan config/route/view/event:cache`
     - start php-fpm + nginx

## Verifying the deploy

Watch the runtime logs (not just the build logs) for these markers:

- `==> [startup] artisan migrate --force`
- `Migrating: …` / `Migrated: …` — migrations applied
- `Configuration cached successfully.`
- `==> [startup] exec nginx (foreground)`

If you don't see the startup lines, the container may have crashed
during boot — check logs for the first error after the migrate line.

## Runtime notes

- **Filesystem:** `FILESYSTEM_DISK=s3`, so uploaded files go to S3 — no
  persistent volume is required on Coolify. If you change this to
  `local`, mount `/app/storage/app` as a persistent volume or uploads
  vanish on redeploy.
- **Sessions / cache / queue:** all use the database by default. Jobs
  queue up in a `jobs` table but nothing processes them until you add a
  queue worker (a second Coolify resource running `php artisan queue:work`).
- **Logs:** `LOG_CHANNEL=stderr` in the production template so Coolify's
  log viewer captures everything.
- **Trusted proxies:** `TRUSTED_PROXIES=*` so Laravel respects the
  `X-Forwarded-*` headers from Coolify's reverse proxy (needed for
  secure-cookie and `APP_URL`-scheme detection to work).

## Troubleshooting

**"Connection refused" / "getaddrinfo for db failed" during boot.**
The DB service isn't reachable from the app container. Check in Coolify
that both services are in the same project/network and that `DB_HOST`
matches the DB service's internal hostname.

**Container exits immediately after "starting php-fpm".**
Usually a permissions issue on `storage/` or `bootstrap/cache/`. The
build step chmods both; if you've mounted a persistent volume over them,
re-chmod inside the volume.

**Nginx can't find `/assets/scripts/prestart.mjs`.**
Different Nixpacks versions occasionally relocate provider assets. The
start script falls back to copying the template verbatim if the prestart
helper isn't present. If even the template is missing, you'll need to
set `[start] cmd` in `nixpacks.toml` to a custom nginx config — open an
issue and we'll pin the Nixpacks base image.

## Local development is unaffected

DDEV (`.ddev/`) and `.env` still work the same. None of the files added
here interfere with `ddev start` or `composer dev`.
