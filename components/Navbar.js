import Link from 'next/link'
import Image from 'next/image'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/test.png" width={45} height={40}/> 
                <span className="logotag">Sroove</span>
            </div>
            
            <Link href="/"><a>Home</a></Link> 
            <Link href="/about"><a>About</a></Link>
            <Link href="/courses"><a>Courses</a></Link>
            <Link href="/faq"><a>FAQ</a></Link>
            <Link href="/login"><a>Log in</a></Link>
            
         
        </nav>
     );
}
 
export default Navbar;