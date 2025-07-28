'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import res from '../../../public/jobs.json';

const DashBoard = () => {
  const { id } = useParams();
  const index = Number(id);



  const job = res.job_postings[index];

  return (
    <div className="grid grid-cols-[70%_5%_25%] gap-4 p-4">
      <div id="main">
       
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3">Description</h2>
          <p>{job.description}</p>
        </section>

       
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3">Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            {job.responsibilities.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>

        
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3">Ideal Candidate</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              {job.ideal_candidate.age} {job.ideal_candidate.gender}
            </li>
            {job.ideal_candidate.traits.map((value, x) => (
              <li key={x}>{value}</li>
            ))}
          </ul>
        </section>

       
        <section className="mb-6">
          <h2 className="font-bold text-lg mb-3">When & Where</h2>
          <p>{job.when_where}</p>
        </section>
      </div>

      <div></div>


      <div id="sidebar">
        <h2 className="font-bold text-lg mb-3">Job Details</h2>
        <p className="text-gray-500">Company: {job.company}</p>
        <p className="text-gray-500">Title: {job.title}</p>
      </div>
    </div>
  );
};

export default DashBoard;