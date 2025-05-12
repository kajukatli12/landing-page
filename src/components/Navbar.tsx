import React, { useState, useEffect } from 'react';
import { Menu, X, Workflow } from 'lucide-react';
import Button from './ui/Button';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Workflow className="w-8 h-8 text-teal-400 mr-2" />
            <span className="text-2xl font-bold text-white">
              Job<span className="text-teal-400">3</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-teal-400 transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-gray-300 hover:text-teal-400 transition-colors">
              Benefits
            </a>
            <a href="#features" className="text-gray-300 hover:text-teal-400 transition-colors">
              Features
            </a>
            <a href="#technology" className="text-gray-300 hover:text-teal-400 transition-colors">
              Technology
            </a>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/employer-login')}
              >
                For Employers
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => navigate('/professional-login')}
              >
                For Professionals
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="text-gray-300 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#technology"
                className="text-gray-300 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Technology
              </a>
              <div className="flex flex-col space-y-3 pt-2">
                <Button 
                  variant="outline" 
                  fullWidth
                  onClick={() => {
                    navigate('/employer-login');
                    setIsOpen(false);
                  }}
                >
                  For Employers
                </Button>
                <Button 
                  variant="primary" 
                  fullWidth
                  onClick={() => {
                    navigate('/professional-login');
                    setIsOpen(false);
                  }}
                >
                  For Professionals
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;