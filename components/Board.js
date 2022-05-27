import React from 'react'
import { useState, useEffect } from 'react'
import Cell from './Cell'

function Board() {
    const [player, setPlayer] = useState(1);
    const [prevSelected, setPrevSelected] = useState([]);

    const changePlayer = () => {
        player == 1 ? setPlayer(2) : setPlayer(1);
    }

    const prevSelectedFunc = (row, col) => {
        console.log("I am here...")
        setPrevSelected([row, col])
    }

  return (
    <div className='bg-gray-800 p-6 rounded-3xl'>
        <div className='flex space-x-5'>
            {
                [...Array(7)].map((x, i) => 
                    <div className='flex flex-col space-y-6'> 
                    {
                        [...Array(6)].map((y, j) => 
                            <Cell key={i+j} row={j} col={i} changePlayer={changePlayer} player={player} prevSelected={prevSelectedFunc} prevPos={prevSelected}/>
                        )
                    }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Board