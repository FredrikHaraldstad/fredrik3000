import type { Config } from "tailwindcss";
import { jokulTypographyPlugin } from "@fremtind/jokul/tailwind";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Fremtind Grotesk",
          "Adjusted Arial Fallback",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Fremtind Grotesk Display",
          "Adjusted Arial Display Fallback",
          "Arial",
          "sans-serif",
        ],
      },
      // Jøkul semantic color tokens via CSS variables (set by core.css)
      colors: {
        "background-page": "var(--jkl-color-background-page)",
        "background-page-variant": "var(--jkl-color-background-page-variant)",
        "background-container": "var(--jkl-color-background-container)",
        "background-container-low":
          "var(--jkl-color-background-container-low)",
        "background-container-high":
          "var(--jkl-color-background-container-high)",
        "background-container-inverted":
          "var(--jkl-color-background-container-inverted)",
        "background-container-subdued":
          "var(--jkl-color-background-container-subdued)",
        "background-action": "var(--jkl-color-background-action)",
        "background-interactive": "var(--jkl-color-background-interactive)",
        "background-interactive-hover":
          "var(--jkl-color-background-interactive-hover)",
        "background-interactive-selected":
          "var(--jkl-color-background-interactive-selected)",
        "text-default": "var(--jkl-color-text-default)",
        "text-subdued": "var(--jkl-color-text-subdued)",
        "text-inverted": "var(--jkl-color-text-inverted)",
        "text-on-action": "var(--jkl-color-text-on-action)",
        "text-interactive": "var(--jkl-color-text-interactive)",
        "text-interactive-hover": "var(--jkl-color-text-interactive-hover)",
        "border-action": "var(--jkl-color-border-action)",
        "border-input": "var(--jkl-color-border-input)",
        "border-input-focus": "var(--jkl-color-border-input-focus)",
        "border-separator": "var(--jkl-color-border-separator)",
        "border-separator-strong": "var(--jkl-color-border-separator-strong)",
        "border-subdued": "var(--jkl-color-border-subdued)",
      },
      // Jøkul border radius scale (s/m/l naming to avoid conflict with Tailwind defaults)
      borderRadius: {
        xs: "0.25rem",
        s: "0.5rem",
        m: "0.75rem",
        l: "1rem",
      },
    },
  },
  plugins: [jokulTypographyPlugin],
};

export default config;
