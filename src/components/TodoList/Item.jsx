import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { editTodo, toggleFavorite, toggleTodo } from '../../redux/todosSlice';
import { FaStar } from 'react-icons/fa';
import { deleteTodo, editTodoThunk } from '../../redux/operations';

const Item = ({ isCompleted, todo, id, isFavorite }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <input type='checkbox' checked={isCompleted} onChange={() => dispatch(toggleTodo(id))} />
      <p>
        {isFavorite && <FaStar color='gold' />} {todo}
      </p>
      <div>
        <button onClick={() => dispatch(toggleFavorite(id))}>{isFavorite ? 'Dislike' : 'Like'}</button>
        <button onClick={() => dispatch(editTodoThunk({ id, todo: prompt('Enter new value: ') ?? todo, isCompleted }))}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};
export default Item;
