import React from 'react';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Resume Problem</h2>
          <p className="text-xl text-gray-300">
            Traditional resumes and work history verification are broken, leading to inefficiencies and trust issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Resume Fraud</h3>
            <p className="text-gray-400">
              According to studies, over 40% of resumes contain significant misrepresentations or outright fabrications.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lengthy Verification</h3>
            <p className="text-gray-400">
              Traditional background checks can add weeks to the hiring process, causing delays and lost opportunities.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trust Deficit</h3>
            <p className="text-gray-400">
              Without reliable verification, employers must make hiring decisions with incomplete or unreliable information.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full text-gray-200 font-medium">
            <span className="text-teal-400 font-bold">Job3</span> solves these problems by creating tamper-proof, instantly verifiable credentials
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;