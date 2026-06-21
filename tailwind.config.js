import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
                display: ['Playfair Display', ...defaultTheme.fontFamily.sans],
                soft: ['Nunito', 'Quicksand', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    50:  '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7e22ce',
                    800: '#6b21a8',
                    900: '#581c87',
                },
                accent: {
                    50:  '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',
                },
                warm: {
                    50:  '#faf9fb',
                    100: '#f5f3f7',
                    200: '#ebe7ef',
                    300: '#d8d3de',
                    400: '#a9a2b2',
                    500: '#7c7489',
                    600: '#5c5468',
                    700: '#443d4e',
                    800: '#2d2735',
                    900: '#1e1a24',
                },
            },
            backgroundImage: {
                'spa-gradient': 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #fff1f2 100%)',
                'spa-hero': 'linear-gradient(135deg, #ddd6fe 0%, #e9d5ff 30%, #fce7f3 70%, #fecdd3 100%)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0.6' },
                    '25%': { transform: 'translateY(-60px) translateX(30px) scale(1.15)', opacity: '0.9' },
                    '50%': { transform: 'translateY(-30px) translateX(-20px) scale(0.9)', opacity: '0.7' },
                    '75%': { transform: 'translateY(-75px) translateX(40px) scale(1.1)', opacity: '0.85' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0.5' },
                    '33%': { transform: 'translateY(-50px) translateX(-35px) scale(1.2)', opacity: '0.85' },
                    '66%': { transform: 'translateY(-80px) translateX(25px) scale(0.85)', opacity: '0.65' },
                },
                'float-delayed': {
                    '0%, 100%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0.55' },
                    '20%': { transform: 'translateY(-40px) translateX(35px) scale(1.15)', opacity: '0.85' },
                    '50%': { transform: 'translateY(-70px) translateX(-28px) scale(1.05)', opacity: '0.7' },
                    '80%': { transform: 'translateY(-25px) translateX(20px) scale(0.9)', opacity: '0.9' },
                },
            },
            animation: {
                'float': 'float 10s ease-in-out infinite',
                'float-slow': 'float-slow 14s ease-in-out infinite',
                'float-delayed': 'float-delayed 12s ease-in-out infinite 1s',
            },
        },
    },

    plugins: [forms, typography],
};
