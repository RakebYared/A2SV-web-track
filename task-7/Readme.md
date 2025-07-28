# Opportunity Cards App  

This application displays job opportunities in a card format using React, TypeScript, Tailwind CSS, and Redux Toolkit Query.  

## Features  

- Fetches opportunity data from an API  
- Displays opportunities as responsive cards  
- Shows key details like title, description, location, and organization  
- Includes category tags and application metrics  
- Type-safe with TypeScript interfaces  

## Technologies Used  

- React  
- TypeScript  
- Tailwind CSS  
- Redux Toolkit Query  

## Setup  

1. Install dependencies:  
```bash
npm install
```

2. Run the development server:  
```bash
npm run dev
```

## Component Structure  

- `OpportunityCard`: Displays individual opportunity details  
- `OpportunityList`: Fetches and renders a list of opportunities  

## API Integration  

The app connects to a backend API to fetch opportunity data. The API response follows a defined TypeScript interface for type safety.  

## Styling  

Uses Tailwind CSS for responsive design and modern UI components.  

<img width="1087" height="836" alt="image" src="https://github.com/user-attachments/assets/96a78671-f1f6-4c56-8a68-cd98843a2080" />


## Error Handling  

Includes loading states and error messages for API requests.  

## Usage  

Import and use the components in your Next.js pages. Client components are used for data fetching and interactivity.  
