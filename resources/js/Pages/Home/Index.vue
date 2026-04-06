<script setup>
import { Head } from '@inertiajs/vue3';
import FacebookFeed from '@/Components/FacebookFeed.vue';
import Hero from '@/Pages/Home/Partials/Hero.vue';
import Stats from '@/Pages/Home/Partials/Stats.vue';
import About from '@/Pages/Home/Partials/About.vue';
import Services from '@/Pages/Home/Partials/Services.vue';
import Events from '@/Pages/Home/Partials/Events.vue';
import News from '@/Pages/Home/Partials/News.vue';
import Volunteer from '@/Pages/Home/Partials/Volunteer.vue';
import Contact from '@/Pages/Home/Partials/Contact.vue';
import Header from '@/Layouts/Partials/Header.vue';
import Footer from '@/Layouts/Partials/Footer.vue';

defineProps({
    canLogin: { type: Boolean },
    canRegister: { type: Boolean },
    site: { type: Object },
});

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Events', href: '#events' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
];
</script>

<template>

    <Head title="Woodvale &amp; Ainsdale Community Centre" />

    <div class="font-sans antialiased text-warm-800 bg-white">

        <Header :navLinks="navLinks" :canLogin="canLogin" :canRegister="canRegister" />

        <!-- ── HERO ── -->
        <Hero :site="site" />

        <!-- ── STATS ── -->
        <Stats />

        <!-- ── ABOUT ── -->
        <About />

        <!-- ── SERVICES ── -->
        <Services />

        <!-- ── EVENTS ── -->
        <Events />

        <!-- ── NEWS ── -->
        <News />

        <!-- ── FACEBOOK FEED ── -->
        <FacebookFeed />

        <!-- ── VOLUNTEER CTA ── -->
        <Volunteer />

        <!-- ── CONTACT ── -->
        <Contact :site="site" />

        <!-- ── FOOTER ── -->
        <Footer :navLinks="navLinks" />

    </div>
</template>
