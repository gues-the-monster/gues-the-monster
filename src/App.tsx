import GameFixed from './pages/GameFixed';
import Game from './pages/GamePage';
 
import './index.css';
import Spider from './components/Spider';
import Bats from './components/Bats';



function App() {
  return (
    <>
      <div className=' w-full h-screen flex items-center justify-center'>
        <GameFixed />
        <Spider position="right-10" size="medium" delay="0s" />
        <Spider position="left-12" size="small" delay="2s" />
        <Spider position="right-24" size="large" delay="4s" />
        <Spider position="left-20" size="medium" delay="1s" />
        {/* <Bats/> */}
        {/* <Game /> */}
      </div>
    </>
  );
}

export default App;
