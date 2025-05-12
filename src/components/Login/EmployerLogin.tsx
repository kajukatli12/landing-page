import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const EmployerLogin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    industry: '',
    companySize: '',
    role: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/registration logic here
    console.log('Employer form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          <h2 className="text-3xl font-bold text-white">Employer Portal</h2>
          <p className="mt-2 text-gray-300">Create an account to start verifying and issuing credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-300">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Work Email</label>
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

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-300">Industry</label>
            <select
              name="industry"
              id="industry"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="">Select Industry</option>
              <option value="technology">Technology</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="companySize" className="block text-sm font-medium text-gray-300">Company Size</label>
            <select
              name="companySize"
              id="companySize"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
              value={formData.companySize}
              onChange={handleChange}
            >
              <option value="">Select Company Size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501+">501+ employees</option>
            </select>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-300">Your Role</label>
            <input
              type="text"
              name="role"
              id="role"
              required
              placeholder="e.g., HR Manager, CTO, Hiring Manager"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          <Button variant="primary" type="submit" fullWidth>
            Create Employer Account
          </Button>
        </form>

        <div className="text-center">
          <p className="text-gray-400">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/sign-in')}
              className="text-teal-400 hover:text-teal-300"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;