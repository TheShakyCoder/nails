<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Header from '@/Layouts/Partials/Header.vue';
import Footer from '@/Layouts/Partials/Footer.vue';

const props = defineProps({
    posts:       { type: Object, required: true },
    canLogin:    { type: Boolean },
    canRegister: { type: Boolean },
});

const navLinks = [
    { label: 'Home',     href: '/' },
    { label: 'About',    href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Events',   href: '/#events' },
    { label: 'News',     href: '/news-updates' },
    { label: 'Contact',  href: '/#contact' },
];

const tagColours = [
    'bg-brand-100 text-brand-700',
    'bg-sky-100 text-sky-700',
    'bg-purple-100 text-purple-700',
    'bg-amber-100 text-amber-700',
    'bg-rose-100 text-rose-700',
];

// Gives each post a consistent colour based on its position
function tagColour(index) {
    return tagColours[index % tagColours.length];
}
</script>

<template>
    <Head title="News &amp; Updates — Woodvale &amp; Ainsdale Community Centre" />

    <div class="font-sans antialiased text-warm-800 bg-white">

        <Header :navLinks="navLinks" :canLogin="canLogin" :canRegister="canRegister" />

        <!-- ── PAGE HERO BANNER ── -->
        <section class="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white">
            <!-- Decorative blobs -->
            <div class="absolute -top-16 -right-16 w-72 h-72 bg-brand-500/25 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-20 -left-10 w-64 h-64 bg-brand-800/35 rounded-full blur-3xl pointer-events-none"></div>

            <!-- Faint background logo -->
            <div class="absolute right-[-40px] top-1/2 w-72 h-72 pointer-events-none select-none"
                 style="transform: translateY(-50%) rotate(15deg);">
                <img src="/media/logo.png" alt="" class="w-full h-full object-contain opacity-20" />
            </div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <!-- Breadcrumb -->
                <nav class="flex items-center gap-2 text-white/50 text-xs mb-5">
                    <a href="/" class="hover:text-white transition-colors">Home</a>
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                    <span class="text-white/80">News &amp; Updates</span>
                </nav>

                <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    News &amp; Updates
                </h1>
                <p class="text-white/75 text-lg max-w-xl leading-relaxed">
                    The latest stories, announcements, and news from the heart of Woodvale &amp; Ainsdale.
                </p>
            </div>

            <!-- Wave divider -->
            <div class="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
                    <path d="M0 48L60 40C120 32 240 16 360 12C480 8 600 16 720 20C840 24 960 24 1080 20C1200 16 1320 8 1380 4L1440 0V48H0Z" fill="white"/>
                </svg>
            </div>
        </section>

        <!-- ── POST GRID ── -->
        <section class="py-16 lg:py-20 bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <!-- Results count -->
                <p v-if="posts.total > 0" class="text-sm text-warm-400 mb-10">
                    Showing {{ posts.from }}–{{ posts.to }} of {{ posts.total }} articles
                </p>

                <!-- Empty state -->
                <div v-if="posts.data.length === 0"
                     class="text-center py-24 px-6 bg-warm-50 rounded-2xl border border-warm-200">
                    <span class="text-5xl block mb-4">📭</span>
                    <h2 class="font-display text-xl font-semibold text-warm-800 mb-2">Nothing here yet</h2>
                    <p class="text-warm-500 text-sm mb-6">Check back soon — we'll be posting news and updates regularly.</p>
                    <a href="/" class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors">
                        Back to home
                    </a>
                </div>

                <!-- Cards grid -->
                <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    <article v-for="(post, index) in posts.data" :key="post.id"
                             class="group flex flex-col border border-warm-200 rounded-2xl overflow-hidden hover:border-brand-300 hover:shadow-lg transition-all duration-200">

                        <!-- Colour accent top bar -->
                        <div class="h-1.5 w-full shrink-0"
                             :class="[
                                 index % 5 === 0 ? 'bg-brand-500' :
                                 index % 5 === 1 ? 'bg-sky-500' :
                                 index % 5 === 2 ? 'bg-purple-500' :
                                 index % 5 === 3 ? 'bg-amber-500' : 'bg-rose-500'
                             ]">
                        </div>

                        <div class="flex flex-col flex-1 p-6">
                            <!-- Tag + date -->
                            <div class="flex items-center justify-between mb-4">
                                <span class="px-2.5 py-1 rounded-full text-xs font-semibold" :class="tagColour(index)">
                                    News
                                </span>
                                <time class="text-xs text-warm-400 font-medium">{{ post.created_at }}</time>
                            </div>

                            <!-- Title -->
                            <h2 class="font-semibold text-warm-900 text-base leading-snug mb-3 group-hover:text-brand-700 transition-colors">
                                {{ post.title }}
                            </h2>

                            <!-- Excerpt -->
                            <p class="text-sm text-warm-500 leading-relaxed flex-1">
                                {{ post.excerpt }}
                            </p>

                            <!-- Read more -->
                            <div class="mt-5 pt-4 border-t border-warm-100 flex items-center gap-1 text-xs font-semibold text-brand-600">
                                Read article
                                <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-150"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- Pagination -->
                <div v-if="posts.last_page > 1"
                     class="mt-14 flex items-center justify-center gap-2">

                    <!-- Previous -->
                    <Link v-if="posts.prev_page_url" :href="posts.prev_page_url"
                          class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-warm-700 border border-warm-200 rounded-xl hover:bg-warm-50 hover:border-warm-300 transition-colors">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        Previous
                    </Link>
                    <span v-else class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-warm-300 border border-warm-100 rounded-xl cursor-default">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        Previous
                    </span>

                    <!-- Page numbers -->
                    <div class="flex items-center gap-1">
                        <template v-for="link in posts.links.slice(1, -1)" :key="link.label">
                            <Link v-if="link.url" :href="link.url"
                                  class="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-medium transition-colors"
                                  :class="link.active
                                      ? 'bg-brand-600 text-white shadow-sm'
                                      : 'text-warm-600 hover:bg-warm-100 border border-warm-200'">
                                {{ link.label }}
                            </Link>
                            <span v-else class="w-9 h-9 flex items-center justify-center text-sm text-warm-300">
                                {{ link.label }}
                            </span>
                        </template>
                    </div>

                    <!-- Next -->
                    <Link v-if="posts.next_page_url" :href="posts.next_page_url"
                          class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-warm-700 border border-warm-200 rounded-xl hover:bg-warm-50 hover:border-warm-300 transition-colors">
                        Next
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </Link>
                    <span v-else class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-warm-300 border border-warm-100 rounded-xl cursor-default">
                        Next
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </span>
                </div>

            </div>
        </section>

        <Footer :navLinks="navLinks" />

    </div>
</template>
