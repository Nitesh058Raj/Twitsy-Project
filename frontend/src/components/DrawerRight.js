import { Box, Divider, Drawer } from '@mui/material';
import { COLORS } from '@/styles/colors-variables';
import { CONSTANTS } from '@/styles/app-constants';
import SearchBar from './SearchBar';
import ProfileBox from './ProfileBox';

const DrawerRight = () => {

  return (
    <div>
      <Drawer
        anchor="right"
        variant="permanent"
        elevation={20}
        sx={{
          opacity: 1,
          width: CONSTANTS.right_drawer_width,
          flexShrink: 0,
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            width: CONSTANTS.right_drawer_width,
            backgroundColor: COLORS.background_dark,
          },
        }}
      >
        <Box sx={{ p: 2}}>
          <SearchBar />
        </Box>
        <Divider sx={{ mt: 15 }}/>
        <ProfileBox />
        <Divider />
      </Drawer>
    </div>
  );
};
export default DrawerRight;
