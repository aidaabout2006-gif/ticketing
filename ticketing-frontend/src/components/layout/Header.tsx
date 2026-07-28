import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        zIndex: 1500,
        bgcolor: "#1565C0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#fff",
          }}
        >
          سیستم مدیریت تیکت
        </Typography>

        <Box />
      </Toolbar>
    </AppBar>
  );
}