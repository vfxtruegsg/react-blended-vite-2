import GridItem from '../GridItem/GridItem';
import Grid from '../Grid/Grid';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem text={text} todoNumber={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
