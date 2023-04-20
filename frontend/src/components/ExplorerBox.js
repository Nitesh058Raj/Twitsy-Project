import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

const ExplorerBox = ({ users }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
        border: 'solid 1px', // just for testing, can be removed
        borderRadius: '8px',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '320px',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          padding: '0px 16px 0px ',
        }}
        gutterBottom
      >
        Explorer Box
      </Typography>
      <Divider
        sx={{
          padding: '2px 2px 2px 2px',
        }}
      />
      <List sx={{ p: '0px 0px 0px' }}>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar src={user.avatar} alt={user.username} />
            </ListItemAvatar>
            <ListItemText primary={user.username} secondary={user.bio} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExplorerBox;
