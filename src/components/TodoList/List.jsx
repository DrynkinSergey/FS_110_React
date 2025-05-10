import { useSelector } from 'react-redux';
import Item from './Item';
import s from './TodoList.module.css';
import { selectFilter, selectTodos } from '../../redux/todosSlice';

export const List = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const filteredData = todos.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul className={s.list}>
      {filteredData.map(item => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};
