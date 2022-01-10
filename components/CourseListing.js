import {React, useState, useEffect} from 'react'
import axios from 'axios'
import styles from '../styles/Courses.module.css'
import Image from 'next/image'
import Link from 'next/link'

function CourseListing({filterTerm}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [courseData, setCoursedata] = useState([]);

     useEffect(()=>{
        axios.get('http://localhost:8000/courses')
        .then(res =>{
            console.log(res)
            setCoursedata(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]) 
    

    
    return (
        <div className="Displaycourse">
        
        <div>
            
         <div className ={styles.searchWrapper}>
                <input
                    type="text"
                    style={{width: "100%"
                            
                                }}

                    //name="searchBar"
                    //id="searchBar"
                    placeholder="search for a course"

                    onChange={(event) => 
                        {setSearchTerm(event.target.value);}
                        }
                />
             </div> 
        </div>

           {courseData.filter((val)=>{
                                if (searchTerm==""){
                                    return val 
                                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                           val.description.toLowerCase().includes(searchTerm.toLowerCase() )
                                          ) {
                                    return val
                                }

                                 }
                      ).filter((val)=> {
                        if (filterTerm==='All') {
                            return true
                        }
                        return val.category===filterTerm
                          
                      })
                      .map((val,course) => (
                        <div className ="Displaycourse" key={course}>
                          <div className="row mt-5">
                              <div className= "col-sm-4">
                                <Image src={val.image} className="float-left" width={300} height={200}/>              
                              </div>
      
                              <div className="col-sm-8">
                                  <Link href={'/courses/' + val.id} key={val.id}>
                                      <a className={styles.single}>
                                          <h3>{val.courseName}</h3>
                                      </a>
                                  </Link> 
                                  <p>Category: {val.category}</p>
                                  <p>Description: {val.description}</p>
                                  <p>Price: ${val.price}</p>
                              </div> 
      
                            </div> 
                        </div>
                      ))}
        </div>
    )
}

export default CourseListing;

