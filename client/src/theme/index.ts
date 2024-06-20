import { extendTheme } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

export const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });
export const fontColor = "#001219";
export const fontColorLight = "#ffffff";
export const darkFont = "#fffff";

export const LightTheme = extendTheme({
  fonts: {
    heading: `${poppins.style.fontFamily}, sans-serif`,
    body: `${poppins.style.fontFamily}, sans-serif`,
  },
  colors: {
    brand: {
      background: "#ffffff",
      backgroundDark: "#005f73",
      primary: "rgb(0, 206, 209)",
      font: fontColor,
      fontLight: fontColorLight,
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "brand.background",
        color: "brand.font",
      },
    },
  },
});

export const DarkTheme = extendTheme({
  fonts: {
    heading: `${poppins.style.fontFamily}, sans-serif`,
    body: `${poppins.style.fontFamily}, sans-serif`,
  },
  colors: {
    brand: {
      background: "#000",
      backgroundDark: darkFont,
      primary: "rgb(0, 206, 209)",
      font: fontColorLight,
      fontLight: fontColorLight,
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "brand.background",
        color: "brand.font",
      },
      "::-webkit-scrollbar": {
        width: "12px",
        height: "12px",
      },
      "::-webkit-scrollbar-track": {
        background: "#2D2D2D",
      },
      "::-webkit-scrollbar-thumb": {
        background: "brand.primary",
        borderRadius: "12px",
        border: `3px solid ${"#2D2D2D"}`,
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "teal",
      },
      "::-webkit-scrollbar-thumb:active": {
        background: "#2D3748",
      },
    },
  },
});
