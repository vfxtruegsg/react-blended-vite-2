import { useState } from 'react';
import Text from '../components/Text/Text';
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  function handleSubmit(todoText) {
    setTodos(prev => [{ ...prev, text: todoText, id: nanoid() }]);
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(item => item.id !== id));
  }

  return <Text textAlign="center">There are no any todos ...</Text>;
};

export default Todos;
