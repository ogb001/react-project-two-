import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';

const App = () => {
  return (
    <div className="App">
      <h1>Football Players</h1>
      <PlayersList />
    </div>
  );
};

export default App;