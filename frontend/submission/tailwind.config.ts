import forms from "@tailwindcss/forms";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-orange": "#ed6d00"
      },
      fontFamily: {
        "josefin": ["var(--font-josefin-sans)", "sans-serif"]
      },
      screens: {
        "xsm": "500px"
      }
    },
  },
  plugins: [forms],
} satisfies Config;
