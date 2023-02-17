import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import io, { Socket } from 'socket.io-client'
import MessageInput from './MessageInput'
import Message from './Message'

function App() {
  const [socket, setSocket] = useState<Socket>()
  const [message, setMessage] = useState<string[]>([])
 
  const send = (value:string)=>{
    socket?.emit("message", value)

  }

  useEffect(()=>{
    const newSocket = io("http://localhost:8001")
    setSocket(newSocket)

  },[setSocket])

  const messageListener =(message:string)=>{
    setMessage([...message,message])
  }

  useEffect(()=>{
    socket?.on("message",messageListener)
    return ()=> {
      socket?.off("message",messageListener)
    }

  },[messageListener])

  return (
    <div className="App">
    <MessageInput send={send}/>
    <Message message = {message}/>
    </div>
  )
}

export default App
