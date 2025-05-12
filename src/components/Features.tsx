import React, { useState } from 'react';
import { Shield, Laptop, Smartphone, Database } from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('employer');
  
  const tabs = [
    { id: 'employer', label: 'Employer Dashboard', icon: <Laptop className="h-5 w-5" /> },
    { id: 'professional', label: 'Professional Wallet', icon: <Smartphone className="h-5 w-5" /> },
    { id: 'verification', label: 'Verification Process', icon: <Shield className="h-5 w-5" /> },
    { id: 'blockchain', label: 'Blockchain Integration', icon: <Database className="h-5 w-5" /> }
  ];
  
  const tabContent = {
    employer: {
      title: "Employer Dashboard",
      description: "A powerful interface for issuing and managing verifiable credentials",
      image: "https://images.pexels.com/photos/7654418/pexels-photo-7654418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Simple credential issuance with just a few clicks",
        "Bulk upload capabilities for team onboarding",
        "Template library for common role credentials",
        "Analytics dashboard to track credential usage",
        "Customizable branding and credential design"
      ]
    },
    professional: {
      title: "Professional Wallet",
      description: "A secure digital wallet to store and share your verified credentials",
      image: "https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Intuitive mobile and desktop interfaces",
        "One-click credential sharing via secure links",
        "Privacy controls for sensitive information",
        "Notification system for new credential offers",
        "Integration with popular job platforms"
      ]
    },
    verification: {
      title: "Verification Process",
      description: "Instant, cryptographic verification of credentials without middlemen",
      image: "https://images.pexels.com/photos/8730051/pexels-photo-8730051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Instant cryptographic verification",
        "QR code scanning for quick checks",
        "Verification history for audit purposes",
        "Revocation checking for outdated credentials",
        "Zero-knowledge proofs for enhanced privacy"
      ]
    },
    blockchain: {
      title: "Blockchain Integration",
      description: "Built on secure, industry-standard blockchain protocols",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Ethereum and Polygon network support",
        "Gas-optimized smart contracts",
        "IPFS storage for credential details",
        "W3C Verifiable Credentials standard compliance",
        "Cross-chain compatibility for future expansion"
      ]
    }
  };
  
  const active = tabContent[activeTab as keyof typeof tabContent];
  
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Feature Showcase</h2>
          <p className="text-xl text-gray-300">
            Explore the powerful tools Job3 offers to revolutionize work history verification
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">{active.title}</h3>
                <p className="text-gray-300 mb-6">{active.description}</p>
                
                <ul className="space-y-3">
                  {active.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                      </div>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-8 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors shadow-lg flex items-center">
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="lg:order-2">
                <div className="h-full min-h-[300px] bg-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-60">
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-lg inline-block">
                      <span className="text-teal-400 font-medium">{active.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;