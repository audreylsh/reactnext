import { loadStripe } from '@stripe/stripe-js';
import Stripe from "stripe";

import { useRouter } from 'next/router';
import Link from 'next/link';
import {React,  useState, useEffect} from 'react';
//import { courseData } from '../../components/CourseData'
import Image from 'next/image'
import styles from '../../styles/Courses.module.css'


export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:8000/courses');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(course => {
    return {
      params: { id: course.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:8000/courses/' + id);
  const data = await res.json();

  return {
    props: { coursedata: data }
  }
}


const Details = ({ coursedata }) => {
  

  return (
    <>
     <div className="row mt-5">
      <h1>{coursedata.courseName}</h1>

        <div className="col-sm-4">
         <Image src={coursedata.image} class="float-left" width={300} height={200} />
       </div>
  

      <div className="col-5">
         <h3>{coursedata.name}</h3>
         <p>
         Price: ${coursedata.price} <br/>
         Dates: 1Nov2021 - 31Dec2021 <br/>
                Sundays 10am-12pm
         </p>
      </div>

      <div className="col-3">
         <form action='/api/checkout_sessions' method='POST'>
              <section>
                  <button  id="checkoutButton" type='submit' role='link' className = {styles.filterbuttons}>
                       {coursedata.status}
                  </button>
              </section>
          </form>



          {/* <button onClick={() => onClick(coursedata.stripeid)}>Buy</button> */}
          <button id="checkoutButton">Click me!</button>
          
      </div>

    
       
     

       <div>
        <h3>About this course</h3>
        <p>
          Summary.
        </p>
        <p>
          In this course, you will learn:<br/>
            - The meaning behind <br/>
            - What is<br/>
            - How to<br/>
          </p>
          <p>
            This course is for:
        </p>
        <p>
            This course includes:
        </p>



    </div>

    <div>
      <h3>Instructor</h3>
    </div>


      </div>
       </>
  );
}

export default Details;
