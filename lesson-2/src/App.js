import React,{useState} from 'react';
import { BlogList } from './components/blog';
import './App.css';
// import { useState } from 'react';



function App() {
  const [Blog,setBlog]=useState([
    {title:"my blog",body:"text..." ,auther:"bazraa", id:1},
    {title:"other blog",body:"text..." ,auther:"batsuren", id:2},
    {title:"my web",body:"text..." ,auther:"orgil", id:3},
  ])
  const handleDelete = (id)=>{
    let newBlog = Blog.filter((blog)=>{
      return (blog.id !== id)
    })
    setBlog(newBlog)
  }
  return (
    <div className="App">
      <BlogList Blog={Blog} handledelete={handleDelete} />
    </div>
  );
}

export default App;
