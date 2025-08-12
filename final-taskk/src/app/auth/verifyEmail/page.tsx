'use client';
import React, { useState } from 'react';
export default function VerifyEmail() {

    const [formData, setFormData] = useState({

        email: "",
        OTP : "",
    });
    const handleSubmit = async () => {
        const baseUrl = "https://akil-backend.onrender.com/auth/verify-email";
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Email verification successful:", data);
            alert("Email verification successful! You can now log in.");
            window.location.href = "/auth/login";
        } else {
            const errorData = await response.json();
            console.error("Email verification failed:", errorData);
            alert("Email verification failed: " + errorData.message);
        }
    }
    return(
        <div className="min-h-screen flex items-center justify-center ">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h1 className="text-2xl font-bold text-blue-800 mb-6">Verify Email</h1>
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
        <label className="block text-blue-800 font-semibold mb-1">OTP:</label>
        <input
          type="text"
          value={formData.OTP}
          onChange={(e) =>
            setFormData({ ...formData, OTP: e.target.value })
          }
          required
          className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Verify Email
      </button>
    </form>
  </div>
</div>

    );

};