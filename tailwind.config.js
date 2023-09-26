/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto",
      martian: "Martian",
    },
    colors: {
      primary: "#e8e8e8",
      secondary: "#0F4C75",
      dark: {
        50: "#050507",
        100: "#08090C",
        200: "#0E0F15",
        300: "#191A24",
        400: "#232533",
        500: "#323449",
        600: "#484A67",
        700: "#666A92",
        800: "#A2A4BE",
        900: "#F9F9FB",
      },
      gray: {
        900: "#f8f9fa",
        800: "#f1f3f5",
        700: "#e9ecef",
        600: "#dee2e6",
        500: "#ced4da",
        400: "#adb5bd",
        300: "#868e96",
        200: "#495057",
        100: "#343a40",
        50: "#212529",
      },
      white: "#ffffff",
      black: "#000000",
      red: {
        900: "#fff5f5",
        800: "#ffe3e3",
        700: "#ffc9c9",
        600: "#ffa8a8",
        500: "#ff8787",
        400: "#ff6b6b",
        300: "#fa5252",
        200: "#f03e3e",
        100: "#e03131",
        50: "#c92a2a",
      },
      indigo: {
        900: "#edf2ff",
        800: "#dbe4ff",
        700: "#bac8ff",
        600: "#91a7ff",
        500: "#748ffc",
        400: "#5c7cfa",
        300: "#4c6ef5",
        200: "#4263eb",
        100: "#3b5bdb",
        50: "#364fc7",
      },
      blue: {
        900: "#e7f5ff",
        800: "#d0ebff",
        700: "#a5d8ff",
        600: "#74c0fc",
        500: "#4dabf7",
        400: "#339af0",
        300: "#228be6",
        200: "#1c7ed6",
        100: "#1971c2",
        50: "#1864ab",
      },
      cyan: {
        900: "#e3fafc",
        800: "#c5f6fa",
        700: "#99e9f2",
        600: "#66d9e8",
        500: "#3bc9db",
        400: "#22b8cf",
        300: "#15aabf",
        200: "#1098ad",
        100: "#0c8599",
        50: "#0b7285",
      },
      teal: {
        900: "#e6fcf5",
        800: "#c3fae8",
        700: "#96f2d7",
        600: "#63e6be",
        500: "#38d9a9",
        400: "#20c997",
        300: "#12b886",
        200: "#0ca678",
        100: "#099268",
        50: "#087f5b",
      },
      yellow: {
        900: "#fff9db",
        800: "#fff3bf",
        700: "#ffec99",
        600: "#ffe066",
        500: "#ffd43b",
        400: "#fcc419",
        300: "#fab005",
        200: "#f59f00",
        100: "#f08c00",
        50: "#e67700",
      },
      transparent: {
        900: '#ffffff90',
        800: '#ffffff80',
        700: '#ffffff70',
        600: '#ffffff60',
        500: '#ffffff50',
        400: '#ffffff40',
        300: '#ffffff30',
        200: '#ffffff20',
        100: '#ffffff10',
        75: '#ffffff05',
        50: '#ffffff00',
      }
    },
  },
  important: true,
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};