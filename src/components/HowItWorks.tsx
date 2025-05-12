import React from 'react';
import { FileCheck, Database, ShieldCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FileCheck className="h-12 w-12 text-teal-400" />,
      title: 'Issue',
      description: 'Employers issue tamper-proof digital credentials for roles, projects, and achievements',
      color: 'from-teal-500/20 to-teal-500/5'
    },
    {
      icon: <Database className="h-12 w-12 text-blue-400" />,
      title: 'Store',
      description: 'Professionals store credentials in their secure blockchain wallet',
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-amber-400" />,
      title: 'Verify',
      description: 'Future employers instantly verify authentic records without lengthy processes',
      color: 'from-amber-500/20 to-amber-500/5'
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Job3 Works</h2>
          <p className="text-xl text-gray-300">
            A simple three-step process that revolutionizes how work history is verified
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 transform -translate-x-1/2 z-0"></div>
              )}
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 shadow-lg text-center relative z-10 h-full transform transition-all duration-300 hover:scale-105 hover:border-teal-400/50">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-b ${step.color} flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto p-6 md:p-8 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Secure Blockchain Verification</h3>
              <p className="text-gray-300 mb-4">
                Job3 leverages blockchain technology to create immutable records that cannot be altered or falsified. This ensures that all credentials are trustworthy and verifiable forever.
              </p>
              <ul className="space-y-2">
                {['Tamper-proof records', 'Instant verification', 'User-controlled data', 'Decentralized security'].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-teal-400 mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-inner">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">Blockchain Verification</div>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-gray-400">{'>'} Verifying credential...</div>
                  <div className="text-teal-400">{'>'} Credential hash: 0x8f4e...2a1b</div>
                  <div className="text-teal-400">{'>'} Issuer: TechCorp Inc.</div>
                  <div className="text-teal-400">{'>'} Issue date: 2024-06-15</div>
                  <div className="text-teal-400">{'>'} Blockchain: Ethereum</div>
                  <div className="text-green-400">{'>'} Verification successful ✓</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;