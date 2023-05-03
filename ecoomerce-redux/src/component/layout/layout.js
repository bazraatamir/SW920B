import React from 'react';
import Header from './header';
import Footer from './footer';

function Layout({children}) {
   
    return ( 
        <>
            <Header/>
            <main>
                <h1>{children}</h1>
            </main>
            <Footer/>
        </>
        
     );
}

export default Layout;