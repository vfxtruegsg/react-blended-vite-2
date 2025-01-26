import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';
import style from './TodoListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todos/operations';

const TodoListItem = ({ text, id, todoNumber, toggleEditing }) => {
  const dispatch = useDispatch()
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{todoNumber}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => dispatch(deleteTodo(id))}
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => toggleEditing({ text, id })}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
