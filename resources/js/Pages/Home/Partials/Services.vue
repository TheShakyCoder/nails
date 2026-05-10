<script setup>
const services = [
    {
        icon: '\u{1F485}',
        title: 'Classic Manicure',
        desc: 'Nail shaping, cuticle care, hand massage, and your choice of polish for perfectly polished nails.',
        color: 'from-brand-50/80 to-white border-brand-100/60',
        iconBg: 'bg-brand-100 text-brand-500',
        price: 'From $35',
    },
    {
        icon: '\u{2728}',
        title: 'Gel & Shellac',
        desc: 'Long-lasting gel polish with a mirror-like shine that stays flawless for up to three weeks.',
        color: 'from-purple-50/80 to-white border-purple-100/60',
        iconBg: 'bg-purple-100 text-purple-500',
        price: 'From $45',
    },
    {
        icon: '\u{1F3A8}',
        title: 'Nail Art & Design',
        desc: 'Express yourself with custom nail art — from delicate florals to bold geometric patterns.',
        color: 'from-violet-50/80 to-white border-violet-100/60',
        iconBg: 'bg-violet-100 text-violet-500',
        price: 'From $55',
    },
    {
        icon: '\u{1F9B6}',
        title: 'Luxury Pedicure',
        desc: 'A full pampering session with exfoliation, mask, extended massage, and expert nail care.',
        color: 'from-accent-50/80 to-white border-accent-100/60',
        iconBg: 'bg-accent-100 text-accent-500',
        price: 'From $50',
    },
    {
        icon: '\u{1F33F}',
        title: 'Spa Treatments',
        desc: 'Rejuvenating facials, aromatherapy, and relaxation treatments for total mind-body wellness.',
        color: 'from-rose-50/80 to-white border-rose-100/60',
        iconBg: 'bg-rose-100 text-rose-400',
        price: 'From $60',
    },
    {
        icon: '\u{1F48E}',
        title: 'Bridal & Events',
        desc: 'Special occasion packages for brides, bridesmaids, and celebrations. Group bookings welcome.',
        color: 'from-pink-50/80 to-white border-pink-100/60',
        iconBg: 'bg-pink-100 text-pink-400',
        price: 'From $75',
    },
];
</script>

<template>
    <section id="services" class="py-28 bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400 mb-4 block">Our Treatments</span>
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-800">
                    Crafted for your glow
                </h2>
                <p class="text-warm-400 mt-4 max-w-lg mx-auto font-light">
                    From classic nail care to luxurious spa experiences, every treatment is designed to leave you feeling pampered and beautiful.
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="service in services" :key="service.title"
                    class="group p-7 rounded-3xl border bg-gradient-to-br transition-all duration-300 hover:shadow-xl hover:shadow-brand-100/20 hover:-translate-y-1 cursor-default"
                    :class="service.color">
                    <div class="flex items-start justify-between mb-5">
                        <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                            :class="service.iconBg">
                            {{ service.icon }}
                        </div>
                        <span class="text-xs font-semibold text-brand-400 bg-brand-50 px-3 py-1 rounded-full">{{ service.price }}</span>
                    </div>
                    <h3 class="font-semibold text-warm-700 text-base mb-2">{{ service.title }}</h3>
                    <p class="text-sm text-warm-400 leading-relaxed font-light">{{ service.desc }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
