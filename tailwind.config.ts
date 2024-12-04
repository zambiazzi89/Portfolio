import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        aref: ['var(--font-arefRuqaaInk)', ...fontFamily.serif],
        croissant: ['var(--font-croissantOne)', ...fontFamily.serif],
        cormorant: ['var(--font-cormorant)', ...fontFamily.serif],
        lexend: ['var(--font-lexend)', ...fontFamily.sans],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
      gridTemplateColumns: {
        '1fr-auto': '1fr auto',
      },
      height: {
        '200svh-minus-navbar': 'calc(200svh - 7rem)',
        'svh-minus-navbar-lg': 'calc(100svh - 5rem)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDelayed: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseToZero: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'pulse-slow': 'pulseToZero 3.5s infinite',
        fadeIn2s: 'fadeInDelayed 2s ease-in-out',
        fadeIn3s: 'fadeInDelayed 3s ease-in-out',
        fadeIn4s: 'fadeInDelayed 4s ease-in-out',
        fadeIn5s: 'fadeInDelayed 5s ease-in-out',
        fadeIn6s: 'fadeInDelayed 6s ease-in-out',
        fadeIn7s: 'fadeInDelayed 7s ease-in-out',
        fadeIn8s: 'fadeInDelayed 8s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
