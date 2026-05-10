<script setup>
const events = [
    {
        date: 'SAT 17 MAY',
        title: 'Spring Glow Package',
        time: 'All Day',
        location: 'Main Studio',
        tag: 'Special',
        tagColor: 'bg-brand-100 text-brand-600',
        accent: 'bg-gradient-to-r from-brand-300 to-brand-400',
    },
    {
        date: 'WED 21 MAY',
        title: 'Nail Art Masterclass',
        time: '14:00 - 17:00',
        location: 'Workshop Room',
        tag: 'Workshop',
        tagColor: 'bg-violet-100 text-violet-600',
        accent: 'bg-gradient-to-r from-violet-300 to-violet-400',
    },
    {
        date: 'SAT 31 MAY',
        title: 'Bridal Beauty Day',
        time: '10:00 - 18:00',
        location: 'VIP Suite',
        tag: 'Bridal',
        tagColor: 'bg-pink-100 text-pink-600',
        accent: 'bg-gradient-to-r from-pink-300 to-pink-400',
    },
    {
        date: 'SUN 8 JUN',
        title: 'Self-Care Sunday',
        time: '11:00 - 16:00',
        location: 'Spa Lounge',
        tag: 'Wellness',
        tagColor: 'bg-accent-100 text-accent-500',
        accent: 'bg-gradient-to-r from-accent-200 to-accent-300',
    },
];
</script>

<template>
    <section id="events" class="py-28 bg-gradient-to-b from-brand-50/30 to-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex items-end justify-between mb-16">
                <div>
                    <span class="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400 mb-4 block">What's Coming</span>
                    <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-800">
                        Events &amp; specials
                    </h2>
                </div>
                <a href="#"
                    class="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-400 hover:text-brand-600 transition-colors">
                    View all
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div v-for="event in events" :key="event.title"
                    class="bg-white rounded-3xl overflow-hidden border border-brand-100/40 shadow-sm hover:shadow-lg hover:shadow-brand-100/20 transition-all duration-300 hover:-translate-y-0.5">
                    <div class="h-1 w-full" :class="event.accent"></div>
                    <div class="p-6">
                        <p class="text-xs font-bold tracking-wider text-warm-300 mb-3">{{ event.date }}</p>
                        <h3 class="font-semibold text-warm-700 mb-2 leading-snug">{{ event.title }}</h3>
                        <div class="flex items-center gap-1.5 text-xs text-warm-400 mb-1">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ event.time }}
                        </div>
                        <div class="flex items-center gap-1.5 text-xs text-warm-400 mb-5">
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {{ event.location }}
                        </div>
                        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                            :class="event.tagColor">
                            {{ event.tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
