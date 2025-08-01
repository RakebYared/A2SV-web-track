!!! I used react because my pc kept crashing out when using 
nextjs. i tried everything but nothing was working!!!

## What it does

- User registration with email verification
- Login with email and password
- Protected dashboard
- Modern, clean UI

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the app:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

## How to use

1. **Sign up** - Create a new account
2. **Verify email** - Enter the OTP sent to your email
3. **Sign in** - Login with your verified account
4. **Dashboard** - View your account info

## API

Uses the backend at `https://akil-backend.onrender.com`:
- POST `/signup` - Create account
- POST `/login` - Sign in
- POST `/verify-email` - Verify email with OTP

## Tech Stack

- React 19
- React Router
- Axios
- Vite
