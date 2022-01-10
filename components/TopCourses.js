import {React, useState, useEffect} from 'react'
import axios from 'axios';
import styles from '../styles/Courses.module.css'
import Image from 'next/image'
import Link from 'next/link'


function TopCourses() {
    const [cdata, setCdata] = useState([])

     useEffect(()=>{
        axios.get('http://localhost:8000/courses')
        .then(res =>{
            console.log(res)
            setCdata(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]) 
    

    return(
        <div className = "row row-content">
             {cdata.filter(cdata => cdata.top === 'yes'
                         )
                       .map(top => (
                   
                            
                                <div className="media col-sm-4">
                                    <Image className="ml-3 align-self-centre" src ={top.image} width={300} height={200}/>
                                    <div className="media-body">
                                    <Link href={'/courses/' + top.id} key={top.id}>
                                      <a className={styles.single}>
                                          <h4>{top.courseName}</h4>
                                      </a>
                                    </Link> 
                                        <p>{top.description}</p>
                                    </div>
                                </div>
                            
                      
                        ))}
              

        </div>
    )
}

export default TopCourses;