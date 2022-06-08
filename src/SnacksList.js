// import react from 'react';
import SnacksItem from './SnacksItem';

export default function SnacksList({ snacks }) {
  return (
    <div>
      {snacks.map((snack, i) => 
        <SnacksItem key={snack + i} snack={snack} />
      )}
    </div>
  );
}
