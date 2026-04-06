<script setup>
import { ref } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import FacebookFeed from '@/Components/FacebookFeed.vue';

defineProps({
    canLogin: { type: Boolean },
    canRegister: { type: Boolean },
});

const mobileMenuOpen = ref(false);

const navLinks = [
    { label: 'Home',     href: '#home' },
    { label: 'About',    href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Events',   href: '#events' },
    { label: 'News',     href: '#news' },
    { label: 'Contact',  href: '#contact' },
];

const services = [
    {
        icon: '👥',
        title: 'Community Groups',
        desc: 'Regular social groups for all ages — from toddler mornings to senior coffee clubs. Everyone is welcome.',
        color: 'bg-brand-50 border-brand-200',
        iconBg: 'bg-brand-100',
    },
    {
        icon: '🎨',
        title: 'Arts & Crafts',
        desc: 'Weekly art classes, pottery workshops, and creative sessions for children and adults alike.',
        color: 'bg-sky-50 border-sky-200',
        iconBg: 'bg-sky-100',
    },
    {
        icon: '⚽',
        title: 'Youth Activities',
        desc: 'After-school clubs, sports sessions, and holiday programmes to keep young people active and engaged.',
        color: 'bg-purple-50 border-purple-200',
        iconBg: 'bg-purple-100',
    },
    {
        icon: '🍽️',
        title: 'Community Café',
        desc: 'Enjoy a hot meal, fresh coffee, and friendly conversation in our welcoming on-site café.',
        color: 'bg-accent-50 border-orange-200',
        iconBg: 'bg-orange-100',
    },
    {
        icon: '🤝',
        title: 'Support Services',
        desc: 'Access advice, foodbank referrals, and wellbeing support from our team of trained volunteers.',
        color: 'bg-rose-50 border-rose-200',
        iconBg: 'bg-rose-100',
    },
    {
        icon: '🏛️',
        title: 'Venue Hire',
        desc: 'Affordable hall and room hire for parties, meetings, and community events throughout the year.',
        color: 'bg-amber-50 border-amber-200',
        iconBg: 'bg-amber-100',
    },
];

const events = [
    {
        date: 'SAT 12 APR',
        title: 'Spring Community Fair',
        time: '10:00 – 16:00',
        location: 'Main Hall',
        tag: 'Community',
        tagColor: 'bg-brand-100 text-brand-700',
        accent: 'bg-brand-600',
    },
    {
        date: 'WED 16 APR',
        title: 'Senior Coffee Morning',
        time: '09:30 – 11:30',
        location: 'Community Café',
        tag: 'Seniors',
        tagColor: 'bg-sky-100 text-sky-700',
        accent: 'bg-sky-500',
    },
    {
        date: 'FRI 25 APR',
        title: 'Youth Film Night',
        time: '18:00 – 21:00',
        location: 'Activity Room',
        tag: 'Youth',
        tagColor: 'bg-purple-100 text-purple-700',
        accent: 'bg-purple-500',
    },
    {
        date: 'SAT 3 MAY',
        title: 'Family Fun Day',
        time: '11:00 – 15:00',
        location: 'Outdoor Space',
        tag: 'Family',
        tagColor: 'bg-accent-100 text-orange-700',
        accent: 'bg-accent-500',
    },
];

const news = [
    {
        date: '1 Apr 2026',
        title: 'New sensory garden officially opens',
        excerpt: 'Thanks to a generous grant and the hard work of our volunteers, the new sensory garden is now open for everyone to enjoy.',
        tag: 'Facilities',
        tagColor: 'bg-brand-100 text-brand-700',
    },
    {
        date: '22 Mar 2026',
        title: 'Foodbank donations up 40% this quarter',
        excerpt: 'The Woodvale community has shown incredible generosity — over 400 families received support through our foodbank this quarter.',
        tag: 'Support',
        tagColor: 'bg-rose-100 text-rose-700',
    },
    {
        date: '14 Mar 2026',
        title: 'Youth football team wins regional cup',
        excerpt: 'Huge congratulations to our Under-14s who brought home the Sefton Community Cup for the first time in 12 years!',
        tag: 'Youth',
        tagColor: 'bg-purple-100 text-purple-700',
    },
];

const stats = [
    { value: '30+', label: 'Years serving the community' },
    { value: '1,200+', label: 'Active members' },
    { value: '80+', label: 'Events per year' },
    { value: '150+', label: 'Dedicated volunteers' },
];
</script>

<template>
    <Head title="Woodvale &amp; Ainsdale Community Centre" />

    <div class="font-sans antialiased text-warm-800 bg-white">

        <!-- ── NAVIGATION ── -->
        <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-warm-200">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-20 items-center justify-between">

                    <!-- Logo -->
                    <a href="#home" class="flex items-center gap-3 shrink-0">
                        <img src="/media/logo.png" alt="WACA Logo" class="h-14 w-auto" />
                        <div class="hidden md:block">
                            <p class="text-lg font-semibold text-brand-700 leading-tight font-display">Woodvale &amp; Ainsdale</p>
                            <p class="text-md text-warm-500 leading-tight">Community Centre</p>
                        </div>
                    </a>

                    <!-- Desktop nav -->
                    <div class="hidden lg:flex items-center gap-1">
                        <a v-for="link in navLinks" :key="link.label"
                           :href="link.href"
                           class="px-2 py-2 text-sm font-medium text-warm-700 rounded-lg hover:bg-brand-50 hover:text-brand-700 transition-colors">
                            {{ link.label }}
                        </a>
                    </div>

                    <!-- CTA buttons -->
                    <div class="hidden lg:flex items-center gap-3">
                        <Link v-if="canLogin && !$page.props.auth?.user" :href="route('login')"
                              class="px-2 py-2 text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors">
                            Login
                        </Link>
                        <Link v-if="canRegister && !$page.props.auth?.user" :href="route('register')"
                              class="px-2 py-2 text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors">
                            Register
                        </Link>
                        <Link v-if="canLogin && $page.props.auth?.user" :href="route('dashboard')"
                              class="px-2 py-2 text-sm font-medium text-brand-700 hover:text-brand-800 transition-colors">
                            Dashboard
                        </Link>
                        <a href="#contact"
                           class="px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm">
                            Get Involved
                        </a>
                    </div>

                    <!-- Mobile hamburger -->
                    <button @click="mobileMenuOpen = !mobileMenuOpen"
                            class="lg:hidden p-2 rounded-lg text-warm-600 hover:bg-warm-100 transition-colors">
                        <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-if="mobileMenuOpen" class="lg:hidden border-t border-warm-100 bg-white px-4 pb-4 pt-2 space-y-1">
                <a v-for="link in navLinks" :key="link.label" :href="link.href"
                   @click="mobileMenuOpen = false"
                   class="block px-4 py-2.5 text-sm font-medium text-warm-700 rounded-lg hover:bg-brand-50 hover:text-brand-700 transition-colors">
                    {{ link.label }}
                </a>
                <div class="pt-2 border-t border-warm-100 flex flex-col gap-2">
                    <Link v-if="canLogin && !$page.props.auth?.user" :href="route('login')"
                          class="block px-4 py-2.5 text-sm font-medium text-brand-700 rounded-lg hover:bg-brand-50 transition-colors">
                        Login
                    </Link>
                    <a href="#contact"
                       class="block text-center px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors">
                        Get Involved
                    </a>
                </div>
            </div>
        </nav>

        <!-- ── HERO ── -->
        <section id="home" class="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white">
            <!-- Decorative circles -->
            <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/30 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-32 -left-16 w-80 h-80 bg-brand-800/40 rounded-full blur-3xl"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-2xl"></div>

            <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
                <div class="max-w-3xl">
                    <span class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
                        <span class="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                        Woodvale &amp; Ainsdale, Southport
                    </span>
                    <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Your Community,<br />
                        <span class="text-green-300">Our Heart</span>
                    </h1>
                    <p class="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                        A warm and welcoming hub where neighbours become friends.
                        We've been at the heart of Woodvale and Ainsdale for over 30 years,
                        running events, services, and support for everyone.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#events"
                           class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-lg text-sm">
                            Upcoming Events
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </a>
                        <a href="#contact"
                           class="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/25 transition-colors border border-white/30 text-sm">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>

            <!-- Wave divider -->
            <div class="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
                    <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
                </svg>
            </div>
        </section>

        <!-- ── STATS ── -->
        <section class="bg-white py-12">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="stat in stats" :key="stat.label"
                         class="text-center p-6 rounded-2xl bg-brand-50 border border-brand-100">
                        <p class="font-display text-3xl font-bold text-brand-700">{{ stat.value }}</p>
                        <p class="text-sm text-warm-500 mt-1">{{ stat.label }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── ABOUT ── -->
        <section id="about" class="py-20 bg-warm-50">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span class="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3 block">About Us</span>
                        <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-900 mb-6 leading-tight">
                            Built by the community,<br />for the community
                        </h2>
                        <p class="text-warm-600 leading-relaxed mb-4">
                            Woodvale &amp; Ainsdale Community Centre is a registered charity dedicated to
                            improving lives and strengthening the bonds that make our neighbourhood special.
                            We believe everyone deserves a place to belong.
                        </p>
                        <p class="text-warm-600 leading-relaxed mb-8">
                            From our daily café and social groups to our youth programmes and support services,
                            everything we do is driven by the needs of local people — shaped by volunteers,
                            funded by donations, and delivered with care.
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <a href="#services"
                               class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors">
                                What We Offer
                            </a>
                            <a href="#contact"
                               class="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-brand-200 text-brand-700 text-sm font-semibold rounded-xl hover:border-brand-400 transition-colors">
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-brand-600 rounded-2xl p-6 text-white col-span-2">
                            <p class="text-2xl font-display font-bold mb-2">"A true community gem"</p>
                            <p class="text-white/80 text-sm leading-relaxed">
                                "I've been coming to the centre for 15 years. It's changed my life — I made friends here,
                                got help when I needed it, and now I volunteer every Thursday."
                            </p>
                            <p class="text-white/60 text-xs mt-3 font-medium">— Margaret T., Ainsdale resident</p>
                        </div>
                        <div class="bg-white rounded-2xl p-5 border border-warm-200 flex flex-col items-start gap-2">
                            <span class="text-3xl">🏅</span>
                            <p class="text-sm font-semibold text-warm-800">Registered Charity</p>
                            <p class="text-xs text-warm-500">No. 1234567</p>
                        </div>
                        <div class="bg-white rounded-2xl p-5 border border-warm-200 flex flex-col items-start gap-2">
                            <span class="text-3xl">🌿</span>
                            <p class="text-sm font-semibold text-warm-800">Est. 1993</p>
                            <p class="text-xs text-warm-500">Over 30 years of service</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── SERVICES ── -->
        <section id="services" class="py-20 bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <span class="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3 block">What We Do</span>
                    <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-900">
                        Something for everyone
                    </h2>
                    <p class="text-warm-500 mt-4 max-w-xl mx-auto">
                        From early years to older adults, we run programmes and activities that bring people together.
                    </p>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="service in services" :key="service.title"
                         class="group p-6 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 cursor-default"
                         :class="service.color">
                        <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" :class="service.iconBg">
                            {{ service.icon }}
                        </div>
                        <h3 class="font-semibold text-warm-900 text-base mb-2">{{ service.title }}</h3>
                        <p class="text-sm text-warm-600 leading-relaxed">{{ service.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── EVENTS ── -->
        <section id="events" class="py-20 bg-gradient-to-b from-brand-50 to-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex items-end justify-between mb-14">
                    <div>
                        <span class="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3 block">Upcoming Events</span>
                        <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-900">
                            What's on
                        </h2>
                    </div>
                    <a href="#" class="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-800 transition-colors">
                        View all events
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div v-for="event in events" :key="event.title"
                         class="bg-white rounded-2xl overflow-hidden border border-warm-200 shadow-sm hover:shadow-md transition-shadow">
                        <div class="h-2 w-full" :class="event.accent"></div>
                        <div class="p-5">
                            <p class="text-xs font-bold tracking-wider text-warm-400 mb-3">{{ event.date }}</p>
                            <h3 class="font-semibold text-warm-900 mb-2 leading-snug">{{ event.title }}</h3>
                            <div class="flex items-center gap-1.5 text-xs text-warm-500 mb-1">
                                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                {{ event.time }}
                            </div>
                            <div class="flex items-center gap-1.5 text-xs text-warm-500 mb-4">
                                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                {{ event.location }}
                            </div>
                            <span class="inline-block px-2.5 py-1 rounded-full text-xs font-semibold" :class="event.tagColor">
                                {{ event.tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── NEWS ── -->
        <section id="news" class="py-20 bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex items-end justify-between mb-14">
                    <div>
                        <span class="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3 block">Latest News</span>
                        <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-900">
                            From the centre
                        </h2>
                    </div>
                    <a href="#" class="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-800 transition-colors">
                        All news
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>

                <div class="grid md:grid-cols-3 gap-7">
                    <article v-for="item in news" :key="item.title"
                             class="group border border-warm-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer">
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-2.5 py-1 rounded-full text-xs font-semibold" :class="item.tagColor">{{ item.tag }}</span>
                            <time class="text-xs text-warm-400">{{ item.date }}</time>
                        </div>
                        <h3 class="font-semibold text-warm-900 mb-3 leading-snug group-hover:text-brand-700 transition-colors">
                            {{ item.title }}
                        </h3>
                        <p class="text-sm text-warm-500 leading-relaxed">{{ item.excerpt }}</p>
                        <div class="mt-4 flex items-center gap-1 text-xs font-medium text-brand-600">
                            Read more
                            <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- ── FACEBOOK FEED ── -->
        <FacebookFeed />

        <!-- ── VOLUNTEER CTA ── -->
        <section class="py-20 bg-gradient-to-r from-brand-600 to-brand-700 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-6 left-12 text-8xl">🌳</div>
                <div class="absolute bottom-6 right-16 text-8xl">🤲</div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20">💚</div>
            </div>
            <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
                    Want to make a difference?
                </h2>
                <p class="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                    Whether you'd like to volunteer, donate, or simply come along and see what we're about —
                    we'd love to hear from you. No experience necessary. Just bring a smile.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="#contact"
                       class="px-7 py-3.5 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-lg text-sm">
                        Become a Volunteer
                    </a>
                    <a href="#contact"
                       class="px-7 py-3.5 bg-white/15 text-white font-semibold rounded-xl hover:bg-white/25 transition-colors border border-white/30 text-sm">
                        Make a Donation
                    </a>
                </div>
            </div>
        </section>

        <!-- ── CONTACT ── -->
        <section id="contact" class="py-20 bg-warm-50">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <span class="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3 block">Get In Touch</span>
                    <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-900">We'd love to hear from you</h2>
                    <p class="text-warm-500 mt-4 max-w-xl mx-auto">Drop in, give us a call, or send us a message. We're here Mon–Sat.</p>
                </div>

                <div class="grid lg:grid-cols-2 gap-12">
                    <!-- Contact info -->
                    <div class="space-y-6">
                        <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-warm-200">
                            <div class="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-lg shrink-0">📍</div>
                            <div>
                                <p class="font-semibold text-warm-900 text-sm">Address</p>
                                <p class="text-warm-500 text-sm mt-0.5">Woodvale &amp; Ainsdale Community Centre<br />Woodvale Road, Ainsdale, Southport PR8 3NX</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-warm-200">
                            <div class="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-lg shrink-0">📞</div>
                            <div>
                                <p class="font-semibold text-warm-900 text-sm">Phone</p>
                                <p class="text-warm-500 text-sm mt-0.5">01704 000 000</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-warm-200">
                            <div class="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-lg shrink-0">✉️</div>
                            <div>
                                <p class="font-semibold text-warm-900 text-sm">Email</p>
                                <p class="text-warm-500 text-sm mt-0.5">hello@woodvalecommunity.org</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-warm-200">
                            <div class="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-lg shrink-0">🕐</div>
                            <div>
                                <p class="font-semibold text-warm-900 text-sm">Opening Hours</p>
                                <p class="text-warm-500 text-sm mt-0.5">Monday – Friday: 9:00am – 6:00pm<br />Saturday: 10:00am – 4:00pm</p>
                            </div>
                        </div>
                    </div>

                    <!-- Contact form -->
                    <form class="bg-white rounded-2xl border border-warm-200 p-7 space-y-5 shadow-sm">
                        <div class="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-xs font-semibold text-warm-700 mb-1.5">First name</label>
                                <input type="text" placeholder="Jane"
                                       class="w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-warm-700 mb-1.5">Last name</label>
                                <input type="text" placeholder="Smith"
                                       class="w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition" />
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-warm-700 mb-1.5">Email</label>
                            <input type="email" placeholder="jane@example.com"
                                   class="w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-warm-700 mb-1.5">Subject</label>
                            <select class="w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition text-warm-600">
                                <option>General enquiry</option>
                                <option>Volunteering</option>
                                <option>Venue hire</option>
                                <option>Donation</option>
                                <option>Events</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-warm-700 mb-1.5">Message</label>
                            <textarea rows="4" placeholder="How can we help?"
                                      class="w-full px-4 py-2.5 text-sm border border-warm-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"></textarea>
                        </div>
                        <button type="submit"
                                class="w-full py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors text-sm shadow-sm">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- ── FOOTER ── -->
        <footer class="bg-warm-900 text-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
                <div class="grid md:grid-cols-4 gap-10 mb-10">
                    <div class="md:col-span-2">
                        <div class="flex items-center gap-3 mb-4">
                            <img src="/media/logo.png" alt="WACA Logo" class="h-14 w-auto brightness-0 invert opacity-90" />
                            <div>
                                <p class="font-semibold text-white font-display">Woodvale &amp; Ainsdale</p>
                                <p class="text-xs text-white/50">Community Centre</p>
                            </div>
                        </div>
                        <p class="text-white/60 text-sm leading-relaxed max-w-xs">
                            A registered charity serving the communities of Woodvale and Ainsdale, Southport since 1993.
                        </p>
                        <p class="text-white/40 text-xs mt-3">Registered Charity No. 1234567</p>
                    </div>

                    <div>
                        <p class="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</p>
                        <ul class="space-y-2">
                            <li v-for="link in navLinks" :key="link.label">
                                <a :href="link.href" class="text-white/60 text-sm hover:text-white transition-colors">{{ link.label }}</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p class="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Get Involved</p>
                        <ul class="space-y-2 text-sm text-white/60 mb-6">
                            <li><a href="#" class="hover:text-white transition-colors">Volunteer with us</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Make a donation</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Hire our venue</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Join our mailing list</a></li>
                        </ul>
                        <p class="text-white/70 text-xs font-semibold uppercase tracking-widest mb-3">Follow Us</p>
                        <div class="flex gap-3">
                            <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-sm">f</a>
                            <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-sm">in</a>
                            <a href="#" class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors text-sm">tw</a>
                        </div>
                    </div>
                </div>

                <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
                    <p>&copy; {{ new Date().getFullYear() }} Woodvale &amp; Ainsdale Community Centre. All rights reserved.</p>
                    <div class="flex gap-5">
                        <a href="#" class="hover:text-white/70 transition-colors">Privacy Policy</a>
                        <a href="#" class="hover:text-white/70 transition-colors">Terms of Use</a>
                        <a href="#" class="hover:text-white/70 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>
