import { transparentize } from "polished";

export const archive = {
  brightRed: "#e63227",
  brightOrange: "#ff871e", // warning
  brightYellow: "#ffc71e", // secondary/accent
  brightGreen: "#4fb440",
  deepGreen: "#448147", // success
  brightBlue: "#56c4dc",
  deepBlue: "#2872af", // primary
  blueShades: {
    // https://github.com/igrmk/blec
    75: "#8aa2c5", // blec f9f9fa 2872af:0.75
    80: "#7d9ac1", // blec f9f9fa 2872af:0.8
    85: "#6f91bd", // blec f9f9fa 2872af:0.85
    90: "#5f88b8", // blec f9f9fa 2872af:0.9
    93: "#5382b6", // blec f9f9fa 2872af:0.93
    95: "#497eb4", // blec f9f9fa 2872af:0.95
    100: "#2872af", // deepBlue (primary)
    105: "#1b65a2", // 5% darkened deepBlue
    110: "#0f5996", // 10% darkened deepBlue
  },
  deepPurple: "#5a4d6e",
  brightPurple: "#951e6c",
  brightPink: "#dc2d6c",
  deepRed: "#af284c", // danger
  shades: {
    empty: "#ffffff",
    lightest: "#f9f9fa",
    light: "#dee1e4",
    medium: "#97a1a9",
    dark: "#5f6e7a",
    darkest: "#384047",
    full: "#000000",
  },
  blueScreenGradient: (theme) => {
    const base = transparentize(0.05, theme.archive.blueShades[95]);
    const top = transparentize(0.2, theme.archive.blueShades[93]);
    return `linear-gradient(to top, ${base}, ${top})`;
  },
};
