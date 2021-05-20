import React, { useState } from 'react'
import './App.scss';
import { RiSendPlane2Fill } from 'react-icons/ri'; 
import { IoClose } from 'react-icons/io5';

function App() {
  const [ task, setTask ] = useState('')
  const [ todos, setTodos ] = useState([])
  const [ theme, setTheme ] = useState('dark')
  const todoHandler = (event) =>{
    event.preventDefault()
    const newValue = {description:task, completed:false};
    setTodos([...todos, newValue])
    setTask('')
  } 
  const deleteTask = (k) =>{
    var newTodos = todos.filter((todo, key)=>k!==key)
    setTodos(newTodos);

  }

  return ( 
 <div className={theme}>
 <div className="container">
 <div className="box">
<h1>Yapılacaklar</h1>

<ul className="todolist">
{todos.length>0 ? todos.map((todo, key)=>
<li key={key}>• {todo.description} <IoClose className="icon" onClick={()=>deleteTask(key)} /></li>) : <div>  <br /> Burası çok sessiz..</div> }
</ul>
{todos.length>0 && <button className="reset" onClick={()=>setTodos([])}>Sıfırla</button>}
</div>
<div className="box">
<h1>Ekle</h1>
<form onSubmit={(e)=>todoHandler(e)}>

<input type="text" name="taskName" placeholder="Bir şeyler yaz.." value={task} onChange={(e)=>setTask(e.target.value)} /> <div className="icon"><button type="submit"><RiSendPlane2Fill /></button></div>
</form>
</div>
<center>
<div className="box inline-display">
<center><h1>Tema</h1></center>
<button className="btn btn-rb" onClick={()=>setTheme('light')}>Açık</button>
<button className="btn" onClick={()=>setTheme('dark')}>Kapalı</button>
</div>
</center>
<span className="copyright">2021 © by Mâze</span>
</div>
</div>
  );
}

export default App;
