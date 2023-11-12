import React from 'react';

const CollorPallet = ({ setColor }) => {
    return (

        <>

            <button
                onClick={() => setColor("red")}
                className='outline-none bg-red-600 rounded-full text-white px-4 py-2 mx-1 shadow-lg hover:bg-red-700 uppercase transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline active:bg-red-800 focus:ring focus:ring-red-300 ... z-0 hover:z-50 '



            >Red</button>
            <button
                className='outline-none bg-purple-600 rounded-full text-white px-4 py-2 mx-1 shadow-lg hover:bg-purple-700 uppercase transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline active:bg-purple-800 focus:ring focus:ring-purple-300 ... z-0 hover:z-50 '

                onClick={() => setColor("purple")}

            >purple</button>
            <button
                className='outline-none bg-black rounded-full text-white px-4 py-2 mx-1 shadow-lg hover:bg-black uppercase transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline active:bg-black focus:ring focus:ring-black ... z-0 hover:z-50 '

                onClick={() => setColor("black")}

            >black</button>
            <button
                className='outline-none bg-gray-600 rounded-full text-white px-4 py-2 mx-1 shadow-lg hover:bg-gray-700 uppercase transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline active:bg-gray-800 focus:ring focus:ring-gray-300 ... z-0 hover:z-50 '

                onClick={() => setColor("gray")}

            >gray</button>
            <button
                className='outline-none bg-orange-600 rounded-full text-white px-4 py-2 mx-1 shadow-lg hover:bg-orange-700 uppercase transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline active:bg-orange-800 focus:ring focus:ring-orange-300 ... z-0 hover:z-50  '

                onClick={() => setColor("orange")}

            >orange</button>
            <button
                className='outline-none bg-blue-600 rounded-full text-white px-4 py-2 mx-1 shadow-lg hover:bg-blue-700 uppercase transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline active:bg-blue-800 focus:ring focus:ring-blue-300 ... z-0 hover:z-50 '

                onClick={() => setColor("blue")}

            >blue</button>
            <button
                className='outline-none bg-green-600 rounded-full text-white px-4 py-2 mx-1 shadow-lg hover:bg-green-700 uppercase transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline active:bg-green-800 focus:ring focus:ring-green-300 ... z-0 hover:z-50 '

                onClick={() => setColor("green")}

            >green</button>
            <button
                className='outline-none bg-violet-600 rounded-full text-white px-4 py-2 mx-1 shadow-lg hover:bg-violet-700 uppercase transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline active:bg-violet-800 focus:ring focus:ring-violet-300 ... z-0 hover:z-50  '
                onClick={() => setColor("violet")}

            >violet</button>
            <button
                className='outline-none bg-indigo-600 rounded-full text-white px-4 py-2 mx-1 shadow-lg hover:bg-indigo-700 uppercase transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline active:bg-indigo-800 focus:ring focus:ring-indigo-300 ... z-0 hover:z-50  '
                onClick={() => setColor("indigo")}


            >indigo</button>
        </>
    );
}

export default CollorPallet;
