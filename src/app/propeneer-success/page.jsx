// app/propeneer-success/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../../components/layout/MainLayout';
import Button from '../../components/ui/Button';

export default function PropeneerSuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);
  
  useEffect(() => {
    // Auto-redirect after countdown
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      router.push('/propeneer-register');
    }
  }, [countdown, router]);
  
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            Congratulations! You are now ready to register as a Propeneer.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700">
              Redirecting to registration in <span className="font-bold text-primary-500">{countdown}</span> seconds...
            </p>
          </div>
          
          <Button 
            variant="primary" 
            fullWidth 
            onClick={() => router.push('/propeneer-register')}
          >
            Continue to Registration
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}