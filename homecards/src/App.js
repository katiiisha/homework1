
import './App.css';
import Badge from './components/Badge';
import Index from './components/Index';

function App() {
  const products = [
    { id: 1, type: 't-shorts', price: 1500, content: 'Состоит из 100% хлопка. В наличие имеют все размеры', text: 'купить', },
    { id: 2, type: 'thousers', price: 3000, content: 'Состоит из 100% хлопкай. Заканчилиьсь ', text: 'нет в налачии' },
    { id: 3, type: 'Jacket', price: 3500, content: 'Состоит из 100% хлопкай.', text: 'скоро поступит'   },
  ]
  
  return (
    <div className='App'>
      <Index products={products} />
      {/* <Badge/> */}
  </div>
  );
}

export default App;
