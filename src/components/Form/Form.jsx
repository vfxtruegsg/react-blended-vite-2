import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/operations';

const Form = () => {
  const dispatch = useDispatch()
  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.search.value.trim() !== '') {
      dispatch(addTodo({text: form.search.value.trim().toLowerCase()}))
    } else {
      alert('empty value!');
    }
    form.reset();
  };
  return (
    <form className={style.form} onSubmit={onFormSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
