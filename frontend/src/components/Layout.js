import { Box } from "@mui/material";
import DrawerMain from "./DrawerMain";
import DrawerRight from "./DrawerRight";
import { CONSTANTS } from "@/styles/app-constants";

const Layout=(props)=>{
    return(
        <div>
          <DrawerMain />
          <Box sx={{
            pl: `${CONSTANTS.left_drawer_width}px`,
            pr: `${CONSTANTS.right_drawer_width}px`,
          }}>
           {props.children}
          </Box>
          <DrawerRight />
        </div>
    );
}
export default Layout;
