import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';

import OpeningHours from './components/OpeningHours';
import NotFound from './components/NotFound';
import History from './components/History';

function App() {
  return (
    <Container maxWidth='lg' sx={{ my: 5 }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<OpeningHours />} />
          <Route path='/history' element={<History />} />
          <Route path='/:id' element={<OpeningHours />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
