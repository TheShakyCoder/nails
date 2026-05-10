<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Link
        :href="href"
        class="block w-full px-4 py-2 text-start text-sm leading-5 text-warm-600 transition-all duration-200 hover:bg-brand-50 hover:text-brand-600 focus:bg-brand-50 focus:outline-none"
    >
        <slot />
    </Link>
</template>
