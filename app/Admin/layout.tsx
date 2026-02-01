import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
type LayoutPage = {
    children: React.ReactNode;
}

function layout({children} :LayoutPage) {
  return (
    <html>
      <body>
         <Navbar/>
    <div> {children}</div>
    <Footer/>
      </body>
    </html>
   
    
   
  )
}

export default layout