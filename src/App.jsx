import { useState } from 'react';
import './App.css';
import React from 'react';
import CollorPallet from './Components/CollorPallet';
import Header from './Components/Header';

function App() {
  const [color, setColor] = useState('#132043');

  const changeColor = () => {
    // Change the color to a new value when this function is called
    setColor('blue');
  };


  return (
    <>





      <div className="w-full h-screen duration-200"
        style={{ background: `${color}` }}>
        <Header/>




        <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white    px-3 py-2 rounded-3xl' >


            <CollorPallet setColor={setColor} />
          </div>
        </div>


      </div>

    </>

  );
};

export default App;

