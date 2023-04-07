import { COLORS } from '@/styles/colors-variables';
import { Drawer } from '@mui/material';

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
            width: 328,
            backgroundColor: COLORS.background_dark,
          },
        }}
      >
      </Drawer>
    </div>
  );
};
export default DrawerMain;
