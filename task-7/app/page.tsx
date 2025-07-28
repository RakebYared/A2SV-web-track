'use client'
import Image from "next/image";

import { useSearchOpportunitiesQuery } from '@/redux/service/opportunityApi';
import OpportunityCard from "./opportunityCard/page";
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

export default function Home() {
  const { data, isLoading, error } = useSearchOpportunitiesQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading opportunities</div>;

  return (
    <div className="space-y-6">
      {data?.data?.map((opportunity: Opportunity) => (
        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
  );
}
