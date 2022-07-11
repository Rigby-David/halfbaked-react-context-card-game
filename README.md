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