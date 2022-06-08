import logo from './logo.svg';
import './App.css';
// import your arrays here
import { snacks } from './Snacks.js';
import SnacksList from './SnacksList';

function App() {
  return (
    <div className="App">
      <SnacksList snacks={snacks}/>
      <hr />
      
    </div>
  );
}

export default App;
