"use client"
import React, { useState } from 'react'

const Add = () => {

 const [Quantity, setQuantity] = useState(1)
 
const stock = 4;


const handleQuantity =(type:"i" | "d") =>{
    if(type ==="d" && Quantity > 1){
        setQuantity((prev)=> prev - 1)
    }
    if(type ==="i" && Quantity < stock){
        setQuantity((prev)=> prev + 1)
    }
}


  return (
    <div className=' flex flex-col gap-4'>
        <h4 className='font-medium'>Choose Quantity</h4>
        <div className='flex justify-between gap-8'>
            <div className=' flex items-center gap-4'>
             <div className=' bg-gray-200 px-4 py-2 rounded-3xl flex item-center justify-between w-32'>
                <button className='text-xl cursor-pointer' onClick={()=>handleQuantity("d")}> - </button>
                {Quantity}
                <button className='text-xl cursor-pointer' onClick={()=>handleQuantity("i")}> + </button>
             </div>
            <div className='text-xs'>Only <span className='text-orange-500'>4 items</span> left! <br /> {"don't"}{""} miss it
            </div>
         </div>
        <button className='w-36 text-sm rounded-3xl ring-1 ring-yellow-600 transition-all ease-in-out duration-500 hover:tracking-wider py-2 px-4 hover:bg-yellow-600 hover:text-black disabled:cursor-not-allowed disabled:bg-yellow-600 disabled:text-black '>Add to cart</button>
        </div>
    </div>
  )
}

export default Add