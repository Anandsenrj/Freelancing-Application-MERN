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

  const send = () => {
    socket.emit("sendMessage", msg);
    setMsg("");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Chat</h3>

        {messages.map((m, i) => <p key={i}>{m}</p>)}

        <input
          className="form-control my-2"
          onChange={e => setMsg(e.target.value)}
        />

        <button className="btn btn-primary" onClick={send}>
          Send
        </button>
      </div>
    </>
  );
}
