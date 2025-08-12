'use client'

import { useState } from "react";

export default function SignUpPage() {

    const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: ""
   
  });

  const handleSubmit =async ()=>{
    const baseUrl = "https://akil-backend.onrender.com/auth/signup";
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Sign up successful:", data);
        alert("Sign up successful! Please log in.");
      window.location.href = "/auth/verifyEmail";
    } else {
      const errorData = await response.json();
      console.error("Sign up failed:", errorData);
      alert("Sign up failed: " + errorData.message);
    }
  
  };

    return (
       <div className="min-h-screen flex items-center justify-center ">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h1 className="text-2xl font-bold text-blue-800 mb-6">Sign Up</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-blue-800 font-semibold mb-1">Full Name:</label>
        <input
          type="text"
          value={formData.full_name}
          onChange={(e) =>
            setFormData({ ...formData, full_name: e.target.value })
          }
          required
          className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <label className="block text-blue-800 font-semibold mb-1">Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
          className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <label className="block text-blue-800 font-semibold mb-1">Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
          className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <label className="block text-blue-800 font-semibold mb-1">Confirm Password:</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          required
          className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Sign Up
      </button>
    </form>
    <p className="mt-4 text-center text-blue-800">
      Already have an account?{" "}
      <a href="/auth/login" className="underline hover:text-blue-600">
        Login
      </a>
      .
    </p>
  </div>
</div>

        
    );

};