import react from "react";
import { useEffect, useState } from 'react'
import io from 'Socket.IO-client'

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
    <div>
      <input
        placeholder="Type something"
        value={input}
        onChange={onChangeHandler}
        // onChange={(e) => setInput(e.target.value)}
      />
    </div>
  )
}
