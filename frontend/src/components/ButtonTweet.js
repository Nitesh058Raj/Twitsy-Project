import { COLORS } from '@/styles/colors-variables';
import { Box, Button, styled } from '@mui/material';

const ButtonTweet = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 25,
    textTransform: 'none',
    color: theme.palette.getContrastText(COLORS.primary),
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    padding: '5px 30px',
    '&:hover': {
      backgroundColor: COLORS.primary_hover,
    },
  }));
  return (
    <Box>
      <ColorButton variant="contained" onClick={() => {}}>
        Tweet
      </ColorButton>
    </Box>
  );
};
export default ButtonTweet;
