import React from 'react';
import { User, Briefcase, Building } from 'lucide-react';

const UseCases: React.FC = () => {
  const useCases = [
    {
      icon: <User className="h-10 w-10 text-teal-400" />,
      title: 'For Job Seekers',
      scenario: 'Sarah applied for a senior developer position at a tech company. Instead of waiting weeks for background checks, she shared her verified Job3 credentials. The hiring manager instantly confirmed her past roles and projects, and she received an offer the next day.',
      benefit: 'Faster hiring process, higher trust, reduced stress',
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-400" />,
      title: 'For Hiring Managers',
      scenario: 'As a CTO, Michael needs to fill critical engineering roles quickly. With Job3, he can verify candidates\' experience immediately, eliminating the risk of resume fraud and reducing time-to-hire from weeks to days.',
      benefit: 'Reduced hiring risks, faster onboarding, better candidates',
    },
    {
      icon: <Building className="h-10 w-10 text-amber-400" />,
      title: 'For Enterprises',
      scenario: 'A Fortune 500 company implemented Job3 for all employee credentials. They reduced credential verification costs by 70% while providing departing employees with portable, verified work history they could take to their next role.',
      benefit: 'Cost savings, improved employee experience, enhanced reputation',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-World Success Stories</h2>
          <p className="text-xl text-gray-300">
            See how Job3 is transforming the professional verification landscape
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-xl"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{useCase.title}</h3>
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-600 pl-4 py-1 mb-6">
                  <p className="text-gray-300 italic">"{useCase.scenario}"</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-200">Key Benefits:</p>
                  <p className="text-gray-400">{useCase.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full">
            <p className="text-lg text-gray-200">
              Join <span className="text-teal-400 font-bold">1,000+</span> professionals and <span className="text-blue-400 font-bold">100+</span> companies already using Job3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;