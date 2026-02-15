'use client';

import Link from 'next/link';
import { useState } from 'react';

const Products = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Replace with actual Limba waitlist endpoint
    // const ENDPOINT = "https://api.limba.app/waitlist"; 
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // If we had the real endpoint:
      // await fetch(ENDPOINT, { method: 'POST', body: JSON.stringify({ email }) });

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50">
      {/* Products Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-base font-semibold text-blue-200 tracking-wide uppercase">Our Products</h2>
          <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Software for the Future.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Limba Section */}
        <div id="limba" className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Limba
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                AI-powered flexibility and wellness app delivering personalized stretch recommendations and routines.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="https://www.getlimba.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
                  >
                    Get Limba
                  </a>
                </div>
                <div className="rounded-md shadow">
                   <Link
                    href="/contact"
                    className="flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Contact Trill Labs
                  </Link>
                </div>
              </div>

              {/* Waitlist Form */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  Join the Limba Waitlist
                </h4>
                <form onSubmit={handleWaitlistSubmit} className="mt-4 sm:flex">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs border-gray-300 rounded-md"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      disabled={status === 'loading' || status === 'success'}
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
                    >
                      {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
                    </button>
                  </div>
                </form>
                {status === 'success' && (
                  <p className="mt-2 text-sm text-green-600">Thanks for joining! We'll be in touch soon.</p>
                )}
                {status === 'error' && (
                  <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again.</p>
                )}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
               <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-violet-100 rounded-2xl p-12 h-96 flex items-center justify-center shadow-xl ring-1 ring-blue-200/50">
                  <img 
                    src="/images/logo/LIMBA@2x.png" 
                    alt="Limba logo" 
                    className="max-h-24 w-auto"
                  />
               </div>
            </div>
          </div>
        </div>

        {/* Future Products / Roadmap */}
        <div className="mt-24">
          <div className="lg:text-center mb-12">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">What's Next</h2>
            <h3 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Future Roadmap
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Beyond Limba, we are building a portfolio of cloud-native products powered by AWS, AI, and modern engineering. Each designed to solve real problems at scale.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

             <div className="bg-white rounded-xl p-8 border border-gray-100 ring-1 ring-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:ring-gray-200">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-white font-bold text-lg">MA</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Marketing Automation Software</h4>
                <p className="mt-2 text-gray-500">
                  End-to-end marketing automation platform for campaign management, lead scoring, email sequences, and analytics — helping businesses convert and retain customers with less manual effort.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Planned</span>
             </div>

             <div className="bg-white rounded-xl p-8 border border-gray-100 ring-1 ring-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:ring-gray-200">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-white font-bold text-lg">TP</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900">AI Trading Platform</h4>
                <p className="mt-2 text-gray-500">
                  Algorithmic trading platform leveraging machine learning for market analysis, signal generation, and automated execution. Cloud-native, low-latency, and built for reliability.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">Planned</span>
             </div>

             <div className="bg-white rounded-xl p-8 border border-gray-100 ring-1 ring-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:ring-gray-200">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-white font-bold text-lg">DT</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900">Developer Tooling</h4>
                <p className="mt-2 text-gray-500">
                  CLI tools, SDKs, and cloud-integrated utilities that help engineers ship faster. From deployment pipelines to code generation. e're building the tools we wish existed for you to use.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">Planned</span>
             </div>
             
             <div className="bg-white rounded-xl p-8 border border-gray-100 ring-1 ring-gray-100 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:ring-gray-200">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-white font-bold text-lg">SS</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900">SaaS Products</h4>
                <p className="mt-2 text-gray-500">
                  Scalable, subscription-based software services targeting niche verticals. Each product is cloud-hosted on AWS, designed for multi-tenancy, and built with enterprise-grade security from day one.
                </p>
                <span className="inline-block mt-4 text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">Ongoing</span>
             </div>

          </div>
        </div>

        {/* Cloud Infrastructure Note */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-2xl">
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Built on AWS. Engineered for Scale.
              </h3>
              <p className="mt-3 text-lg text-gray-300">
              At Trill Labs, we build modern, cloud-native products designed to scale globally. Powered by AWS, automated infrastructure, and secure-by-design architecture, we move fast without sacrificing stability. Every system we create is engineered for performance, resilience, and long-term growth.              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8 flex-shrink-0">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100"
              >
                Learn More About Our Tech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
