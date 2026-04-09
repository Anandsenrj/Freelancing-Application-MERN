import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages(prev => [...prev, data]);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        {messages.map((m, i) => <p key={i}>{m}</p>)}

        <input onChange={(e) => setMsg(e.target.value)} />
        <button onClick={() => socket.emit("sendMessage", msg)}>
          Send
        </button>
      </div>
    </>
  );
}
