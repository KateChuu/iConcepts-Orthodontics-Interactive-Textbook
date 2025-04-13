/** @format */

import type { Config } from 'tailwindcss';

// const config: Config = {
//   mode: 'jit',
//   content: [
//     './src/**/*.{js,ts,jsx,tsx,html,mdx}',
//     './src/**/*.{js,ts,jsx,tsx,html,mdx}',
//   ],
//   darkMode: 'class',
//   theme: {
//     screens: {
//       md: { max: '1050px' },
//       sm: { max: '550px' },
//     },
//     extend: {
//       colors: {
//         black: {
//           '900_26': '#00000026',
//         },
//         blue_gray: {
//           100: '#cac4d0',
//           600: '#65558f',
//         },
//         gray: {
//           50: '#fef7ff',
//           600: '#79747e',
//           800: '#49454f',
//           900: '#1d192b',
//           '400_01': '#c6c6c6',
//           '900_01': '#1d1b20',
//         },
//         purple: {
//           50: '#f3edf7',
//         },
//         white: {
//           a700: '#ffffff',
//         },
//       },
//       boxShadow: {
//         xs: '0 1px 1px 0 #00000026',
//       },
//       fontFamily: {
//         roboto: 'Roboto',
//       },
//     },
//   },
//   plugins: [require('@tailwindcss/forms')],
// };

// export default config;

const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        md: { max: '1050px' },
        sm: { max: '550px' },
      },
    },
    extend: {
      colors: {
        black: {
          '900_26': '#00000026',
        },
        blue_gray: {
          100: '#cac4d0',
          600: '#65558f',
        },
        gray: {
          50: '#fef7ff',
          600: '#79747e',
          800: '#49454f',
          900: '#1d192b',
          '400_01': '#c6c6c6',
          '900_01': '#1d1b20',
        },
        purple: {
          50: '#f3edf7',
        },
        white: {
          a700: '#ffffff',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        xs: '0 1px 1px 0 #00000026',
      },
      fontFamily: {
        roboto: 'Roboto',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
} satisfies Config;

export default config;
