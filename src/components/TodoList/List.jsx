import { useSelector } from 'react-redux';
import Item from './Item';
import s from './TodoList.module.css';
import { selectFilter, selectFilteredTodos, selectFilteredTodosMemo } from '../../redux/selectors';

export const List = () => {
  const todos = useSelector(selectFilteredTodosMemo);
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
