<script setup>
import PrimaryLink from '@/Components/PrimaryLink.vue';
import { Link, usePage } from '@inertiajs/vue3';

const page = usePage();
</script>

<template>
    <section id="about" class="py-28 bg-gradient-to-b from-white via-brand-50/20 to-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <span class="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400 mb-4 block">Our Story</span>
                    <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-800 mb-6 leading-tight">
                        Your sanctuary for<br />nail art &amp; self-care
                    </h2>
                    <p class="text-warm-400 leading-relaxed mb-4 font-light">
                        At Cici Nails &amp; Spa, we believe beauty is more than skin deep. Our tranquil studio
                        is designed to be your escape — a place where you can unwind, be pampered,
                        and leave feeling radiant from the inside out.
                    </p>
                    <p class="text-warm-400 leading-relaxed mb-8 font-light">
                        Using only premium, cruelty-free products and the latest techniques,
                        our skilled artists craft bespoke looks tailored to your style. From classic
                        manicures to intricate nail art, every detail is perfected with care.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <a href="#services"
                            class="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-brand-400 to-brand-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-brand-200/40 transition-all duration-300">
                            View Treatments
                        </a>
                        <a href="#contact"
                            class="inline-flex items-center gap-2 px-7 py-3 border-2 border-brand-200 text-brand-600 text-sm font-semibold rounded-full hover:border-brand-300 hover:bg-brand-50 transition-all duration-300">
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gradient-to-br from-brand-400 to-brand-500 rounded-3xl p-7 text-white col-span-2 shadow-lg shadow-brand-200/20">
                        <p class="text-xl font-display font-bold mb-2">"Absolutely heavenly"</p>
                        <p class="text-white/80 text-sm leading-relaxed font-light">
                            "The most relaxing experience I've ever had. My nails looked stunning and the
                            attention to detail was incredible. I won't go anywhere else!"
                        </p>
                        <p class="text-white/50 text-xs mt-4 font-medium tracking-wide">— Sarah K., Regular Client</p>
                    </div>
                    <div class="bg-white rounded-3xl p-6 border border-brand-100/60 flex flex-col items-start gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div class="w-10 h-10 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-500">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <p class="text-sm font-semibold text-warm-700">Premium Products</p>
                        <p class="text-xs text-warm-400 font-light">Cruelty-free &amp; vegan</p>
                    </div>
                    <div class="bg-white rounded-3xl p-6 border border-accent-100/60 flex flex-col items-start gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div class="w-10 h-10 rounded-2xl bg-accent-100 flex items-center justify-center text-accent-500">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </div>
                        <p class="text-sm font-semibold text-warm-700">Certified Artists</p>
                        <p class="text-xs text-warm-400 font-light">Trained &amp; experienced</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
