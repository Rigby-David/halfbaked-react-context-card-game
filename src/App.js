import './App.css';
// import initialCards from './cards-data';
import Player from './Player';
import CardList from './CardList';
// import { useState } from 'react';
import ExecutePassButton from './ExecutePassButton';
import { useGameContext} from './GameProvider';

function App() {
  const {
    selectedCard,
    deck,
    playerOneHand,
    playerTwoHand,
    playerThreeHand,
  } = useGameContext();

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player player={1} hand={playerOneHand} />
        <Player player={2} hand={playerTwoHand} />
        <Player player={3} hand={playerThreeHand} />
        <CardList cards={deck} selectedCard={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} player={'deck'} />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton passCard={passCard} from={from} to={to} selectedCard={selectedCard} />
        }
      </section>
    </div>
  );
}

export default App;
