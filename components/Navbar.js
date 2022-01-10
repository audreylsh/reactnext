import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const Navbar = () => {

    const { user, error, isLoading } = useUser();

  // make sure we wait for everything to load
  if (isLoading) return <div>Loading...</div>;

  // if theres an error, show that
  if (error) return <div>{error.message}</div>;

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
            {!user && <Link href="/api/auth/login"><a>Login</a></Link>}
            {user && (
              <>
            <Link href="/dashboard"><a>{user.name}</a></Link>
            <Link href="/api/auth/logout"><a>Logout</a></Link>
          </>
        )}
            
         
        </nav>
     );
}
 
export default Navbar;