<script setup>
defineProps({
    site: { type: Object },
});
</script>

<template>
    <section id="home"
        class="relative overflow-hidden text-warm-800 min-h-[92vh] flex items-center">

        <!-- Background image -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/media/nails.jpg');"></div>

        <!-- Overlay — soft gradient to keep text readable -->
        <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90"></div>

        <!-- Ambient light — large, quiet, layered -->
        <div class="absolute -top-40 -right-40 w-[900px] h-[900px] bg-brand-100/40 rounded-full blur-[180px]"></div>
        <div class="absolute -bottom-60 -left-40 w-[700px] h-[700px] bg-accent-100/30 rounded-full blur-[160px]"></div>
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/70 rounded-full blur-[120px]"></div>

        <!-- Floating petals — animated, layered -->
        <div class="absolute top-10 right-[22%] w-24 h-24 bg-brand-300/40 rounded-full animate-float blur-[3px]"></div>
        <div class="absolute top-24 right-[10%] w-10 h-10 bg-accent-300/35 rounded-full animate-float-slow blur-[2px]"></div>
        <div class="absolute bottom-32 left-[16%] w-40 h-40 bg-brand-200/30 rounded-full animate-float-delayed blur-[5px]"></div>
        <div class="absolute top-[50%] right-[36%] w-16 h-16 bg-pink-300/35 rounded-full animate-float-slow blur-[3px]"></div>
        <div class="absolute top-[28%] left-[6%] w-12 h-12 bg-purple-300/30 rounded-full animate-float blur-[2px]"></div>
        <div class="absolute bottom-[52%] right-[68%] w-32 h-32 bg-brand-400/25 rounded-full animate-float-delayed blur-[4px]"></div>
        <div class="absolute top-[72%] left-[32%] w-8 h-8 bg-accent-200/40 rounded-full animate-float-slow blur-[1px]"></div>
        <div class="absolute top-[12%] left-[38%] w-5 h-5 bg-pink-200/35 rounded-full animate-float"></div>
        <div class="absolute top-[42%] right-[22%] w-20 h-20 bg-violet-300/30 rounded-full animate-float-delayed blur-[3px]"></div>
        <div class="absolute top-[18%] right-[32%] w-36 h-36 bg-brand-200/25 rounded-full animate-float-slow blur-[5px]"></div>
        <div class="absolute bottom-[40%] left-[28%] w-6 h-6 bg-purple-200/35 rounded-full animate-float"></div>
        <div class="absolute top-[65%] right-[15%] w-28 h-28 bg-accent-300/25 rounded-full animate-float-delayed blur-[4px]"></div>
        <div class="absolute bottom-[15%] left-[45%] w-14 h-14 bg-pink-300/30 rounded-full animate-float blur-[2px]"></div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
            <div class="max-w-3xl mx-auto text-center">

                <!-- Subtle tag -->
                <span
                    class="inline-flex items-center gap-2 bg-brand-50 px-4 py-1.5 rounded-full text-xs tracking-wide uppercase font-semibold text-brand-400 mb-10 border border-brand-100/60">
                    <span class="w-1 h-1 bg-brand-400 rounded-full animate-pulse"></span>
                    Accepting Appointments
                </span>

                <!-- Headline — larger, more breathing room -->
                <h1 class="font-soft text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 text-warm-500 tracking-tight">
                    where beauty<br class="hidden sm:block" />
                    <span class="italic font-bold bg-gradient-to-r from-brand-300 via-brand-400 to-accent-300 bg-clip-text text-transparent pr-2 -mr-2">meets serenity</span>
                </h1>

                <!-- Subheading — refined, concise -->
                <p class="text-lg sm:text-xl text-warm-400 leading-relaxed mb-14 max-w-xl mx-auto">
                    Luxurious nail care and spa treatments in a tranquil setting —
                    expert artistry, premium products, and a moment just for you.
                </p>

                <!-- CTAs — bigger hit area, more visual weight on primary -->
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="#services"
                        class="inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-r from-brand-400 to-brand-500 text-white font-semibold rounded-full shadow-lg shadow-brand-300/25 hover:shadow-xl hover:shadow-brand-300/40 hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide">
                        Explore Services
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="#contact"
                        class="inline-flex items-center gap-2 px-9 py-4 bg-white border border-brand-200/60 text-brand-600 font-semibold rounded-full hover:bg-brand-50 hover:border-brand-300 shadow-sm hover:shadow-md transition-all duration-300 text-sm tracking-wide">
                        Book Appointment
                    </a>
                </div>

                <!-- Trust line — quiet social proof -->
                <p class="mt-16 text-xs text-warm-300 tracking-wide">
                    ★★★★★ &nbsp; Loved by 5,000+ clients &nbsp;·&nbsp; 50+ treatments &nbsp;·&nbsp; Award-winning salon
                </p>
            </div>
        </div>

        <!-- Softer wave divider -->
        <div class="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full" preserveAspectRatio="none">
                <path
                    d="M0 60L60 54C120 48 240 36 360 30C480 24 600 24 720 28C840 32 960 40 1080 44C1200 48 1320 48 1380 48L1440 48V60H0Z"
                    fill="white" />
            </svg>
        </div>
    </section>
</template>
