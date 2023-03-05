/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {

    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },

    borderRadius: {
      "none": "0",
      "sm": ".125rem",
      "md": ".25rem",
      "lg": ".5rem",
      DEFAULT: "0.75rem",
      "rounded-2xl": "1rem",
      "rounded-3xl": "1.5rem",
      "full": "9999px"
    },

    spacing: {
      "0": "0px",
      px: "1px",
      "0.25": "0.25rem", //~4px
      "0.5": "0.5rem", //~8px
      "1": "1rem", //~16px
      "2": "2rem", //~32px
      "3": "3rem", //~48px
      "4": "4rem" //~64px
    },

    fontFamily: {
      sans: ["Inter", "sans"]
    },

    extend: {
      colors: {

        transparent: "transparent",

        background: {
          lightest: "#FFFFFF",
          lighter: "#f5f5f5",
          light: "#d4d4d4",
          dark: "#404040",
          darker: "#262626",
          darkest: "#171717"
        },

        white: "#FFFFFF",
        black: "#000000",

        primary: {
          20: "#932657",
          30: "#a72b63",
          variant: "#a72b63",
          40: "#bb306f",
          50: "#CC397B",
          DEFAULT: "#CC397B",
          60: "#d14d89",
          70: "#d66296",
          80: "#dc76a4",
          100: "#FFFFFF"
        },

        secondary: {
          0: "#07001b",
          10: "#27009a",
          20: "#2d00b3",
          30: "#3300cc",
          variant: "#3300cc",
          40: "#3a00e6",
          50: "#4000ff",
          DEFAULT: "#4000ff",
          60: "#531aff",
          70: "#6633ff",
          80: "#794dff",
          90: "#9f80ff",
          100: "#FFFFFF"
        },

        error: "#ef4444"

      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};