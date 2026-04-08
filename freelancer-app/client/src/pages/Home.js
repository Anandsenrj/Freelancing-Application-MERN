import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Home(){
  const [projects,setProjects]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/projects")
    .then(res=>setProjects(res.data));
  },[]);

  return(
    <div>
      <h1>Projects</h1>
      {projects.map(p=>(
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
