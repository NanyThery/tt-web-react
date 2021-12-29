import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    orange: "#ff7c04",
    orangeDark: "rgba(234, 114, 3, 1)",
    yellow: "#ffc11a",
    purpleLight: "#9d4edd",
    purple: "#5d21d1",
    purpleDark: "#150639",
    text100: "#2a324b",
    text80: "#757b91",
    text60: "#c7ccdb",
    text40: "#e1e5ee",
    text20: "#f2f6ff",
  },
  buttons: {
    menuSelectedNegative: "rgba(255, 255, 255, 0.25);",
    menuSelectedPositive: "rgba(0,0,0,0.25)",
  },
  gradients: {
    backgroundPurple:
      "linear-gradient(142.63deg, #150639 -6.95%, #3B21D1 42.99%, #9D4EDD 93.83%)",
    backgroundOrange: "linear-gradient(316.58deg, #5D21D1 2.61%, #FF7C04 100%)",
    backgroundOrangeInverse:
      "linear-gradient(142.63deg, #5D21D1 2.61%, #FF7C04 100%)",
    backgroundPurpleInverse:
      "linear-gradient(142.63deg, #9D4EDD -6.95%, #3B21D1 42.99%, #150639 93.83%)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
