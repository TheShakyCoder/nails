<script setup>
const stats = [
    { value: '5,000+', label: 'Happy clients served' },
    { value: '50+', label: 'Nail & spa treatments' },
    { value: '15+', label: 'Expert nail artists' },
    { value: '4.9', label: 'Average client rating' },
];
</script>

<template>
    <section class="bg-white py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(stat, idx) in stats" :key="stat.label"
                    class="text-center p-8 rounded-3xl bg-gradient-to-br border transition-all duration-300 hover:shadow-lg hover:shadow-brand-100/30 hover:-translate-y-0.5"
                    :class="[
                        idx % 4 === 0 ? 'from-brand-50/80 to-white border-brand-100/50' :
                        idx % 4 === 1 ? 'from-accent-50/80 to-white border-accent-100/50' :
                        idx % 4 === 2 ? 'from-purple-50/80 to-white border-purple-100/50' :
                        'from-pink-50/80 to-white border-pink-100/50'
                    ]">
                    <p class="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-br from-brand-500 to-brand-400 bg-clip-text text-transparent">{{ stat.value }}</p>
                    <p class="text-sm text-warm-400 mt-2 font-light">{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
