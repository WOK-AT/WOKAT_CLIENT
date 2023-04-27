/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        system1: ['system1'],
        system2: ['system2'],
        system3: ['system3'],
        system4: ['system4'],
        system5: ['system5'],
        system6: ['system6'],
        system4_medium: ['system4_medium'],
        system5_medium: ['system5_medium'],
        system6_medium: ['system6_medium'],
        system1_bold: ['system1_bold'],
        system2_bold: ['system2_bold'],
        system3_bold: ['system3_bold'],
        system4_bold: ['system4_bold'],
        system5_bold: ['system5_bold'],
        system6_bold: ['system6_bold'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        BLUE_800: '#003F9E',
        BLUE_700: '#0055D4',
        BLUE_600: '#0066FF',
        BLUE_500: '#3687FF',
        BLUE_400: '#5C9DFF',
        BLUE_300: '#97C1FF',
        BLUE_200: '#C9DEFF',
        BLUE_100: '#E0EDFF',
        BLUE_50: '#F0F6FF',
        GRAY_900: '#29303F',
        GRAY_800: '#364659',
        GRAY_600: '#576981',
        GRAY_400: '#7C8A9E',
        GRAY_300: '#9FAABA',
        GRAY_200: '#C5CBD5',
        GRAY_100: '#ECEFF5',
        GRAY_50: '#F6F6F9',
        WHTIE: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
