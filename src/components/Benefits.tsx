import React from 'react';
import { Shield, Zap, UserCheck, Users, CheckCircle, Clock, Award, BarChart } from 'lucide-react';

const Benefits: React.FC = () => {
  const professionalBenefits = [
    {
      icon: <Shield className="h-6 w-6 text-teal-400" />,
      title: 'Own Your History',
      description: 'Control and own your professional credentials permanently',
    },
    {
      icon: <Zap className="h-6 w-6 text-teal-400" />,
      title: 'Instant Sharing',
      description: 'Share verified credentials instantly with potential employers',
    },
    {
      icon: <UserCheck className="h-6 w-6 text-teal-400" />,
      title: 'Build Trust',
      description: 'Establish a verified professional identity that stands out',
    },
    {
      icon: <Clock className="h-6 w-6 text-teal-400" />,
      title: 'Skip Verification',
      description: 'Eliminate lengthy reference checks and employment verification',
    },
  ];

  const employerBenefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-400" />,
      title: 'Reduce Hiring Risks',
      description: 'Hire with confidence using verified credential data',
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      title: 'Streamline Process',
      description: 'Dramatically reduce verification time from weeks to seconds',
    },
    {
      icon: <Award className="h-6 w-6 text-blue-400" />,
      title: 'Issue Credentials',
      description: 'Provide tamper-proof employment records to your team members',
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: 'Access Verified Talent',
      description: 'Connect with professionals who have verified work histories',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for Everyone</h2>
          <p className="text-xl text-gray-300">
            Job3 creates value for both professionals and employers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* For Professionals */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mr-4">
                <UserCheck className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold">For Professionals</h3>
            </div>
            
            <div className="space-y-6">
              {professionalBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 transform transition-all duration-300 hover:border-teal-400/50 hover:translate-x-1"
                >
                  <div className="mr-4 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 border border-teal-400/30 rounded-lg bg-teal-500/5">
              <div className="flex items-center">
                <BarChart className="h-5 w-5 text-teal-400 mr-2" />
                <p className="text-sm text-teal-300 font-medium">
                  Professionals using verified credentials are 3x more likely to get interview callbacks
                </p>
              </div>
            </div>
          </div>
          
          {/* For Employers */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">For Employers</h3>
            </div>
            
            <div className="space-y-6">
              {employerBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 transform transition-all duration-300 hover:border-blue-400/50 hover:translate-x-1"
                >
                  <div className="mr-4 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 border border-blue-400/30 rounded-lg bg-blue-500/5">
              <div className="flex items-center">
                <BarChart className="h-5 w-5 text-blue-400 mr-2" />
                <p className="text-sm text-blue-300 font-medium">
                  Companies reduce hiring costs by up to 60% by eliminating traditional background checks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/3 -left-24 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Benefits;