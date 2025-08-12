'use client';
import React, { useState } from 'react';

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: 'inPerson' | 'remote' | 'hybrid';
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: 'open' | 'closed' | 'draft';
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string[] | null;
  perksAndBenefits: string[] | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: Opportunity[];
}

const OpportunityCard = ({ opportunity: initialOpportunity }: { opportunity: Opportunity }) => {
  const [opportunity, setOpportunity] = useState<Opportunity>(initialOpportunity);
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async (id: string) => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to bookmark opportunities");
      return;
    }

    setIsLoading(true);
    try {
      const baseUrl = `https://akil-backend.onrender.com/bookmarks/${id}`;
      const response = await fetch(baseUrl, {
        method: opportunity.isBookmarked ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        // Optimistically update the UI
        setOpportunity(prev => ({
          ...prev,
          isBookmarked: !prev.isBookmarked
        }));
        
        // Optional: You could fetch the updated data here if needed
        // const data = await response.json();
        // console.log("Bookmark updated:", data);
        
        alert(opportunity.isBookmarked ? "Bookmark removed!" : "Bookmarked successfully!");
      } else {
        // Revert if API call fails
        setOpportunity(prev => ({
          ...prev,
          isBookmarked: prev.isBookmarked
        }));
        
        const errorData = await response.json();
        console.error("Bookmark operation failed:", errorData);
        alert("Operation failed: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      // Revert on network errors
      setOpportunity(prev => ({
        ...prev,
        isBookmarked: prev.isBookmarked
      }));
      
      console.error("Network error:", error);
      alert("Network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          {opportunity.logoUrl && (
            <img 
              className="h-12 w-12 rounded-full object-cover"
              src={opportunity.logoUrl} 
              alt={`${opportunity.orgName} logo`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/default-logo.png';
              }}
            />
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-800">{opportunity.title}</h2>
            <p className="text-gray-600">{opportunity.orgName}</p>
            {opportunity.average_rating > 0 && (
              <div className="flex items-center mt-1">
                <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-600 ml-1">
                  {opportunity.average_rating.toFixed(1)} ({opportunity.total_reviews} reviews)
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 line-clamp-3">{opportunity.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {opportunity.categories?.map((category, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {category}
            </span>
          ))}
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            {opportunity.opType}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">
              {opportunity.location?.join(', ') || 'Not specified'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">When & Where</p>
            <p className="font-medium">
              {opportunity.whenAndWhere || 'Flexible'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Deadline</p>
            <p className="font-medium">
              {new Date(opportunity.deadline).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">
              {new Date(opportunity.startDate).toLocaleDateString()} - {new Date(opportunity.endDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <span className="text-sm text-gray-500">
              {opportunity.applicantsCount} applicants
            </span>
            <span className="text-sm text-gray-500">
              • {opportunity.viewsCount} views
            </span>
          </div>
          
          <button 
            onClick={() => handleBooking(opportunity.id)} 
            disabled={isLoading}
            className={`px-4 py-2 rounded-md transition-colors disabled:opacity-50 ${
              opportunity.isBookmarked 
                ? 'bg-gray-600 text-white hover:bg-gray-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : opportunity.isBookmarked ? (
              'Remove Bookmark'
            ) : (
              'Bookmark'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;