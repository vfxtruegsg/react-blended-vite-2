import { useEffect } from 'react';
import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';

import EditForm from '../components/EditForm/EditForm';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/todos/operations';
import { selectCurrentTodo } from '../redux/todos/selectors';

const Todos = () => {
  const currentTodo = useSelector(selectCurrentTodo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      {!currentTodo ? <Form></Form> : <EditForm />}

      <TodoList />
    </>
  );
};

export default Todos;
