import GridItem from '../GridItem/GridItem';
import Grid from '../Grid/Grid';
import TodoListItem from '../TodoListItem/TodoListItem';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todos/selectors';

const TodoList = ({toggleEditing }) => {
  const todos = useSelector(selectTodos)
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            id={id}
            text={text}
            todoNumber={index + 1}
            toggleEditing={toggleEditing}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
