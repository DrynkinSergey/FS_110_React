import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { toggleFavorite } from '../../redux/todosSlice';
import { FaStar } from 'react-icons/fa';
import { deleteTodo, editTodoThunk, toggleTodo } from '../../redux/operations';

const Item = ({ isCompleted, text, id, isFavorite }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <input type='checkbox' checked={isCompleted} onChange={() => dispatch(toggleTodo({ isCompleted: !isCompleted, text, id, isFavorite }))} />
      <p>
        {isFavorite && <FaStar color='gold' />} {text}
      </p>
      <div>
        <button onClick={() => dispatch(toggleFavorite(id))}>{isFavorite ? 'Dislike' : 'Like'}</button>
        <button onClick={() => dispatch(editTodoThunk({ id, todo: prompt('Enter new value: ') ?? text, isCompleted }))}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
