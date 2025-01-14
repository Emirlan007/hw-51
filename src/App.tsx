import './App.css';
import { useState } from 'react';
import LotteryBall from './components/LotteryBall/LotteryBall.tsx';

const App = () => {
const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

const getNewNumbers = () => {
  const newNumbers: number[] = [];

  while (newNumbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;

    if (!newNumbers.includes(randomNumber)) {
      newNumbers.push(randomNumber);
    }
  }
  setNumbers(newNumbers.sort((a, b) => a - b));
};

  return (
    <>
      <button className='btn' onClick={getNewNumbers}>New numbers</button>

      <div className="balls">
        {numbers.map((num ) => (
          <LotteryBall key={num} num={num}/>
        ))}
      </div>
    </>
  );
};

export default App;
