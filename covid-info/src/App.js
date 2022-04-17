import './App.css';
import Data from './components/Data';

function App() {
  const today = new Date().toLocaleDateString('ru', { day:"numeric", year:"numeric", month:"long"}) 

  return (
    <div className="App">
      <header className="App-header">
        Текущая статистика по <span className='highlight'>коронавирусу</span> на <span className='highlight'>{today}</span>
      </header>
      <Data></Data>
    </div>
  );
}

export default App;
