/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        primary: "oklch(var(--primary) / <alpha-value>)",
        "primary-foreground": "oklch(var(--primary-foreground) / <alpha-value>)",
        secondary: "oklch(var(--secondary) / <alpha-value>)",
        "secondary-foreground": "oklch(var(--secondary-foreground) / <alpha-value>)",
        // extras personalizados
        primaria: "var(--primaria)",
        textoPrincipal: "var(--textoPrincipal)",
        textoSecundario: "var(--textoSecundario)",
        botaoNormal: "var(--botaoNormal)",
        botaoHover: "var(--botaoHover)",
        bordaDivisor: "var(--bordaDivisor)",
        realceLinkHover: "var(--realceLinkHover)",
      },
      boxShadow: {
        purple: "0 2px 4px rgba(167, 139, 250, 0.6)",
        purpleLg: "0 8px 16px rgba(167, 139, 250, 0.6)",
      },
      fontFamily: {
        arimo: ["var(--font-arimo)", "sans-serif"],
        pixelify: ["var(--font-pixelify)", "cursive"], // ou fallback que preferir
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      keyframes: { 
        typing: { 
          from: { width: "0", borderRight: "3px solid var(--botaoHover)" }, 
          to: { width: "25ch", borderRight: "3px solid transparent" }, 
        }, 
      blink: { 
        "50%": { borderColor: "transparent" }, 
      }, 
    }, 
    animation: { 
      typing: "typing 4s steps(25, end) forwards, blink 0.5s step-end infinite", 
    }, 
  },
  },
  plugins: [],
};
