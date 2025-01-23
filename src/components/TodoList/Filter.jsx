import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { setFilterByStatus } from '../../redux/todosSlice';
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      <button onClick={() => dispatch(setFilterByStatus('all'))}>All</button>
      <button onClick={() => dispatch(setFilterByStatus('active'))}>Active</button>
      <button onClick={() => dispatch(setFilterByStatus('completed'))}>Completed</button>
    </div>
  );
};
export default Filter;
