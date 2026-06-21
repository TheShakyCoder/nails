<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
});
</script>

<template>
    <div class="min-h-screen flex font-sans antialiased">

        <!-- Left brand panel -->
        <div class="hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col relative overflow-hidden">

            <!-- Gradient background -->
            <div class="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-purple-700"></div>

            <!-- Soft decorative orbs -->
            <div class="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -right-16 w-80 h-80 bg-brand-700/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute top-1/3 right-1/4 w-40 h-40 bg-accent-300/10 rounded-full blur-2xl pointer-events-none"></div>

            <!-- Back to site -->
            <div class="relative px-10 pt-10">
                <Link href="/" class="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors duration-200">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Back to website
                </Link>
            </div>

            <!-- Centre content -->
            <div class="relative flex-1 flex flex-col justify-center px-10 xl:px-14">
                <Link href="/" class="flex items-center gap-4 mb-10">
                    <img src="/media/logo.png" alt="Acme Nails and Spa" class="h-16 w-auto brightness-0 invert opacity-90" />
                    <div>
                        <p class="font-display text-2xl text-white leading-tight tracking-wide">Acme</p>
                        <p class="text-white/50 text-xs tracking-[0.25em] uppercase">Nails and Spa</p>
                    </div>
                </Link>

                <h1 class="font-display text-3xl xl:text-4xl font-bold leading-tight mb-4 text-white">
                    Welcome back
                </h1>
                <p class="text-white/65 text-base leading-relaxed mb-10 max-w-sm font-light">
                    Manage appointments, view your treatment history, and stay up to date with our latest offers.
                </p>

                <!-- Feature bullets -->
                <ul class="space-y-4">
                    <li v-for="item in [
                        { text: 'Book and manage appointments' },
                        { text: 'Browse our treatment menu' },
                        { text: 'Earn loyalty rewards' },
                        { text: 'Exclusive member offers' },
                    ]" :key="item.text" class="flex items-center gap-3 text-white text-sm font-medium">
                        <span class="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                            <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </span>
                        {{ item.text }}
                    </li>
                </ul>
            </div>

            <!-- Footer -->
            <div class="relative px-10 pb-10">
                <p class="text-white/30 text-xs font-light">&copy; {{ new Date().getFullYear() }} Acme Nails and Spa. All rights reserved.</p>
            </div>
        </div>

        <!-- Right form panel -->
        <div class="flex-1 flex flex-col bg-gradient-to-b from-brand-50/30 to-white">

            <!-- Mobile header -->
            <div class="lg:hidden flex items-center justify-between px-6 pt-6 pb-4">
                <Link href="/" class="flex items-center gap-3">
                    <img src="/media/logo.png" alt="Acme Nails and Spa" class="h-10 w-auto" />
                    <div>
                        <p class="font-display text-brand-700 text-lg leading-tight tracking-wide">Acme</p>
                        <p class="text-accent-400 text-xs tracking-[0.2em] uppercase font-light">Nails and Spa</p>
                    </div>
                </Link>
                <Link href="/" class="text-xs text-warm-400 hover:text-brand-500 transition-colors font-medium">
                    Back to site
                </Link>
            </div>

            <!-- Form area -->
            <div class="flex-1 flex items-center justify-center px-6 py-10 sm:px-10">
                <div class="w-full max-w-md">

                    <div class="mb-8">
                        <h2 class="font-display text-2xl font-bold text-warm-800">{{ title }}</h2>
                        <p v-if="subtitle" class="text-warm-400 text-sm mt-1 font-light">{{ subtitle }}</p>
                    </div>

                    <slot />
                </div>
            </div>
        </div>

    </div>
</template>
