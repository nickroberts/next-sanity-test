module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        brand: {
          light: `var(--color-brand-light, #85d7ff)`,
          DEFAULT: `var(--color-brand, #1fb6ff)`,
          dark: `var(--color-brand-dark, #009eeb)`,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
