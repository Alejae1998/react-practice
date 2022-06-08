// import react from 'react';
import SnacksItem from './SnacksItem';
import './App.css';

export default function SnacksList({ snacks }) {
  return (
    <div className='snacks-list'>
      {snacks.map((snack, i) => 
        <SnacksItem key={snack + i} snack={snack} />
      )}
    </div>
  );
}
