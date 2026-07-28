import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CategoryIcon from "@mui/icons-material/Category";
import FlagIcon from "@mui/icons-material/Flag";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import { NavLink } from "react-router-dom";

const drawerWidth = 260;

const menus = [
  {
    title: "داشبورد",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "تیکت‌ها",
    path: "/tickets",
    icon: <ConfirmationNumberIcon />,
  },
  {
    title: "دسته‌بندی‌ها",
    path: "/categories",
    icon: <CategoryIcon />,
  },
  {
    title: "اولویت‌ها",
    path: "/priorities",
    icon: <FlagIcon />,
  },
  {
    title: "وضعیت‌ها",
    path: "/statuses",
    icon: <AutorenewIcon />,
  },
];

export default function Sidebar() {
  return (
    <Drawer
      anchor="right"
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderLeft: "1px solid #e5e7eb",
          bgcolor: "#fff",
        },
      }}
    >
      <Toolbar />

      <Box
        sx={{
          p: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "#1565C0",
          }}
        >
          پنل مدیریت
        </Typography>
      </Box>

      <List sx={{ px: 2 }}>
        {menus.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={{
              mb: 1,
              borderRadius: 3,

              "&.active": {
                bgcolor: "#1565C0",
                color: "#fff",

                "& .MuiListItemIcon-root": {
                  color: "#fff",
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}