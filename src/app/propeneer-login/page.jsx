// app/propeneer-login/page.js
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import axios from 'axios';


export default function PropeneerLoginPage() {
  const router = useRouter();
  const SERVER_NAME = process.env.NEXT_PUBLIC_SERVER_NAME;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await axios.post(`${SERVER_NAME}propeneer/login`, data); 
  
      if (response.data?.token) { 
        localStorage.setItem("adminToken", response.data.token);
  
        router.push('/propeneer-dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Failed to log in. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Propeneer Login
            </h2>
            <p className="mt-2 text-gray-600">
              Sign in to access your Propeneer dashboard
            </p>
          </div>
          
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              {error && (
                <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                  {error}
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <Input
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  register={register}
                  error={errors.username}
                  required
                />
                
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  register={register}
                  error={errors.password}
                  required
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  
                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary-500 hover:text-primary-600">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </Button>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Not a Propeneer yet?
                    </span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link href="/join">
                    <Button variant="secondary" fullWidth>
                      Become a Propeneer
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/login" className="text-sm text-primary-500 hover:text-primary-600">
                Regular user? Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}