import React from 'react'
import Board from './Board';

function Game() {
  return (
    <div className=' h-screen flex flex-col items-center justify-evenly p-5'>
        <h1 className='text-white font-bold text-5xl'>
            ConnectFour 
        </h1>
        <div className='flex justify-between w-full px-10 border-white border-2 py-3 rounded-full'>
            <div className='flex space-x-2 items-center'>
                <div className='h-4 w-4 bg-red-500 rounded-full'></div>
                <h1 className='font-bold text-xl text-pink-500'>Player One - </h1>
                <h1 className='font-bold text-xl'>20</h1>
            </div>
            <div>
                <h1 className='font-bold text-xl'>SCORE</h1>
            </div>
            <div className='flex items-center space-x-2'>
                <div className='h-4 w-4 bg-red-500 rounded-full'></div>
                <h1 className='font-bold text-xl text-sky-500'>Player Two - </h1>
                <h1 className='font-bold text-xl'>20</h1>
            </div>
        </div>
        <div className=''>
            <Board />
        </div>
    </div>
  )
}

export default Game;