import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';

import { nanoid } from 'nanoid';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? [],
  );
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(todoText) {
    setTodos(prev => [...prev, { text: todoText, id: nanoid() }]);
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(item => item.id !== id));
  }

  const toggleEditing = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const cancelEdit = () => {
    setCurrentTodo({});
    setIsEditing(false);
  };

  const updateTodo = updatedText => {
    const updatedTodo = { text: updatedText, id: currentTodo.id };
    // setTodos(prev =>
    //   prev.map(item => (item.id === updatedTodo.id ? updatedTodo : item)),
    // );
    setTodos(prev => {
      const index = prev.findIndex(item => item.id === updatedTodo.id);
      const todos = prev.toSpliced(index, 1, updatedTodo);
      return todos;
    });
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {!isEditing ? (
        <Form onSubmit={handleSubmit}></Form>
      ) : (
        <EditForm
          cancelEdit={cancelEdit}
          currentTodo={currentTodo}
          onSubmit={updateTodo}
        />
      )}

      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        toggleEditing={toggleEditing}
      />
    </>
  );
};

export default Todos;
