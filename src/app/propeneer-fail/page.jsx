// app/propeneer-fail/page.js
'use client';

import { useRouter } from 'next/navigation';
import MainLayout from '../../components/layout/MainLayout';
import Button from '../../components/ui/Button';


export default function PropeneerFailPage() {
  const router = useRouter();
  
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="h-12 w-12 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Failed
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            We couldn't process your payment. Please try again or contact support.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Possible reasons:</h3>
            <ul className="text-left text-gray-700 space-y-1">
              <li>• Insufficient funds in your account</li>
              <li>• Card declined by your bank</li>
              <li>• Network connection issue</li>
              <li>• Payment gateway temporary unavailable</li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Button 
              variant="primary" 
              fullWidth 
              onClick={() => router.push('/propeneer-checkout')}
            >
              Try Again
            </Button>
            
            <Button 
              variant="secondary" 
              fullWidth 
              onClick={() => router.push('/support')}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}