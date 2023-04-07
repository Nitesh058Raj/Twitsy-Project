import { COLORS } from '@/styles/colors-variables';
import { ExpandCircleDown, Home, Notifications, Person } from '@mui/icons-material';
import { List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';

const DrawerItemListing = () => {
  const [active, setActive] = React.useState([false, false, false, false]);
  const ItemList = ['Home', 'Notifications', 'Profile', 'More'];
  const ItemIconList = ['Home', 'Notifications', 'Person', 'ExpandCircleDown'];

  const onListItemClicked = (id) => {
    const updatedActive = active.map((isActive, index) => {
      if (index === id) {
        return true;
      } else {
        return false;
      }
    });
    setActive(updatedActive);
  };

  const getIcon = (item, clicked) => {
    switch (item) {
      case 'Home':
        return <Home fontSize="large" sx={{ color: clicked ? COLORS.primary : 'white' }} />;
      case 'Notifications':
        return <Notifications fontSize="large" sx={{ color: clicked ? COLORS.primary : 'white' }} />;
      case 'Person':
        return <Person fontSize="large" sx={{ color: clicked ? COLORS.primary : 'white' }} />;
      case 'ExpandCircleDown':
        return <ExpandCircleDown fontSize="large" sx={{ color: clicked ? COLORS.primary : 'white' }} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <List sx={{ padding: 0 }}>
        {/* <Divider sx={{ backgroundColor: 'gray' }} /> */}

        {ItemList.map((item, key) => {
          return (
            <ListItemButton
              key={key}
              disableTouchRipple={true}
              sx={{
                color: active[key] ? COLORS.primary : 'white',
                height: 80,
                paddingLeft: 5,
                borderLeftWidth: 3,
                borderLeftStyle: 'solid',
                borderLeftColor: (theme) =>
                  theme.palette.mode === 'dark' && active[key] ? COLORS.primary : COLORS.background_dark,
              }}
              onClick={() => onListItemClicked(key)}
            >
              <ListItemIcon>{getIcon(ItemIconList[key], active[key])}</ListItemIcon>
              <ListItemText primary={<Typography sx={{ fontSize: 28 }}> {item} </Typography>} />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};
export default DrawerItemListing;
