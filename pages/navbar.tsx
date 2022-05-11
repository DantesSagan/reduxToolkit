import React from 'react';

export default function Navbar() {
  return (
    <header className='h-16 bg-cyan-200 border-t border-8 border-blue-500 mb-8 p-6 shadow-inner '>
      <div className='container mx-auto max-w-screen-lg h-full'>
        <div className='flex justify-between h-full'>
          <div className='text-white text-center flex items-center align-items cursor-pointer text-black'>
            Dashboard
          </div>
        </div>
      </div>
    </header>
  );
}
