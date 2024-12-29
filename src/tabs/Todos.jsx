import { useState } from 'react';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';

const todos = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  function handleSubmit(todoText) {
    setTodos(prev => [{ ...prev, text: todoText, id: nanoid() }]);
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(item => item.id !== id));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}></Form>
      <TodoList todos={todos} />
    </>
  );
};

export default Todos;
