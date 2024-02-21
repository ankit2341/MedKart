import { extendTheme } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

export const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });
export const fontColor = "#001219";
export const fontColorLight = "#ffffff";

export const theme = extendTheme({
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
