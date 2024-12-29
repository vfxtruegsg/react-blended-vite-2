import Text from '../components/Text/Text';
import Form from '../components/Form/Form';

const Todos = () => {
  // const [todoList, setTodoList] = useState([]);
  const handleSubmit = value => {
    console.log('value', value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}></Form>
    </>
  );
};

export default Todos;
