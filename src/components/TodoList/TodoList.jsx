import GridItem from '../GridItem/GridItem';
import Grid from '../Grid/Grid';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onDelete, toggleEditing }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            id={id}
            text={text}
            todoNumber={index + 1}
            onDelete={onDelete}
            toggleEditing={toggleEditing}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
