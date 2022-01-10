/* const Coursedata = ({coursedata}) => {
    return(
        <div>
            <h1>getStaticprops</h1>
            <ol>
                {coursedata.map(({id,courseName})=>(
                    <li key={id}>{courseName}</li>
                ))}
            </ol>
        </div>
    )
}


export async function getStaticProps(){
    const res=await fetch('http://localhost:8000/courses')
    const coursedata = await res.json()
    return{
        props: {
            coursedata
        }
        
    }
}

export default Coursedata */