import './LotteryBall.css';

interface Props {
  num: number;
}

const LotteryBall: React.FC<Props> = ({ num }) => {
  return (
    <div className="ball">
      {num}
    </div>
  );
};

export default LotteryBall;