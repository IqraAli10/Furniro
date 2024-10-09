import React from 'react'
import ProductImages from "@/components/ProductImages"
import Add from '@/components/Add'

const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mb-20 mt-20'>
        {/* IMG */}
        <div className='w-full h-max top-20 lg:sticky'>
            <ProductImages/>
        </div>
        {/* TEXT */}
        <div className=' w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-bold'>Product Name</h1>
        <p className=' text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum assumenda voluptates accusamus tempora tenetur laudantium?</p>
        <div className='h-[2px] bg-gray-100'/>
        <div className='flex items-center gap-4'>
          <h3 className='text-xl text-gray-700 line-through'>$59</h3>
          <h2 className=' font-medium text-2xl'>$49</h2>
        </div>
        <div className='h-[2px] bg-gray-100'/>
        <Add/>
        <div className='h-[2px] bg-gray-100'/>
        <div className='text-sm '>
          <h4 className=' font-medium mb-4'>Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci eaque odit ipsa aspernatur commodi ad harum nesciunt in, dolor qui dolorem magni blanditiis explicabo?</p>
        </div>
        <div className='text-sm '>
          <h4 className=' font-medium mb-4'>Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum iste animi dolor quae asperiores. Aliquam, eum molestias similique maiores odit reprehenderit quam commodi dolorum.</p>
        </div>
        <div className='text-sm '>
          <h4 className=' font-medium mb-4'>Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A mollitia, quidem suscipit deleniti assumenda quod!</p>
        </div>
        </div>
    </div>
  )
}

export default SinglePage 