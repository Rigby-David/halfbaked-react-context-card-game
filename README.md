## Context Challenge (Stretch Goal)

Branch off from `main`. 

Make a new branch called `dev`. 

Refactor the `dev` branch into a Context model.

Submit a PR.

Note that there is already a `with-context` branch. You can take a look at it if you need some guidance.


## GameProvider

import - useState, createContext, useContext from 'react'
import - initialCards from cards-data

-- 3 steps for using Context

1) createContext()
    const GameContext = createContext()

2) Make a function that returns that Context's Provider
    -- this function takes { children } as a prop
    export default function GameProvider({ children }) {
        setState here

    make an object that contains all state

    return <GameContext.Provider and set value = gameState>
    this component calls { children }
    }

3) Make a function that lets us access the Context state ( a funciton that returns useContext call )
    export function useGameContext() {
        return useContext(GameContext)
    }

4) Set up state like normal

# index.js
import GameProvider

place App within GameProvider which is within React.StrictMode

# App.js
-- import useGameContext
1)
    --We no longer need to track state in app.js
        --Instead, we'll import useGameContext
    --App will need to catch all props required on this page in a object we set = to useGameContext
        -- selectedCard, deck, playerOneHand, playerTwoHand, playerThreeHand

2)
    --We no longer want to house our passCard(card) and findCardIndex() in app.js
        We can move passCard(card) to ExecutePassButton.js
        We can move findCardIndex into it's own file -- make sure to export this function, we'll need to import it to our ExecutePassButton()
3)
    --Our <Player /> components now only need to pass player={1} and hand={playerXHand} as props
    --<CardList /> only needs to pass cards={deck} and player={'deck'} as props
    <ExecutePassButton /> no longer needs to pass any props