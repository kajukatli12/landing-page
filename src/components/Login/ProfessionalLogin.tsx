import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const ProfessionalLogin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    currentRole: '',
    yearsOfExperience: '',
    skills: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/registration logic here
    console.log('Professional form submitted:', formData);
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
          <h2 className="text-3xl font-bold text-white">Professional Portal</h2>
          <p className="mt-2 text-gray-300">Create an account to manage your verified credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

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

          <div>
            <label htmlFor="currentRole" className="block text-sm font-medium text-gray-300">Current Role</label>
            <input
              type="text"
              name="currentRole"
              id="currentRole"
              required
              placeholder="e.g., Software Engineer, Product Manager"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
              value={formData.currentRole}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-300">Years of Experience</label>
            <select
              name="yearsOfExperience"
              id="yearsOfExperience"
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            >
              <option value="">Select Experience</option>
              <option value="0-2">0-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="6-10">6-10 years</option>
              <option value="11+">11+ years</option>
            </select>
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-300">Key Skills</label>
            <input
              type="text"
              name="skills"
              id="skills"
              required
              placeholder="e.g., JavaScript, React, Project Management"
              className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          <Button variant="primary" type="submit" fullWidth>
            Create Professional Account
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

export default ProfessionalLogin;