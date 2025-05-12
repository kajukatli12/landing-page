import React from 'react';
import Button from './ui/Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Work History, 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"> Verified Forever</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Job3 brings trust and transparency to professional credentials through blockchain technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                For Employers
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                For Professionals
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-teal-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-4 w-4 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Senior Developer', company: 'Tech Corp', year: '2020-2022' },
                  { title: 'Lead Engineer', company: 'InnovateCo', year: '2018-2020' },
                  { title: 'Full Stack Developer', company: 'StartupHub', year: '2016-2018' }
                ].map((job, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-3 bg-gray-800 rounded-lg border border-gray-700"
                  >
                    <div className="w-3 h-3 rounded-full bg-teal-400 mr-3"></div>
                    <div>
                      <h3 className="font-medium">{job.title}</h3>
                      <p className="text-sm text-gray-400">{job.company} · {job.year}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="text-xs px-2 py-1 bg-gray-700 rounded-full text-teal-400">Verified</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-400">Blockchain secured</div>
                <div className="flex space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-teal-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-teal-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;