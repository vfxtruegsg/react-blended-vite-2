import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.search.value.trim() !== '') {
      onSubmit(form.search.value.trim().toLowerCase());
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
