import { COLORS } from '@/styles/colors-variables';
import { TextField, styled } from '@mui/material';

const SearchBar = () => {
  const MyTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      backgroundColor: COLORS.main_light_secondary_2,
      '& fieldset': {
        borderColor: COLORS.main_light_secondary,
      },
      '&:hover fieldset': {
        borderColor: COLORS.main_light_secondary,
        border: '1px solid'
      },
      '&.Mui-focused fieldset': {
        borderColor: COLORS.main_light_secondary,
        border: '1px solid'
      },
    },
  });

  return (
    <div>
      <MyTextField label="Search" variant="outlined" />
    </div>
  );
};
export default SearchBar;
