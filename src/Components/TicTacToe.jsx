import React from 'react'
import cricle_icon from "./Assets/circle.png";
import cross_icon from "./Assets/cross.png";

function TicTacToe() {
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
        </>
    )
}

export default TicTacToe
