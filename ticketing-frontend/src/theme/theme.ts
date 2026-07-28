//برای یکپارچه بودن ظاهر پروژه Theme اختصاصی شده است 
//مثلا فونت یا بکگراند 
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",

  palette: {
    mode: "light",

    primary: {
      main: "#2563EB",
    },

    secondary: {
      main: "#10B981",
    },

    background: {
      default: "#F5F7FA",
      paper: "#FFFFFF",
    },
  },

  shape: {
    borderRadius: 16,
  },

  typography: {
    fontFamily: "Vazirmatn",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 700,
    },

    body1: {
      fontSize: "0.95rem",
    },

    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow:
            "0 6px 20px rgba(0,0,0,.05)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#ffffff",
          color: "#111827",
          boxShadow:
            "0 1px 8px rgba(0,0,0,.08)",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderLeft: "1px solid #E5E7EB",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;