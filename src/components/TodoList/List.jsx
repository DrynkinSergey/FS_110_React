import { useSelector } from 'react-redux';
import Item from './Item';
import s from './TodoList.module.css';
import { selectFilter, selectFilterByStatus, selectTodos } from '../../redux/todosSlice';

export const List = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const filterByStatus = useSelector(selectFilterByStatus);
  const filteredData = todos.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));

  const getSortedData = () => {
    switch (filterByStatus) {
      case 'completed':
        return filteredData.filter(item => item.isCompleted);
      case 'active':
        return filteredData.filter(item => !item.isCompleted);
      default:
        return filteredData;
    }
  };

  return (
    <ul className={s.list}>
      {getSortedData().map(item => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};
