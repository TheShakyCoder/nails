<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    status: { type: String },
});

const form = useForm({ email: '' });

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout title="Reset your password" subtitle="We'll send a reset link to your email address">
        <Head title="Forgot Password" />

        <div v-if="status"
             class="mb-6 flex items-center gap-2 rounded-xl bg-brand-50 border border-brand-200 px-4 py-3 text-sm text-brand-700">
            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="space-y-5">
            <div>
                <label for="email" class="block text-xs font-semibold text-warm-700 mb-1.5">Email address</label>
                <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder="you@example.com"
                    class="w-full px-4 py-2.5 text-sm border rounded-xl transition
                           focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                           placeholder-warm-300 text-warm-900"
                    :class="form.errors.email ? 'border-rose-400 bg-rose-50' : 'border-warm-200 bg-white'"
                />
                <InputError class="mt-1.5" :message="form.errors.email" />
            </div>

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
                {{ form.processing ? 'Sending…' : 'Send reset link' }}
            </button>
        </form>

        <p class="mt-6 text-center text-sm text-warm-500">
            Remembered it?
            <Link :href="route('login')" class="text-brand-600 hover:text-brand-800 font-medium transition-colors">
                Back to sign in
            </Link>
        </p>
    </GuestLayout>
</template>
