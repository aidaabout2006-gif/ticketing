import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const drawerWidth = 260;

export default function AppLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        direction: "rtl",
        bgcolor: "#F5F7FA",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mr: `${drawerWidth}px`,
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Toolbar />

        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}