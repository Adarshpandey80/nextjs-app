import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type LayoutPage = {
    children: React.ReactNode;
}

export default function RootLayout({children}: LayoutPage) {
  return (
  <>

         <Navbar/>
    {children}
    <Footer/>
     
     </>
    
   
  )
}


