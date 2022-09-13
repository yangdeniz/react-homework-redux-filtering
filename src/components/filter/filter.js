import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/action-creators';

function Filter() {
  const dispatch = useDispatch();
  const {filter} = useSelector(state => state.filter);
  const changeFilter = (value) => dispatch(setFilter(value));

  return (
    <div>
      <label htmlFor='item-filter'>Filter: </label>
      <input id='items-filter' type='text' value={filter || ''} onChange={e => changeFilter(e.target.value)} />
    </div>
  );
}

export default Filter;