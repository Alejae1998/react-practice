import RecipesItem from './RecipesItem';
import './App.css';

export default function RecipesList({ recipes }) {
  return <div className='recipe-list'>
    {
      recipes.map((recipe, i) => <RecipesItem {...recipe} key={recipe.name + i} />)
    }
  </div>;
}
