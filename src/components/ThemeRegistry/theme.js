import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode: "light",
    primary: {
      main: "#856cc9",
      contrastText: "#fff",
    },
  },
  typography: {
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
