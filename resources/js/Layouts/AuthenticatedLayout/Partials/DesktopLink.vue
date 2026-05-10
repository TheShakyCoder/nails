<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: { type: String, required: true },
    title: { type: String, required: true },
});
</script>

<template>
    <Link
        :href="route(href)"
        class="px-3 py-2 text-sm font-medium rounded-full transition-all duration-200"
        :class="
            route().current(href)
                ? 'bg-brand-50 text-brand-600'
                : 'text-warm-500 hover:bg-brand-50 hover:text-brand-600'
        "
    >
        {{ title }}
    </Link>
</template>
