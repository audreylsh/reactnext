import {React, useState, useEffect} from 'react'
import axios from 'axios';
import styles from '../../styles/Courses.module.css'
import Image from 'next/image'
import Link from 'next/link'
import CourseListing from '../../components/CourseListing'
import FilterButton from '../../components/FilterButton'



function displayCourses(){

    const [courseData, setCoursedata] = useState([])

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
    
    const allCategories = ['All', ...new Set(courseData.map(course=>course.category)) ];  
    const [filterTerm, setFilterTerm] = useState('All');
    const [buttons, setButtons] = useState(allCategories);

    
    //Button Filters
   const filterCourses = (filterTerm) =>{

       // const filteredData=courseData.filter(course=>course.category ===  filterTerm);
        setFilterTerm(filterTerm)
       
    } 


    return(  
        <div>
            <div className="row mt-2">
            
            <div className="FilterCat col-sm-12">
                <FilterButton button={buttons} filter={filterCourses}/>
            </div>   
            

            </div>

            <div className = "row">
                <CourseListing filterTerm={filterTerm}/>
            </div>      
                  
                
                                    
          </div>
        );

};

export async function getStaticProps(){
    const res=await fetch('http://localhost:8000/courses')
    const courseData = await res.json()
    return{
        props: {
            courseData
        }
        
    }
}

export default displayCourses;

/* 

const displayCourses= ({courses}) => {
  return(  
  <div>
            <h1>All Courses</h1>
            
                <div className ="searchWrapper">
                    <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="search for a course"

                        onChange={(event) => 
                            {setSearchTerm(event.target.value)} 

                        }
                    />
            </div>

                               
                {courseData.map(course => (
                    <div className="row mt-5">
                        <div className= "col-sm-4">
                            <Image src={course.image} className="float-left" width={300} height={200}/>  
                        </div>

                        <div className="col-sm-8">
                            <Link href={'/courses/' + course.id} key={course.id}>
                                <a className={styles.single}>
                                    <h3>{course.name}</h3>
                                </a>
                            </Link> 
                            <p>Category: {course.category}</p>
                            <p>Description: {course.description}</p>
                            <p>Price: ${course.price}</p>
                        </div> 

                   </div> 
                ))}
    </div>
  );

}

export default displayCourses;
 */

