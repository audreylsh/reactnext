import { useRouter } from "next/router";
import { courseData } from '../../components/CourseData'
import Image from 'next/image'
import styles from '../../styles/Courses.module.css'


const courseDetail =() => {
  const router=useRouter();
  const data = courseData[router.query.id-1];
  
  if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } 
  console.log(router.query.id)
  console.log({data})
   return (
 
     <>
     <div className="row mt-5">
       <div className="col-sm-4">
         <Image src={data.image} class="float-left" width={300} height={200} />
       </div>


       <div className="col-5">
         <h3>{data.name}</h3>
         <p>
         Price: ${data.price} <br/>
         Dates: 1Nov2021 - 31Dec2021 <br/>
                Sundays 10am-12pm
         </p>
         
       </div>

       <div className="col-3">
          <button type ="button" className = {styles.btn}>
              {data.status}
          </button>
       </div>

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
       
       </>
       

       
  ); 
}



export default courseDetail;

/* 
export default function ContactId() {
  const router = useRouter();
  const data = router.query.courseData;

  return (
    <div>
      {data}
    </div>
  )
} */

/* export function getServerSideProps(context){
  return{
    props: {params: context.params}
  };
}
 
export default ({params}) => {
  const {id} = params
}
 */
