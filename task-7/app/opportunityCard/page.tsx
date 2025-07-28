import React from 'react';

interface Opportunity {
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


const  OpportunityCard = ({ opportunity }: { opportunity: Opportunity })  => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          {opportunity.logoUrl && (
            <img 
              className="h-12 w-12 rounded-full object-cover"
              src={opportunity.logoUrl} 
              alt={`${opportunity.orgName} logo`}
            />
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-800">{opportunity.title}</h2>
            <p className="text-gray-600">{opportunity.orgName}</p>
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
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">{opportunity.location?.join(', ')}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">When & Where</p>
            <p className="font-medium">{opportunity.whenAndWhere}</p>
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
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;