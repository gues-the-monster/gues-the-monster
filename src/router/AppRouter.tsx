import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GameFixed from '../pages/GameFixed';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='game/*' element={<GameFixed />} />
            </Routes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
