'use client';
import React, { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const baseUrl = "https://akil-backend.onrender.com/login";
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const raw = await response.text(); // read as text first
    console.log("Raw response:", raw);

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      throw new Error("Server did not return valid JSON.");
    }

    if (response.ok) {
      console.log("Login successful:", data);
      localStorage.setItem("token", data.data.accessToken);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } else {
      console.error("Login failed:", data);
      alert("Login failed: " + (data.message || "Unknown error"));
    }
  } catch (error) {
    console.error("Request failed:", error);
    alert("Something went wrong. Check console for details.");
  }
};



  

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-blue-800">
          Create new account?{' '}
          <a href="/auth/signup" className="underline hover:text-blue-600">
            Signup
          </a>
          .
        </p>
      </div>
    </div>
  );
}
