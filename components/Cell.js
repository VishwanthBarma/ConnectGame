import React from 'react'
import { useContext, useState } from 'react'

function Cell({ row, col, changePlayer, player, prevSelected, prevPos }) {
    const [selected, setSelected] = useState(false);
    const color = player != 1 && (prevPos[0]!=row || prevPos[1]!=col) ? "bg-pink-500 cursor-default" : "bg-sky-500 cursor-default";
    const cellClicked = () => {
      console.log(prevPos);
      console.log(row, col)
      if(!selected){
        setSelected(true);
        changePlayer();
        prevSelected(row, col);
      }
    }
  return (
    <div onClick={cellClicked} className='h-16 w-16 cursor-pointer border-2 border-slate-400 rounded-full'>
        <div className={`${ selected && color } h-full w-full rounded-full`}></div>
    </div>
  )
}

export default Cell 