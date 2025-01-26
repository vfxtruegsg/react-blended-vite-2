import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentTodo } from '../../redux/todos/slice';
import { selectCurrentTodo } from '../../redux/todos/selectors';
import { editTodo } from '../../redux/todos/operations';

const EditForm = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value.trim().toLowerCase();

    if (text !== '') {
      dispatch(editTodo({ text, id: currentTodo.id }));
    } else {
      alert('empty value!');
    }
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={onFormSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(clearCurrentTodo())}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
