import React from 'react';
import { ShieldCheck, Database, Lock, Server } from 'lucide-react';

const Technology: React.FC = () => {
  const technologies = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-teal-400" />,
      title: 'W3C Verifiable Credentials',
      description: 'Job3 uses the industry-standard W3C Verifiable Credentials format, ensuring interoperability with other digital identity systems.',
    },
    {
      icon: <Database className="h-8 w-8 text-blue-400" />,
      title: 'Ethereum & Polygon',
      description: 'Our blockchain infrastructure leverages both Ethereum and Polygon for secure, cost-effective credential issuance and verification.',
    },
    {
      icon: <Server className="h-8 w-8 text-amber-400" />,
      title: 'IPFS Storage',
      description: 'Credential details are stored on IPFS, a distributed file system that ensures your data remains accessible and tamper-proof.',
    },
    {
      icon: <Lock className="h-8 w-8 text-green-400" />,
      title: 'Zero-Knowledge Proofs',
      description: 'Advanced cryptography allows professionals to prove credential validity without revealing sensitive information.',
    },
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by Advanced Technology</h2>
          <p className="text-xl text-gray-300">
            Job3 combines cutting-edge blockchain technology with user-friendly interfaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-gray-400">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="relative py-8 px-6 bg-gray-800/20 backdrop-blur-sm rounded-xl">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-teal-500 text-white font-medium rounded-full">
              Data Privacy & Security
            </div>
            
            <p className="text-gray-300 mb-6 pt-4">
              Job3 prioritizes your data security and privacy. Our architecture ensures that:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="text-teal-400 font-medium">Self-Sovereign Identity:</span> You control your data and choose what to share
                </p>
              </div>
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="text-teal-400 font-medium">Encrypted Storage:</span> All sensitive data is encrypted end-to-end
                </p>
              </div>
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="text-teal-400 font-medium">No Central Database:</span> Credentials are stored in a decentralized manner
                </p>
              </div>
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="text-teal-400 font-medium">Regular Audits:</span> Our smart contracts undergo rigorous security audits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
    </section>
  );
};

export default Technology;