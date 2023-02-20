import React from 'react'
import './GameControl.scss';

function GameControl(props: { onClick: React.MouseEventHandler<HTMLButtonElement> }) {

    return (
        <section className='game-control'>
            <button value={16} onClick={props.onClick}>4 by 4 fields</button>
            <button value={25} onClick={props.onClick}>5 by 5 fields</button>
            <button value={36} onClick={props.onClick}>6 by 6 fields</button>
        </section>
    )
}

export default GameControl;