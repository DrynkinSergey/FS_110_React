import { useDispatch, useSelector } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { fetchData } from '../../redux/operations';
import { useEffect } from 'react';
import { selectIsError, selectIsLoading, selectUncompletedTodosMemo } from '../../redux/selectors';
import Filter from './Filter';

export const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const uncompleted = useSelector(selectUncompletedTodosMemo);
  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <Filter />
      <h2>Uncompleted todos: {uncompleted}</h2>
      <List />
      {isError && <h2>Something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};
