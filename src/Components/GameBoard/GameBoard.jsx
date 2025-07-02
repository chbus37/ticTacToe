import { useState } from 'react'
import '../GameBoard/GameBoard.css'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleClickSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map((row) => {
                return [...row]

            })]
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedGameBoard;
        })

        onSelectSquare();
    }
    return (
        <>
            <ol id='gameBoard'>
                {gameBoard.map((row, rowIndex) => {
                    return <li key={rowIndex}>
                        <ol>
                            {row.map((col, colIndex) => {
                                return <li key={colIndex}><button onClick={() => {
                                    if (gameBoard[rowIndex][colIndex] === null) handleClickSquare(rowIndex, colIndex)
                                }
                                }>{col}</button></li>
                            })}
                        </ol>
                    </li>
                })}
            </ol>
        </>
    )
}

export default GameBoard
