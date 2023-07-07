import React, { useState } from 'react'
import Axios from 'axios'
import './index.css'
import DiceCard from './components/DiceCard.js'

export default function App() {

    function getDiceRoll() {
        Axios.get('http://localhost:5000')
        .then(function (response) {
            console.log('response successfully received, response below')
            console.log(response)

            //add diceroll
            //'...' is useful syntax for getting a deep copy of arrays, look it up!
            setDiceRolls([...diceRolls, response.data[0]]);
        }).catch(function (error) {
            console.log('response unsusccessfully received, error below')
            console.log(error)
        }).finally(function (){
            console.log("This part is always executed no matter what")
        }) 
    }
    

    const [diceRolls, setDiceRolls] = useState([]);
    
    return (
        <div className='container'>
            <h1>Dice Roll Website</h1>
            <div className='button'>
              <button
              onClick={() => {getDiceRoll()}}
              >Generate New Roll</button>
            </div>
            {
              diceRolls.map((diceRoll) => DiceCard(diceRoll))
            }
        </div>
    )
}