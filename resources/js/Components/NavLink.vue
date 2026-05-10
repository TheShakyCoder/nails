<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-brand-400 text-sm font-medium leading-5 text-brand-600 focus:outline-none focus:border-brand-500 transition-all duration-300'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-warm-500 hover:text-brand-600 hover:border-brand-200 focus:outline-none focus:text-brand-600 focus:border-brand-300 transition-all duration-300',
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
