
import './App.css';
// import your arrays here
import { snacks } from './Snacks';
import SnacksList from './SnacksList';
import RecipesList from './RecipesList';
// import { recipes } from './recipes.js';
import CuisineList from './CuisineList';
import { cuisine } from './cuisine';
import { recipes } from './recipes';

function App() {
  return (
    <div className="App">
      <SnacksList snacks={snacks} />
      <hr />
      <RecipesList recipes={recipes} />
      <hr />
      <CuisineList cuisine={cuisine} />
    </div>
  );
}

export default App;
