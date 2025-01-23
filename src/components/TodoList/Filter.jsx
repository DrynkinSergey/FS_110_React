import s from './TodoList.module.css';
const Filter = () => {
  return (
    <div className={s.filter}>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};
export default Filter;
