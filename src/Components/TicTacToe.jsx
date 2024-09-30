import React, { useState } from 'react'
import cricle_icon from "./Assets/circle.png";
import cross_icon from "./Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""]

function TicTacToe() {

    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    const toggle = (w, num) => {

    }

    return (
        <>
            <div>
                <h1 className='text-center text-white
                text-4xl font-extrabold my-12'>Tic Tac Toe Game</h1>
            </div>

            <div className='flex gap-1 justify-center'>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'></div>
            </div>
            <div className='flex gap-1 justify-center my-1'>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'></div>
            </div>
            <div className='flex gap-1 justify-center my-1'>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'></div>
            </div>
            <br />
            <div className='flex justify-center'>
                <button className='bg-gray-800 p-4 text-green-400 font-medium
                w-40 rounded-3xl'>Reset</button>
            </div>
        </>
    )
}

export default TicTacToe
