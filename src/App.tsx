import { Container } from '@mui/material';
import OpeningHours from './components/OpeningHours';

function App() {
  return (
    <Container maxWidth='lg' sx={{ my: 5 }}>
      <OpeningHours />
    </Container>
  );
}

export default App;
