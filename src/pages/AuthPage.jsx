import React from "react";
import { FaGoogle } from "react-icons/fa";

const AuthPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">Your ideas, amplified</h1>
        <p className="text-gray-600 mb-6">
          Privacy-first AI that helps you create in confidence.
        </p>

        <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 mb-4 p-2 rounded-lg">
          <FaGoogle className="text-red-500" /> Continue with Google
        </button>

        <p className="text-gray-500 mb-4">OR</p>

        <input
          type="email"
          placeholder="Enter your personal or work email"
          className="w-full mb-4 p-2 border rounded-lg"
        />
        <button className="w-full bg-orange-600 text-white hover:bg-orange-700 p-2 rounded-lg">
          Continue with email
        </button>

        <p className="text-xs text-gray-500 mt-4">
          En continuant, vous acceptez les{" "}
          <a href="#" className="text-blue-500">
            Conditions d'utilisation
          </a>{" "}
          et la{" "}
          <a href="#" className="text-blue-500">
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
