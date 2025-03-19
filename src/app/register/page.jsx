'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import axios from 'axios';

export default function RegisterPage() {
  const router = useRouter();
  const SERVER_NAME = process.env.NEXT_PUBLIC_SERVER_NAME;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password', '');

  const checkEmailAvailability = async (email) => {
    try {
      const response = await axios.post(`${SERVER_NAME}user/check-email`, {
        email,
      });
      return response.data.isTaken;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  const handleEmailBlur = async (e) => {
    const email = e.target.value;
    if (email) {
      const isTaken = await checkEmailAvailability(email);
      if (isTaken) {
        setEmailError("Email is already registered.");
      } else {
        setEmailError("");
      }
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError('');

    try {
      await axios.post(`${SERVER_NAME}user/register`, data);

      router.push('/login?registered=true');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', error);
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
              Create Your Account
            </h2>
            <p className="mt-2 text-gray-600">
              Join GlobalisBank and start managing your finances
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    register={register}
                    error={errors.firstName}
                    rules={{ required: "First name is required" }}
                  />

                  <Input
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    register={register}
                    error={errors.lastName}
                    rules={{ required: "Last name is required" }}
                  />
                </div>

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  register={register}
                  error={errors.email || emailError}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  onBlur={handleEmailBlur}
                />

                <Input
                  label="Password"
                    name="password"
                    type="password"
                    placeholder="Choose a secure password"
                    register={register}
                    error={errors.password}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    }}
                  />

                  <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    register={register}
                    error={errors.confirmPassword}
                    rules={{
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords don't match",
                    }}
                  />

                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                      {...register("terms", {
                        required: "You must agree to the terms",
                      })}
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-primary-500 hover:text-primary-600"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-primary-500 hover:text-primary-600"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.terms.message}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={isLoading || emailError}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-primary-500 hover:text-primary-600"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }