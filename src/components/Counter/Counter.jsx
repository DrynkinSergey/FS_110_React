import { useDispatch, useSelector } from 'react-redux';
import s from './Counter.module.css';

import { changeStep, decrement, increment, reset, selectCounter, selectStep } from '../../redux/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const handlePlusClick = () => {
    dispatch(increment());
  };

  const handleMinusClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleChangeStep = e => {
    dispatch(changeStep(+e.target.value));
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button className='btn' onClick={handleMinusClick}>
            minus
          </button>
          <button className='btn' onClick={handleResetClick}>
            reset
          </button>
          <button className='btn' onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
