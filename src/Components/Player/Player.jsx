import '../Player/Player.css';
import { useState } from 'react';

const Player = ({ initialName, symbol, isActive }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);


    function handleClickButton() {
        setIsEditing((isEditing) => !isEditing);
    }

    function handleNameChange(e) {
        setPlayerName(e.target.value);
    }

    const playerNameField = isEditing
        ? (<input type='text' onChange={(e) => handleNameChange(e)} required value={playerName} />)
        : (<span className='player-name'>{playerName}</span>)

    const buttonChangeValue = isEditing
        ? ("Guardar")
        : ("Cambiar")
    return (
        <>
            <li className={isActive ? "active" : undefined}>

                <span className="player">
                    {playerNameField}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={() => handleClickButton()}>{buttonChangeValue}</button>
            </li>

        </>
    )
}

export default Player


