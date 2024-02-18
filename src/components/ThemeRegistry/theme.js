import { createTheme } from "@mui/material/styles";
import { Poppins, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const poppin = Poppins({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    // fontFamily: poppin.style.fontFamily || roboto.style.fontFamily,
    fontFamily: "inherit",
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          "&::before": {
            flex: 0,
            padding: 0,
          },
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          height: 200,
        },
      },
    },
  },
});

export default theme;
