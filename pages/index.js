import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopCourses from '../components/TopCourses'



export default function Home() {

  return (
    <>
    <Head>
      <title>Sroove | Home</title>
      <meta name ="keywords" content="courses"/>
    </Head>
    <div className={styles.banner} >
      <Image src="/banner3.png" alt ="banner" layout='responsive' width={70} height={25} />
    </div>

    <div>
      <div className="row row-header mt-5">
            
            <div>
                <h4>Explore a new skill and learn from our team of highly qualified professionals</h4>
            </div>
            

            
            <div className="row row-content">
              <TopCourses/>  
            </div>      

        </div>

    </div>
  </>
  )
}


