import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentItem, saveItem, setCurrentItemPrice, setCurrentItemTitle } from '../../redux/action-creators';

function Form() {
  const dispatch = useDispatch();
  const item = useSelector(state => state.items.currentItem);

  const setTitle = (title) => dispatch(setCurrentItemTitle(title));
  const setPrice = (price) => dispatch(setCurrentItemPrice(price));
  const clear = () => dispatch(clearCurrentItem());

  const save = () => {
    dispatch(saveItem({...item}));
    clear();
  };

  return (
    <div>
      <input id='input-title' type='text' value={item.title || ''} onChange={e => setTitle(e.target.value)} />
      <input id='input-price' type='number' min='0' value={item.price || ''} onChange={e => setPrice(e.target.value)} />
      <button disabled={!item.title || !item.price} onClick={save}>Save</button>
      {item.id && <button onClick={clear}>Cancel</button>}
    </div>
  )
}

export default Form;