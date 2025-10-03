import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space_grotesk: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        albert_sans: ["Albert Sans", "ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"],
        hector: ["Hector", "ui-sans-serif", "system-ui"],
      },
      screens: {
        mobile: { max: "769px" },
        tablet: { min: "770px", max: "1439px" },
        desktop: { min: "1440px" },
      },
    },
  },
} satisfies Config;
