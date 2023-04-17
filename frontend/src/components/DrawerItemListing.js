import { COLORS } from '@/styles/colors-variables';
import { Home, Bookmark } from '@mui/icons-material';
import { List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const DrawerItemListing = () => {
  const [active, setActive] = React.useState([false, false]);
  const router = useRouter();
  const ItemList = ['Home', 'My Tweets'];
  const ItemIconList = ['Home', 'Bookmark'];

  const onListItemClicked = (id, tab) => {
    const updatedActive = active.map((isActive, index) => {
      return (
        index === id ? true : false
      )
    });
    setActive(updatedActive);

    if(tab === "Home") {
      router.push("/home")
    } else if (tab === "My Tweets") {
      router.push("/mytweets")
    }

  };

  const getIcon = (item, clicked) => {
    switch (item) {
      case 'Home':
        return <Home fontSize="large" sx={{ color: clicked ? COLORS.primary : 'white' }} />;
      case 'Bookmark':
        return <Bookmark fontSize="large" sx={{ color: clicked ? COLORS.primary : 'white' }} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <List sx={{ padding: 0 }}>
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
              onClick={() => onListItemClicked(key, item)}
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
