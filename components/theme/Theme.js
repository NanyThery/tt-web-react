import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    orange: "#ff7c04",
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
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
