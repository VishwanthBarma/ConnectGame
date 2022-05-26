import react from "react";
import { useEffect, useState } from 'react'
import io from 'Socket.IO-client';
import Game from "../components/Game";

let socket;

export default function Home() {

  const [input, setInput] = useState('')

  useEffect(() => {
    const socketInitializer = async () => {
      await fetch('/api/socket')
      socket = io()
  
      socket.on('connect', () => {
        console.log('connected')
      })
  
      socket.on('update-input', msg => {
        setInput(msg)
      })
    };

    socketInitializer();
  }, [])


  const onChangeHandler = (e) => {
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }

  return (
    <div className="h-screen bg-[#111111] text-white">
        <Game />
    </div>
  )
}
