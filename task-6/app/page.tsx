'use client';
import React from 'react';
import Link from 'next/link';
import Tag from './components/tag';
import res from '../public/jobs.json';

const Home = () => {
  const jobs = res.job_postings;

  return (
    <div className="p-4">
      <p className="font-poppins font-bold text-[32px]">Opportunities</p>
      <p className="text-gray-500 text-[16px] mb-4">Showing {jobs.length} results</p>

      {jobs.map((job, index) => (
        <Link href={`/dashBoard/${index}`} key={index}>
          <div className="font-Epilogue p-6 rounded-2xl border border-gray-300 mb-4 hover:bg-gray-50 transition-colors">
            <div className="grid grid-cols-[60px_1fr] gap-4">
              <div>
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={job.image}
                    alt={`${job.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-xl">{job.title}</p>
                <p className="text-gray-500 text-base">{job.company}</p>
                <p className="text-base mt-2 line-clamp-2">{job.description}</p>
                <Tag />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;