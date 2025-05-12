import React from 'react';
import { Workflow, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Workflow className="w-8 h-8 text-teal-400 mr-2" />
              <span className="text-2xl font-bold text-white">
                Job<span className="text-teal-400">3</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Verifiable work history on the blockchain. Secure, transparent, and forever yours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'For Professionals', 'For Employers', 'Pricing', 'Security'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Blog', 'Case Studies', 'Partners'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Job3. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <Mail className="h-4 w-4 text-teal-400 mr-2" />
              <a href="mailto:hello@job3.io" className="text-sm text-teal-400 hover:underline">
                hello@job3.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;