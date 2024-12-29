import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';

import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(todoText) {
    setTodos(prev => [...prev, { text: todoText, id: nanoid() }]);
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(item => item.id !== id));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}></Form>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </>
  );
};

export default Todos;
