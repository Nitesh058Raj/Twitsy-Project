import '@/styles/globals.css';
import { Paper, ThemeProvider } from "@mui/material";
import { darkTheme } from "../utils/theme";

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider theme={darkTheme}>
    <Paper style={{ height: "100vh" }} square={true}>
    <Component {...pageProps} />
    </Paper>
  </ThemeProvider>
  )
}
