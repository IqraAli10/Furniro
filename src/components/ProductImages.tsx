'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const images = [
    {
        id:1,
        url:"/livingroom.jpg"
    },
    {
        id:2,
        url:"/chair.jpg"
    },
    {
        id:3,
        url:"/bed.jpg"
    },
    {
        id:4,
        url:"/lamp.jpg"
    },
]


const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return (
    <div className=''>
        <div className='h-[500px] relative'>
            <Image src={images[index].url} alt='' priority sizes='50vw' fill className='object-cover rounded-md'/>
        </div>
        <div className=' flex gap-4 mt-8 justify-between'>
          {images.map((img, i)=>(  
        <div className=' w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={img.id} onClick={()=>setIndex(i)}>
                <Image src={img.url}  alt='' sizes='30vw' priority fill className='object-cover rounded-md'/>

        </div>
          ))}
        </div>
    </div>
  )
}

export default ProductImages