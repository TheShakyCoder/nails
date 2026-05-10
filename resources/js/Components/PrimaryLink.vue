<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: String,
});
</script>

<template>
    <Link :href="href"
        class="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-brand-400 to-accent-300 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-brand-200/40 transition-all duration-300">
        <slot />
    </Link>
</template>