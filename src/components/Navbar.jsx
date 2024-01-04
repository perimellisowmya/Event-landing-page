import React from 'react';

function Navbar() {
  
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-white p-4">
      <h2 className="text-8xl lg:text-5xl font-bold  text-black">soarX</h2>
      <ul className="flex flex-col lg:flex-row lg:space-x-12 lg:mt-0 mt-4">
         <li>Poster</li>
         <li>Description</li>
         <li>Event Details</li>
         <li>Registration form</li>
          
      
      </ul>
      <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 lg:mt-0">
        Sign In
      </button>
    </div>
  );
}

export default Navbar;
