// app/join/page.js
"use client";
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import Button from '../../components/ui/Button';

export default function JoinPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Become a <span className="text-primary-500">Propeneer</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our exclusive network of financial pioneers and unlock premium banking features.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Propeneer Benefits
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Unlimited transfer amounts with no verification required</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Bypass transaction verification for large transfers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Exclusive premium dashboard with advanced features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">24/7 priority support and financial guidance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Access to exclusive investment opportunities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    One-Time Membership
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Join our exclusive network with a one-time payment and enjoy premium benefits forever.
                  </p>
                  <div className="mb-8">
                    <p className="text-5xl font-bold text-primary-500">$50</p>
                    <p className="text-gray-600 mt-1">Lifetime membership</p>
                  </div>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Instant account approval
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      No monthly fees
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-primary-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Secure payment process
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <Link href="/propeneer-checkout">
                    <Button variant="primary" fullWidth className="text-lg py-3">
                      Become a Propeneer
                    </Button>
                  </Link>
                  <Link href="/propeneer-login">
                    <Button variant="secondary" fullWidth>
                      Already a member? Log in
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}