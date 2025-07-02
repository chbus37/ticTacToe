import Player from './Components/Player/Player'
import GameBoard from './Components/GameBoard/GameBoard'
import './App.css'

import { useState } from 'react';


function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handlePickSquare() {
    setActivePlayer((lastActivePlayer) => (lastActivePlayer === 'X') ? 'O' : 'X');
  }


  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player'>
            <Player initialName="Jugador 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player initialName="Jugador 2" symbol="O" isActive={activePlayer === 'O'} />
          </ol>
          <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={() => handlePickSquare()} />
        </div>
      </main>
    </>
  )
}

export default App
