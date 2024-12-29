import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';

const todos = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];

const Todos = () => {
  const handleSubmit = value => {
    console.log('value', value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}></Form>
      <TodoList todos={todos} />
    </>
  );
};

export default Todos;
