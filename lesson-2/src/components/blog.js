import React from 'react';
export const BlogList = ({Blog,handledelete})=>{
    return (
        <div >
            {/* <h2>{title}</h2> */}
            {Blog.map((blog)=>(<div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>{blog.author}</p>
                    <button onClick={()=>handledelete(blog.id)}> delete</button>
                </div>))
            }
        </div>
    )
}