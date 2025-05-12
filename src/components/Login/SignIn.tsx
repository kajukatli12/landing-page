import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'professional' | 'employer'>('professional');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Sign in submitted:', { userType, ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl">
        <div>
          <a href="/" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </a>
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-gray-300">Sign in to your Job3 account</p>
        </div>

        <div className="flex rounded-md overflow-hidden mb-6">
          <button
            type="button"
            className={`flex-1 py-2 px-4 text-center focus:outline-none transition-colors ${
              userType === 'professional'
                ? 'bg-teal-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setUserType('professional')}
          >
            Professional
          </button>
          <button
            type="button"
            className={`flex-1 py-2 px-4 text-center focus:outline-none transition-colors ${
              userType === 'employer'
                ? 'bg-teal-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setUserType('employer')}
          >
            Employer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-teal-500 focus:ring-teal-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-teal-400 hover:text-teal-300">
              Forgot password?
            </a>
          </div>

          <Button variant="primary" type="submit" fullWidth>
            Sign In
          </Button>
        </form>

        <div className="text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <button
              onClick={() => navigate(userType === 'professional' ? '/professional-login' : '/employer-login')}
              className="text-teal-400 hover:text-teal-300"
            >
              Create one now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;