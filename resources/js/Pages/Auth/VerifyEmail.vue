<script setup>
import { computed } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    status: { type: String },
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
    <GuestLayout title="Verify your email" subtitle="One last step before you get started">
        <Head title="Email Verification" />

        <div class="mb-6 p-4 rounded-xl bg-warm-100 border border-warm-200 text-sm text-warm-600 leading-relaxed">
            Thanks for signing up. Please verify your email address by clicking the link we sent you.
            If it hasn't arrived, you can request a new one below.
        </div>

        <div v-if="verificationLinkSent"
             class="mb-6 flex items-center gap-2 rounded-xl bg-brand-50 border border-brand-200 px-4 py-3 text-sm text-brand-700">
            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            A new verification link has been sent to your email address.
        </div>

        <form @submit.prevent="submit">
            <button
                type="submit"
                :disabled="form.processing"
                class="w-full py-3 bg-brand-600 text-white font-semibold rounded-xl text-sm
                       hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2
                       transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                <svg v-if="form.processing" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                {{ form.processing ? 'Sending…' : 'Resend verification email' }}
            </button>
        </form>

        <p class="mt-6 text-center text-sm text-warm-500">
            <Link :href="route('logout')" method="post" as="button"
                  class="text-warm-400 hover:text-warm-600 transition-colors">
                Sign out
            </Link>
        </p>
    </GuestLayout>
</template>
