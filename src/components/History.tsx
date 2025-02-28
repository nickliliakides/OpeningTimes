import { useLocalStorage } from 'usehooks-ts';
import { Paper, Typography, List, Link } from '@mui/material';

import { LsStateType } from '../types';
import HistoryItem from './HistoryItem';

const History = () => {
  const [lsValue] = useLocalStorage<LsStateType>('Opening Times History', []);
  lsValue.reverse();
  return (
    <Paper
      elevation={3}
      sx={{
        boxShadow: 1,
        py: 1,
        px: { md: 1 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        textAlign: 'center',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          my: 4,
          color: 'text.primary',
        }}
      >
        Saved History
      </Typography>
      {lsValue.length ? (
        lsValue
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((item) => (
            <HistoryItem key={item.createdAt} href={item.createdAt} />
          ))
      ) : (
        <>
          <Typography variant='body1'>
            There are no 'Opening Hours' records saved yet.
          </Typography>
          <Link sx={{ my: 2 }} href='/'>
            Go back to form
          </Link>
        </>
      )}
      <List></List>
    </Paper>
  );
};

export default History;
