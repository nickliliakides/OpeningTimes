import { Box, Link, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <Typography variant='h1'>404</Typography>
      <Typography variant='h3'>Page Not Found </Typography>
      <Link href='/'>Back to home page</Link>
    </Box>
  );
};

export default NotFound;
