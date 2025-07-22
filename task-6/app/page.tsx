'use client';
import Image from "next/image";
import Card from "./components/card";
import res from '../public/jobs.json';
import Tag from "./components/tag";
import DashBoard from "./dashBoard/page";
import { useRouter } from 'next/navigation';



const  Home =  () => {

   const router = useRouter();

  const handleClick = (index: number) => {
    router.push(`./dashBoard/page/${index}`);
  };

  const jobs = res.job_postings;
  
  
  return (
    <div>
      {/* <DashBoard index = {0} />   */}
      <p className="font-poppins font-bold text-[32px]">Opportunities</p>

      <p className='text-gray-500 text-[16px] mb-2'> Showing 73 results</p>
       

      {jobs.map((job, index) => (
            
              <div onClick={()=> handleClick(index)} key ={index} className=' font-Epilogue
 pl-9 pr-9 pt-4 pb-4 rounded-2xl border-solid border-1 border-gray-500 mb-5' >
        <div className='grid grid-cols-20 '>
             <div className="col-span-1">
  <div className="size-11 rounded-full overflow-hidden">
    <img 
      src={job.image} 
      alt=""
      className="w-full h-full object-cover"
    />
  </div>
</div>
      <div className='col-span-19'>
        <p className='font-bold text-[20px]'> {job.title}</p>
        <p className='text-gray-500 text-[16px]'> {job.company}</p>
        <p className='text-[16px] mt-2'>{job.description}</p>
        <Tag/>
      </div>
      
        </div>
    </div>
      
         
              
              ))}

         
    </div>


  );
}

export default Home;
