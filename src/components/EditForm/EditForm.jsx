import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

const EditForm = ({ cancelEdit, currentTodo, onSubmit }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.text.value.trim() !== '') {
      onSubmit(form.text.value.trim().toLowerCase());
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

      <button className={style.editButton} type="button" onClick={cancelEdit}>
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
