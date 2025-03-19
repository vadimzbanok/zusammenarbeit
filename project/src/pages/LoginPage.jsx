import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hier kannst du deine Login-Logik einfügen
    if (!email || !password) {
      setError("Bitte fülle alle Felder aus!");
      return;
    }

    setError("");
    console.log("Login attempt", { email, password });
    // Füge hier deine Logik für die Authentifizierung hinzu
  };

  return (
    <>
     <HeaderComponent />
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
           <Link to="/">Login</Link> 
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:text-blue-700">Sign Up</a>
        </p>
      </div>
    </div>
    <FooterComponent />
    </>
  );
};

export default LoginPage;
