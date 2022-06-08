

export default function RecipesItem({ name, ingredients, utensils }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Ingredients: {ingredients}</p>
      <p>What you need: {utensils}</p>
    </div>
  );
}
