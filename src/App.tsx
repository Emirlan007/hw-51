import './App.css';
import { useState } from 'react';
import LotteryBall from './components/LotteryBall/LotteryBall.tsx';

const App = () => {
const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

const getNewNumbers = () => {


};

  return (
    <>
      <button className='btn' onClick={getNewNumbers}>New numbers</button>

      <div className="balls">
        {numbers.map((num ) => (
          <LotteryBall key={num} num={num} />
        ))}
      </div>
    </>
  );
};

export default App;
