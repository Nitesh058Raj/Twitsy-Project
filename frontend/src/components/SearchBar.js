import { COLORS } from '@/styles/colors-variables';
import { TextField, styled } from '@mui/material';

const SearchBar = () => {

  const SearchTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderRadius: 50,
      backgroundColor: COLORS.background_dark,
      '& fieldset': {
        borderColor: COLORS.border_default,
      },
      '&:hover fieldset': {
        border: `2px solid ${COLORS.border_hover}`
      },
      '&.Mui-focused fieldset': {
        border: `2px solid ${COLORS.primary}`
      },
    },
  });

  return (
    <div>
      <SearchTextField
        fullWidth
        variant="outlined"
        placeholder='Search'
        autoComplete={false}
        inputProps={{ sx: {
            paddingLeft: 3,
            fontSize: 20,
        }}}
        onChange={()=>{}}
      />
    </div>
  );
};
export default SearchBar;
