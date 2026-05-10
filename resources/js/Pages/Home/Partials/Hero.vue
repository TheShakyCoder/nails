<script setup>
import PrimaryLink from '@/Components/PrimaryLink.vue';

defineProps({
    site: { type: Object },
});
</script>

<template>
    <section id="home"
        class="relative overflow-hidden bg-gradient-to-br from-brand-100 via-accent-50 to-white text-warm-800 min-h-[85vh] flex items-center">

        <!-- Soft decorative orbs -->
        <div class="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-200/25 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-200/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/50 rounded-full blur-[100px]"></div>

        <!-- Floating petals -->
        <div class="absolute top-10 right-[22%] w-24 h-24 bg-brand-300/60 rounded-full animate-float blur-[2px]"></div>
        <div class="absolute top-24 right-[10%] w-10 h-10 bg-accent-300/55 rounded-full animate-float-slow blur-[1px]"></div>
        <div class="absolute bottom-32 left-[16%] w-40 h-40 bg-brand-200/50 rounded-full animate-float-delayed blur-[4px]"></div>
        <div class="absolute top-[50%] right-[36%] w-16 h-16 bg-pink-300/55 rounded-full animate-float-slow blur-[2px]"></div>
        <div class="absolute top-[28%] left-[6%] w-12 h-12 bg-purple-300/50 rounded-full animate-float blur-[1px]"></div>
        <div class="absolute bottom-[52%] right-[68%] w-32 h-32 bg-brand-400/45 rounded-full animate-float-delayed blur-[3px]"></div>
        <div class="absolute top-[72%] left-[32%] w-8 h-8 bg-accent-200/60 rounded-full animate-float-slow"></div>
        <div class="absolute top-[12%] left-[38%] w-5 h-5 bg-pink-200/55 rounded-full animate-float"></div>
        <div class="absolute top-[42%] right-[22%] w-20 h-20 bg-violet-300/50 rounded-full animate-float-delayed blur-[2px]"></div>
        <div class="absolute top-[18%] right-[32%] w-36 h-36 bg-brand-200/45 rounded-full animate-float-slow blur-[4px]"></div>
        <div class="absolute bottom-[40%] left-[28%] w-6 h-6 bg-purple-200/55 rounded-full animate-float"></div>
        <div class="absolute top-[65%] right-[15%] w-28 h-28 bg-accent-300/45 rounded-full animate-float-delayed blur-[3px]"></div>
        <div class="absolute bottom-[15%] left-[45%] w-14 h-14 bg-pink-300/50 rounded-full animate-float blur-[1px]"></div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
            <div class="max-w-2xl">
                <span
                    class="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-brand-500 mb-8 border border-brand-200/40">
                    <span class="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse"></span>
                    Now Accepting Appointments
                </span>
                <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-8 text-warm-800">
                    Where Beauty<br />
                    <span class="bg-gradient-to-r from-brand-500 to-accent-400 bg-clip-text text-transparent">Meets Serenity</span>
                </h1>
                <p class="text-lg sm:text-xl text-warm-400 leading-relaxed mb-12 max-w-lg font-light">
                    Indulge in luxurious nail care and spa treatments in a tranquil setting.
                    Expert artistry, premium products, and a moment just for you.
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="#services"
                        class="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-400 to-brand-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-brand-200/40 transition-all duration-300 text-sm">
                        Our Services
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="#contact"
                        class="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-200 text-brand-600 font-semibold rounded-full hover:bg-brand-50 hover:border-brand-300 transition-all duration-300 text-sm">
                        Book Appointment
                    </a>
                </div>
            </div>
        </div>

        <!-- Elegant wave divider -->
        <div class="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
                <path
                    d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 36C672 40 768 48 864 52C960 56 1056 56 1152 48C1248 40 1344 24 1392 16L1440 8V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
                    fill="white" />
            </svg>
        </div>
    </section>
</template>
