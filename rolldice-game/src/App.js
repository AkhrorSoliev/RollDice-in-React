import './App.css';
import Die from './components/Die'


function App() {
  return (
    <div className="App">
      <Die face='five'/>
      <Die face='six'/>
      <Die face='three'/>
      <Die face='two'/>
    </div>
  );
}

export default App;
