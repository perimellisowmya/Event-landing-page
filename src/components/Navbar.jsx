import React from 'react';

function Navbar() {
  const navItems = [
    { link: 'Overview'},
    { link: 'Feature'},
    { link: 'About' },
    { link: 'Pricing' },
  ];
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-white p-4">
      <h2 className="text-8xl lg:text-5xl font-bold  text-black">soarX</h2>
      <ul className="flex flex-col lg:flex-row lg:space-x-12 lg:mt-0 mt-4">
        {navItems.map(({ link }) => (
          <li key={link}>
            <a className="text-black hover:text-gray-300 block lg:inline-block">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 lg:mt-0">
        Sign In
      </button>
    </div>
  );
}

export default Navbar;
