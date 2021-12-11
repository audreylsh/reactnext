import React from 'react'
import styles from '../styles/Courses.module.css'

function FilterButton({button,filter}) {
    return(
        
        <div className="single">
           
            {
                button.map((cat)=>{
                    return <button key = {cat} type ="button" onClick={()=>filter(cat)} className = {styles.filterbuttons} >
                                {cat}
                            </button>
                })
            }
        </div>

        

        
    )
}

export default FilterButton;
