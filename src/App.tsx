import Game from './pages/GamePage';
import { AppRouter } from './router/AppRouter';
import './index.css';

function App() {
  return (
    <>
      <div className=' w-full h-screen flex items-center justify-center'>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
