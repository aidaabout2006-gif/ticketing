//ابتدا ساختار کلی پنل طراحی شد 
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import {
  Outlet,
  useNavigate,
} from 'react-router-dom';

const drawerWidth = 220;

export default function MainLayout() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
        }}
      >
        <Toolbar>
          <Typography variant="h6">
            Ticketing System
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
      >
        <Toolbar />

        <List>

          <ListItemButton
            onClick={() => navigate('/')}
          >
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate('/tickets')}
          >
            <ListItemText primary="Tickets" />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate('/categories')}
          >
            <ListItemText primary="Categories" />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate('/priorities')}
          >
            <ListItemText primary="Priorities" />
          </ListItemButton>

          <ListItemButton
            onClick={() => navigate('/statuses')}
          >
            <ListItemText primary="Statuses" />
          </ListItemButton>

        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />

        <Outlet />

      </Box>
    </Box>
  );
}