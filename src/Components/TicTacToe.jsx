import React, { useState } from 'react'
import cricle_icon from "./Assets/circle.png";
import cross_icon from "./Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""]

function TicTacToe() {

    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    const toggle = (e, num) => {

        if (lock) {
            return 0;
        }

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'>`
            data[num] = "x"
            setCount(count + 1);
        }
        else {
            e.target.innerHTML = `<img src='${cricle_icon}'>`
            data[num] = "o"
            setCount(count + 1);
        }
    }

    return (
        <>
            <div>
                <h1 className='text-center text-white
                text-4xl font-extrabold my-12'>Tic Tac Toe Game</h1>
            </div>

            <div className='flex gap-1 justify-center'>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer
                ' onClick={(e) => { toggle(e, 0) }}></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'
                    onClick={(e) => { toggle(e, 1) }}></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'
                    onClick={(e) => { toggle(e, 2) }}></div>
            </div>
            <div className='flex gap-1 justify-center my-1'>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'
                    onClick={(e) => { toggle(e, 3) }}></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'
                    onClick={(e) => { toggle(e, 4) }}></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'
                    onClick={(e) => { toggle(e, 5) }}></div>
            </div>
            <div className='flex gap-1 justify-center my-1'>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'
                    onClick={(e) => { toggle(e, 6) }}></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'
                    onClick={(e) => { toggle(e, 7) }}></div>
                <div className='bg-gray-800 p-14 w-20 rounded-md cursor-pointer'
                    onClick={(e) => { toggle(e, 8) }}></div>
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
