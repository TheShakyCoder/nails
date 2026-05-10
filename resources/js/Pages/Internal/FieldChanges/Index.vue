<script setup>
import { ref, watch } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout/Index.vue';

const props = defineProps({
    changes:    { type: Object, required: true },
    modelTypes: { type: Array,  required: true },
    filters:    { type: Object, default: () => ({}) },
});

const search   = ref(props.filters.search ?? '');
const model    = ref(props.filters.model ?? '');
const event    = ref(props.filters.event ?? '');
const dateFrom = ref(props.filters.date_from ?? '');
const dateTo   = ref(props.filters.date_to ?? '');

let debounce = null;

function applyFilters() {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
        router.get(route('internal.field-changes.index'), {
            search:    search.value || undefined,
            model:     model.value || undefined,
            event:     event.value || undefined,
            date_from: dateFrom.value || undefined,
            date_to:   dateTo.value || undefined,
        }, {
            preserveState: true,
            replace: true,
        });
    }, 300);
}

watch([search, model, event, dateFrom, dateTo], applyFilters);

function modelName(fqcn) {
    if (!fqcn) return '—';
    return fqcn.split('\\').pop();
}

function truncate(str, len = 60) {
    if (str === null || str === undefined) return '—';
    str = String(str);
    return str.length > len ? str.slice(0, len) + '…' : str;
}

function formatDate(d) {
    if (!d) return '—';
    return new Date(d).toLocaleString();
}

const eventColors = {
    created: 'bg-brand-100 text-brand-600',
    updated: 'bg-blue-100 text-blue-700',
    deleted: 'bg-red-100 text-red-700',
};
</script>

<template>
    <Head title="Field Changes" />

    <AuthenticatedLayout>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 class="text-2xl font-bold mb-6">Field Changes</h1>

            <!-- Filters -->
            <div class="flex flex-wrap gap-3 mb-4">
                <input
                    v-model="search"
                    type="text"
                    placeholder="Search field, value, or ID…"
                    class="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
                />
                <select
                    v-model="model"
                    class="border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                    <option value="">All models</option>
                    <option v-for="t in modelTypes" :key="t.value" :value="t.value">
                        {{ t.label }}
                    </option>
                </select>
                <select
                    v-model="event"
                    class="border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                    <option value="">All events</option>
                    <option value="created">Created</option>
                    <option value="updated">Updated</option>
                    <option value="deleted">Deleted</option>
                </select>
                <input
                    v-model="dateFrom"
                    type="date"
                    class="border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
                <input
                    v-model="dateTo"
                    type="date"
                    class="border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
            </div>

            <!-- Table -->
            <div class="bg-white rounded-lg shadow overflow-x-auto">
                <table class="min-w-full text-sm">
                    <thead class="bg-gray-50 text-left text-gray-500">
                        <tr>
                            <th class="px-4 py-3 font-medium">Model</th>
                            <th class="px-4 py-3 font-medium">ID</th>
                            <th class="px-4 py-3 font-medium">Event</th>
                            <th class="px-4 py-3 font-medium">Field</th>
                            <th class="px-4 py-3 font-medium">Old Value</th>
                            <th class="px-4 py-3 font-medium">New Value</th>
                            <th class="px-4 py-3 font-medium">User</th>
                            <th class="px-4 py-3 font-medium">When</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr v-for="c in changes.data" :key="c.id" class="hover:bg-gray-50">
                            <td class="px-4 py-3 whitespace-nowrap font-medium">{{ modelName(c.auditable_type) }}</td>
                            <td class="px-4 py-3 text-gray-500 whitespace-nowrap font-mono text-xs" :title="c.auditable_id">
                                {{ c.auditable_id?.slice(0, 8) }}…
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span
                                    class="px-2 py-0.5 rounded-full text-xs font-medium"
                                    :class="eventColors[c.event] ?? 'bg-gray-100 text-gray-600'"
                                >{{ c.event }}</span>
                            </td>
                            <td class="px-4 py-3 text-gray-700 whitespace-nowrap font-mono text-xs">{{ c.field ?? '—' }}</td>
                            <td class="px-4 py-3 text-red-700 max-w-xs truncate" :title="c.old_value">{{ truncate(c.old_value) }}</td>
                            <td class="px-4 py-3 text-brand-600 max-w-xs truncate" :title="c.new_value">{{ truncate(c.new_value) }}</td>
                            <td class="px-4 py-3 text-gray-500 whitespace-nowrap">{{ c.user?.name ?? '—' }}</td>
                            <td class="px-4 py-3 text-gray-500 whitespace-nowrap">{{ formatDate(c.changed_at) }}</td>
                        </tr>
                        <tr v-if="!changes.data.length">
                            <td colspan="8" class="px-4 py-8 text-center text-gray-400">No field changes recorded yet.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div v-if="changes.links && changes.links.length > 3" class="mt-4 flex justify-center gap-1">
                <Link
                    v-for="link in changes.links"
                    :key="link.label"
                    :href="link.url ?? '#'"
                    class="px-3 py-1 rounded text-sm"
                    :class="{
                        'bg-blue-600 text-white': link.active,
                        'bg-white text-gray-600 hover:bg-gray-100': !link.active && link.url,
                        'text-gray-300 cursor-default': !link.url,
                    }"
                    v-html="link.label"
                    :preserve-state="true"
                />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
