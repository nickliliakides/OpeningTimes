import { FC } from 'react';
import { Link } from '@mui/material';

const HistoryItem: FC<{ href: number }> = ({ href }) => {
  const date = new Date(href);
  const label = date.toLocaleString();
  return (
    <Link
      href={href.toString()}
      sx={{ textAlign: 'center', py: 1, px: 2 }}
    >{`Saved at: ${label}`}</Link>
  );
};

export default HistoryItem;
