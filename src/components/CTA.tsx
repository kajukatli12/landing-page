import React, { useState } from 'react';
import Button from './ui/Button';
import { Check } from 'lucide-react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'professional' | 'employer'>('professional');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to a backend
    setIsSubmitted(true);
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Work History?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join Job3 today and experience the future of professional credentials.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <div className="flex rounded-md overflow-hidden mb-4">
                        <button
                          type="button"
                          className={`flex-1 py-2 px-4 text-center focus:outline-none ${
                            userType === 'professional'
                              ? 'bg-teal-500 text-white'
                              : 'bg-gray-700 text-gray-300'
                          }`}
                          onClick={() => setUserType('professional')}
                        >
                          Professional
                        </button>
                        <button
                          type="button"
                          className={`flex-1 py-2 px-4 text-center focus:outline-none ${
                            userType === 'employer'
                              ? 'bg-teal-500 text-white'
                              : 'bg-gray-700 text-gray-300'
                          }`}
                          onClick={() => setUserType('employer')}
                        >
                          Employer
                        </button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-white"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <Button variant="primary" type="submit" fullWidth>
                      {userType === 'professional' ? 'Join as Professional' : 'Join as Employer'}
                    </Button>
                  </form>
                ) : (
                  <div className="bg-gray-700/50 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-teal-500/20 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-teal-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Thanks for Joining!</h3>
                    <p className="text-gray-300">
                      We'll be in touch soon with your invitation to Job3.
                    </p>
                  </div>
                )}
              </div>

              <div className="hidden lg:block relative bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Professional working on laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 max-w-sm">
                    <h3 className="text-xl font-bold mb-4">Join the Revolution</h3>
                    <ul className="space-y-3">
                      {[
                        'Own your professional identity',
                        'Verify credentials instantly',
                        'Eliminate resume fraud',
                        'Secure your work history forever',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center mr-3 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                          </div>
                          <span className="text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Want to see Job3 in action?{' '}
              <a href="#" className="text-teal-400 hover:text-teal-300 underline">
                Schedule a demo
              </a>{' '}
              or{' '}
              <a href="#" className="text-teal-400 hover:text-teal-300 underline">
                contact our team
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;