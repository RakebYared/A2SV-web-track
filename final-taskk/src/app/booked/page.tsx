'use client';
import OpportunityCard from "../dashboard/card";

import { useEffect, useState } from "react";


interface Event {
  eventId: string;
  title: string;
  opType: string;
orgName: string;
  datePosted: string;
  dateBookmarked: string;
  logoUrl: string;  
  location: string;}
export default function BookedPage() {

    const url = "https://akil-backend.onrender.com/bookmarks";
    const [data, setData] = useState<[]| null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold">Booked Opportunities</h1>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {data?.map((e: Event) => (
    <div
      key={e.eventId}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-200 flex flex-col gap-4 border border-blue-100"
    >
      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        <img
          src={e.logoUrl}
          alt={`${e.orgName} logo`}
          className="w-16 h-16 object-contain rounded-full border border-gray-200"
        />
        <div>
          <h2 className="text-lg font-bold text-blue-800">{e.title}</h2>
          <p className="text-sm text-gray-500">{e.orgName}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
          {e.opType}
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
          {e.location}
        </span>
      </div>

      {/* Dates */}
      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-semibold">Posted:</span> {e.datePosted}
        </p>
        <p>
          <span className="font-semibold">Bookmarked:</span> {e.dateBookmarked}
        </p>
      </div>

      
      
    </div>
  ))}
</div>


        </div>
    );
};