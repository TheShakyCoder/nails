<script setup>
import { Link } from '@inertiajs/vue3';

const news = [
    {
        date: '5 May 2026',
        title: 'Summer nail trends you need to try',
        excerpt: 'From lavender glazed donuts to soft chrome finishes, discover the top nail trends that will define your summer style.',
        tag: 'Trends',
        tagColor: 'bg-brand-100 text-brand-600',
    },
    {
        date: '28 Apr 2026',
        title: 'New luxury product line now available',
        excerpt: 'We\'re thrilled to introduce our new range of vegan, cruelty-free nail and skin care products — available in-store and online.',
        tag: 'Products',
        tagColor: 'bg-accent-100 text-accent-500',
    },
    {
        date: '15 Apr 2026',
        title: 'Acme named Best Nail Salon 2026',
        excerpt: 'We\'re honoured to be voted the region\'s favourite nail salon for the third consecutive year. Thank you to all our clients!',
        tag: 'News',
        tagColor: 'bg-purple-100 text-purple-600',
    },
];
</script>

<template>
    <section id="news" class="py-28 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex items-end justify-between mb-16">
                <div>
                    <span class="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400 mb-4 block">From the Blog</span>
                    <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-800">
                        Beauty inspiration
                    </h2>
                </div>
                <Link href="/news-updates"
                    class="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:text-brand-600 transition-colors">
                    All posts
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div class="grid md:grid-cols-3 gap-7">
                <article v-for="item in news" :key="item.title"
                    class="group border border-brand-100/40 rounded-3xl p-7 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/15 transition-all duration-300 cursor-pointer bg-gradient-to-br from-white to-brand-50/10">
                    <div class="flex items-center justify-between mb-5">
                        <span class="px-3 py-1 rounded-full text-xs font-semibold" :class="item.tagColor">{{ item.tag }}</span>
                        <time class="text-xs text-warm-300">{{ item.date }}</time>
                    </div>
                    <h3
                        class="font-semibold text-warm-700 mb-3 leading-snug group-hover:text-brand-500 transition-colors duration-200">
                        {{ item.title }}
                    </h3>
                    <p class="text-sm text-warm-400 leading-relaxed font-light">{{ item.excerpt }}</p>
                    <div class="mt-5 flex items-center gap-1 text-xs font-medium text-brand-400">
                        Read more
                        <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
