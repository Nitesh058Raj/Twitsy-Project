import { COLORS } from '@/styles/colors-variables';
import { Drawer, Toolbar } from '@mui/material';
import ButtonTweet from './ButtonTweet';
import DrawerItemListing from './DrawerItemListing';
import Logo from "../assets/Logo.png";
import Image from 'next/image';
import { CONSTANTS } from '@/styles/app-constants';

const DrawerMain = () => {

  return (
    <div>
      <Drawer
        anchor="left"
        variant="permanent"
        elevation={20}
        sx={{
          opacity: 1,
          width: 280,
          flexShrink: 0,
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            width: CONSTANTS.drawer_width,
            backgroundColor: COLORS.background_dark,
          },
        }}
      >
        <Toolbar sx={{ mt: '5vh', mb: '10vh' }}>
          <Image
            src={Logo} height={50}
            style={{ cursor: 'pointer'}}
            onClick={()=>{}}
          />
        </Toolbar>
        <DrawerItemListing />
        <Toolbar sx={{
          mt: '5vh', display: 'flex',
          justifyContent: 'center'
        }}>
          <ButtonTweet />
        </Toolbar>
      </Drawer>
    </div>
  );
};
export default DrawerMain;
