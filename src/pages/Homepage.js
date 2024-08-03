import React from 'react';
import Navbar from '../navbar';


export default function Homepage() {
  return (
    /* This is the main page, anything that is used everywhere  
        goes in here, otherwise create a page.
    */
    <div>
      <Navbar />
      <h1 className="text-center text-3xl font-bold underline">
        
        Hello world!
        <p>Help</p>
      </h1>
      <h2 className="text-center">
        this is a test?
      </h2>
    </div>
  )
}