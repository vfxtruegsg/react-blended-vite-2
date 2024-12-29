import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';

const todos = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];

const Todos = () => {
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export default Todos;
