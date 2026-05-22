<script setup>
</script>

<template>
    <section class="py-28 relative overflow-hidden">
        <!-- Soft gradient background -->
        <div class="absolute inset-0 bg-gradient-to-r from-brand-400 via-brand-500 to-purple-500"></div>

        <!-- Delicate decorative elements -->
        <div class="absolute top-0 left-0 w-full h-full">
            <div class="absolute top-8 left-[10%] w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            <div class="absolute bottom-8 right-[15%] w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div class="absolute top-1/3 right-1/3 w-24 h-24 bg-accent-300/10 rounded-full blur-xl"></div>
        </div>

        <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span class="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-white/60 mb-6">The Perfect Gift</span>
            <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
                Give the gift of glow
            </h2>
            <p class="text-white/70 text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Treat someone special to a Acme gift card. Available in any amount, redeemable
                for all treatments and products. Because everyone deserves a little luxury.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="#contact"
                    class="px-8 py-3.5 bg-white text-brand-600 font-semibold rounded-full hover:shadow-xl hover:shadow-brand-700/20 transition-all duration-300 text-sm">
                    Purchase Gift Card
                </a>
                <a href="#contact"
                    class="px-8 py-3.5 border-2 border-white/25 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm backdrop-blur-sm">
                    Book a Treatment
                </a>
            </div>
        </div>
    </section>
</template>
