import CuisineItem from './CuisineItem';
import './App.css';

export default function CuisineList({ cuisine }) {
  return (
    <div className="cuisine-list">
      {cuisine.map((cuisine, i) => (
        <CuisineItem {...cuisine.item} key={cuisine.item.type + i} />
      ))}
    </div>
  );
}
