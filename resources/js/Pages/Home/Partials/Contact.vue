<script setup>
defineProps({
    site: Object
})
</script>

<template>
    <section id="contact" class="py-28 bg-gradient-to-b from-white to-brand-50/20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400 mb-4 block">Get In Touch</span>
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-warm-800">Book your visit</h2>
                <p class="text-warm-400 mt-4 max-w-lg mx-auto font-light">
                    Walk-ins welcome, appointments recommended. Reach out to reserve your time or ask about our treatments.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact info -->
                <div class="space-y-4">
                    <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-100/40 hover:shadow-md hover:shadow-brand-100/15 transition-all duration-300">
                        <div class="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-semibold text-warm-700 text-sm">Visit Us</p>
                            <p class="text-warm-400 text-sm mt-0.5 font-light" v-html="site.fullname + '<br>' + site.address"></p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-100/40 hover:shadow-md hover:shadow-brand-100/15 transition-all duration-300">
                        <div class="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-semibold text-warm-700 text-sm">Call or Text</p>
                            <p class="text-warm-400 text-sm mt-0.5 font-light">{{ site.telephone }}</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-100/40 hover:shadow-md hover:shadow-brand-100/15 transition-all duration-300">
                        <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-semibold text-warm-700 text-sm">Email</p>
                            <p class="text-warm-400 text-sm mt-0.5 font-light">{{ site.email }}</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-100/40 hover:shadow-md hover:shadow-brand-100/15 transition-all duration-300">
                        <div class="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-semibold text-warm-700 text-sm">Opening Hours</p>
                            <p class="text-warm-400 text-sm mt-0.5 font-light" v-html="site.opening_times"></p>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-brand-100/40 hover:shadow-md hover:shadow-brand-100/15 transition-all duration-300">
                        <div class="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="font-semibold text-warm-700 text-sm">Shop Online</p>
                            <p class="text-warm-400 text-sm mt-0.5 font-light">Browse our curated collection of nail &amp; skincare products.</p>
                            <a href="#"
                               class="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors">
                                Visit our shop
                                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Contact form -->
                <form class="bg-white rounded-3xl border border-brand-100/40 p-8 space-y-5 shadow-sm">
                    <div class="grid sm:grid-cols-2 gap-5">
                        <div>
                            <label class="block text-xs font-semibold text-warm-500 mb-1.5 tracking-wide">First name</label>
                            <input type="text" placeholder="Jane"
                                class="w-full px-4 py-3 text-sm border border-brand-100/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition bg-brand-50/20 placeholder-warm-300" />
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-warm-500 mb-1.5 tracking-wide">Last name</label>
                            <input type="text" placeholder="Smith"
                                class="w-full px-4 py-3 text-sm border border-brand-100/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition bg-brand-50/20 placeholder-warm-300" />
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-warm-500 mb-1.5 tracking-wide">Email</label>
                        <input type="email" placeholder="jane@example.com"
                            class="w-full px-4 py-3 text-sm border border-brand-100/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition bg-brand-50/20 placeholder-warm-300" />
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-warm-500 mb-1.5 tracking-wide">I'm interested in</label>
                        <select
                            class="w-full px-4 py-3 text-sm border border-brand-100/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition bg-brand-50/20 text-warm-500">
                            <option>Manicure / Pedicure</option>
                            <option>Gel &amp; Shellac</option>
                            <option>Nail Art</option>
                            <option>Spa Treatment</option>
                            <option>Bridal / Group Booking</option>
                            <option>Gift Card</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-warm-500 mb-1.5 tracking-wide">Message</label>
                        <textarea rows="4" placeholder="Tell us about your preferred date, time, or any questions..."
                            class="w-full px-4 py-3 text-sm border border-brand-100/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition resize-none bg-brand-50/20 placeholder-warm-300"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full py-3.5 bg-gradient-to-r from-brand-400 to-brand-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brand-200/40 transition-all duration-300 text-sm">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
