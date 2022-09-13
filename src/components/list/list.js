import { useSelector } from 'react-redux';
import ListItem from './list-item';

function List() {
  const {items} = useSelector(state => state.items);
  const {filter} = useSelector(state => state.filter);
  
  return (
    <ul>
      {items
        .filter(item => !filter || item.title.includes(filter))
        .map(item => <ListItem key={item.id} {...item} />)
      }
    </ul>
  );
}

export default List;