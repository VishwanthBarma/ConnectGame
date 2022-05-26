import React from 'react'
import { useContext, useState } from 'react'
import { PlayerContext } from './PlayerContext'

function Cell({ row, col }) {
    const [player, changeTurn] = useContext(PlayerContext);
    const [selected, setSelected] = useState(false);
    const color = player != 1 ? "bg-pink-500 cursor-default" : "bg-sky-500 cursor-default";
    const cellClicked = () => {
        setSelected(true);
        changeTurn();
    }
  return (
    <div onClick={cellClicked} className='h-16 w-16 cursor-pointer border-2 border-slate-400 rounded-full'>
        <div className={`${ selected && color } h-full w-full rounded-full`}></div>
    </div>
  )
}

export default Cell