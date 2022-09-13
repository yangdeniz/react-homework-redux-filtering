import './App.css';
import Filter from './components/filter/filter';
import Form from './components/form/form';
import List from './components/list/list';

function App() {
  return (
    <div>
      <Form />
      <div className='list-container'>
        <Filter />
        <List />
      </div>
    </div>
  );
}

export default App;
