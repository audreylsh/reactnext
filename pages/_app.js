import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above




function MyApp({ Component, pageProps }) {
  return (

    <UserProvider>
       <Layout>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Component {...pageProps} />
        </Layout>
      
    </UserProvider>

       


  )

  
}

export default MyApp