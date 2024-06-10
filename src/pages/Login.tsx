// src/pages/Login.tsx
import React from 'react';
import { useAuth } from './Authentication/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <div className="rounded bg-white p-6 shadow-md">
        <h2 className="mb-4 text-center text-xl font-bold">Login</h2>
        <button
          onClick={handleLogin}
          className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
