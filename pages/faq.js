import Head from 'next/head'
import FaqAccordion from '../components/Faq';
import styles from '../styles/FAQ.module.css'


const FAQ = () => {
    return ( 
        <>
        <Head>
         <title>Sroove | FAQ</title>
        <meta name ="keywords" content="courses"/>
        </Head>

        <div>
            <FaqAccordion/>
        </div>
        

           
        </>
     );
}
 
export default FAQ;