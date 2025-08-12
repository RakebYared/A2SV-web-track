'use client'
import { Opportunity} from "@/app/dashboard/card";
import OpportunityCard from "@/app/dashboard/card";
import { useEffect, useState } from "react";
import Link from "next/link";



 
export default function Dashboard() {

    
    const url = "https://akil-backend.onrender.com/opportunities/search";

    //use useEffect to fetch data from the API
    const [data, setData] = useState<{ success: boolean; message: string
; data: Opportunity[] } | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);



   
    return (
        
        <div className="space-y-6">
            <nav className="bg-blue-300 p-4 text-white">
               <Link
        href="/booked"
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Booked
      </Link>
                </nav>
      {data?.data?.map((opportunity: Opportunity) => (
        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
    
    );
}