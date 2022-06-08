export default function CuisineItem({ type, restaurants, mostPopularDish }) {
  return (
    <div> 
      <p>cuisine: {type}</p>
      <div>
        Restaurants:{' '}
        {restaurants.map((restaurant, i) => (
          <p key={i}>{restaurant}</p>
        ))}
      </div>
      <p>popular dish: {mostPopularDish}</p>
    </div>
  );
}
