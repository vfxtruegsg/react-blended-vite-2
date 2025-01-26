import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';

import EditForm from '../components/EditForm/EditForm';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/todos/operations';

const Todos = () => {

  const [, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? [],
  );
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      {!isEditing ? (
        <Form ></Form>
      ) : (
        <EditForm
          cancelEdit={cancelEdit}
          currentTodo={currentTodo}
          onSubmit={updateTodo}
        />
      )}

      <TodoList
        toggleEditing={toggleEditing}
      />
    </>
  );
};

export default Todos;
