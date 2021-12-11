/* import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cors from 'cors';

function DataFetching() {
    const [posts, setPosts] = useState([])

     useEffect(()=>{
        axios.get('http://localhost:8000/courses')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]) 
    return ( // posts is an object and requires .map() array method
     <div>
         
          {   <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.courseName}</li>
                ))}
            </ul> }

            
        </div> 
   
    )
}

export default DataFetching
 */