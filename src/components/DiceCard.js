import React from 'react'
import '../index.css'

export default function DiceCard(randomNumber) {
    return (
        <div className='diceCardContainer'>
            <p>Dice roll came out to be: {randomNumber}</p>
        </div>
    )
}

