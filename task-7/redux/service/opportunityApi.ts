import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const opportunityApi = createApi({
    reducerPath: "opportunities",
    baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
    endpoints: (builder) => ({
        searchOpportunities: builder.query({
            query: () => "/opportunities/search"
        }),
        getOpportunityById: builder.query({
            query: (id) => `/opportunities/${id}`
        })
    })
});

export const { 
    useSearchOpportunitiesQuery,
    useGetOpportunityByIdQuery 
} = opportunityApi;