#!/bin/bash
set -e

# Cache config/events/views at runtime (needs env vars from container)
php artisan config:cache
php artisan event:cache
php artisan view:cache

# Run migrations if DATABASE_URL or DB_HOST is set
if [ -n "$DB_HOST" ] || [ -n "$DATABASE_URL" ]; then
    php artisan migrate --force
fi

# Storage link
php artisan storage:link --force 2>/dev/null || true

exec "$@"
