<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="rounded-xl border-brand-100 bg-brand-50/20 shadow-sm focus:border-brand-300 focus:ring-brand-300 transition-all duration-200 placeholder-warm-300"
        v-model="model"
        ref="input"
    />
</template>
