import React from 'react'
import Tag from './tag'

const Card = () => {
  return (
    <div className=' font-Epilogue
 pl-9 pr-9 pt-4 pb-4 rounded-2xl border-solid border-1 border-gray-500'>
        <div className='grid grid-cols-10 '>
             <div className='col-span-1'>
                <div className='bg-red-600 size-11 rounded-full'></div>
             </div>
      <div className='ml-5 col-span-9'>
        <p className='font-bold text-[20px]'> fdfrfrdrrcv</p>
        <p className='text-gray-500 text-[16px]'> fdfrfrdrrcv</p>
      </div>
        </div>

        <p className='text-[16px] mt-2'>hcjbsbhcjsbdcjsbdcsbcj</p>
        <Tag/>

        


     
    </div>
  )
}

export default Card
