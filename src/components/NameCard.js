import React from 'react'
import '../index.css'

export default function NameCard(randomNumber, characterNames) {
    return (
        <div className='diceCardContainer'>
            <p>{characterNames} rolled a {randomNumber}!</p>
        </div>
    )
}

