'use client';
import React from 'react'
import res from '../../public/jobs.json'

import { useParams } from 'next/navigation';


const DashBoard = () => {
    const params = useParams();
    const index = Number(params.index);

    const jobs = res.job_postings;
    const ideal = jobs[index].ideal_candidate;

  return (
    <div className='grid grid-cols-[70%_5%_25%]'>
        <div id = 'main' className='grid-cols-65'>

            <p className='font-bold mt-5'>Description</p>
            <p className='mt-3'>{jobs[index].description}</p>
            <p className='font-bold mt-5'>Responsibilities</p>
            <p className='mt-3'>{
                <ul className='list-disc'>
                    {jobs[index].responsibilities.map((point, i) =>(

                        <li key={i}> {point}</li>
                ))}

                </ul>
                
                }</p>

            <p className='font-bold mt-5'>Ideal Candidate we want</p>
            <p className='mt-3'>
                <ul className='list-disc'>
                    <li>{ideal.age} {ideal.gender}</li>
                    <li>
                        <ul className='list-disc'>
                            {ideal.traits.map((value, x) => (<li key={x}>{value}</li>))}
                        </ul>
                    </li>

                </ul>
                </p>
            
             <p className='font-bold mt-5'>When & Where</p>
            <p className='mt-3'>{jobs[index].when_where}</p>
        </div>
        <div></div>
        <div id = 'sidebar'></div>
      
    </div>
  )
}

export default DashBoard
