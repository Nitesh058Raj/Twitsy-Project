import { TextField, styled } from '@mui/material';

const SearchBar = () => {
  const MyTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'var(--main-light-secondary-2)',
      '& fieldset': {
        borderColor: 'var(--main-light-secondary)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--main-light-secondary)',
        border: '1px solid'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--main-light-secondary)',
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
