import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { changeFilter } from '../../redux/todosSlice';
export const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapperSearch}>
      <input type='text' placeholder='Search...' onChange={e => dispatch(changeFilter(e.target.value))} />
    </div>
  );
};
