import { useDispatch } from 'react-redux';
import { editItem, removeItem } from '../../redux/action-creators';

function ListItem(props) {
  const dispatch = useDispatch();
  const edit = () => dispatch(editItem({...props}));
  const remove = () => dispatch(removeItem({...props}));

  return (
    <li>
      <span>{props.title}</span>
      <span>{props.price}</span>
      <button onClick={edit}>edit</button>
      <button onClick={remove}>remove</button>
    </li>
  );
}

export default ListItem;