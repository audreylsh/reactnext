import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope   } from "@fortawesome/free-solid-svg-icons"; // import the icons you need



const Footer = () => {
    return (
        <footer>
           <div className="row">
               <div className="col-auto">
                    <FontAwesomeIcon  className="icon" icon={faEnvelope} />
                </div>
           </div>
           <div className="row">             
                <div className="col-auto">
                    <p>© Copyright 2021 Sroove</p>
                </div>
           </div>
        
    </footer>

      );
}
 
export default Footer;