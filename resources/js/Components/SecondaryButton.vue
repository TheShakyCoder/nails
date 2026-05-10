<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center rounded-full border-2 border-brand-200 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-brand-600 transition-all duration-300 hover:bg-brand-50 hover:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2 disabled:opacity-25"
    >
        <slot />
    </button>
</template>
