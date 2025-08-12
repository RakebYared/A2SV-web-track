'use client';

export default function Logout() {

    const handleLogout = () => {
        
        localStorage.removeItem("token");
       
        window.location.href = "/auth/login";
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
  
}