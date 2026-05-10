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
        ? 'block w-full ps-3 pe-4 py-2 border-l-4 border-brand-400 text-start text-base font-medium text-brand-600 bg-brand-50 focus:outline-none focus:text-brand-700 focus:bg-brand-100 focus:border-brand-500 transition-all duration-300'
        : 'block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-warm-500 hover:text-brand-600 hover:bg-brand-50 hover:border-brand-200 focus:outline-none focus:text-brand-600 focus:bg-brand-50 focus:border-brand-300 transition-all duration-300',
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
