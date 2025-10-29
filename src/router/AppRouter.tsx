import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Game from '../pages/GamePage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='game/*' element={<Game />} />
            </Routes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
