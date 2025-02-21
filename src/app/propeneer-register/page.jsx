"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import MainLayout from "../../components/layout/MainLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import axios from "axios";

export default function PropeneerRegisterPage() {
  const router = useRouter();
  const SERVER_NAME = process.env.NEXT_PUBLIC_SERVER_NAME;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");

  const checkEmailAvailability = async (email) => {
    try {
      const response = await axios.post(`${SERVER_NAME}propeneer/check-email`, {
        email,
      });
      return response.data.isTaken;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  const checkUsernameAvailability = async (username) => {
    try {
      const response = await axios.post(
        `${SERVER_NAME}propeneer/check-username`,
        { username }
      );
      return response.data.isTaken;
    } catch (error) {
      console.error("Error checking username:", error);
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

  const handleUsernameBlur = async (e) => {
    const username = e.target.value;
    if (username) {
      const isTaken = await checkUsernameAvailability(username);
      if (isTaken) {
        setUsernameError("Username is already taken.");
      } else {
        setUsernameError("");
      }
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(`${SERVER_NAME}propeneer/register`, data);

      setSuccess(true);

      setTimeout(() => {
        router.push("/propeneer-login");
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);
      setError("Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Complete Your <span className="text-primary-500">Propeneer</span>{" "}
              Registration
            </h1>
            <p className="mt-3 text-gray-600">
              Create your admin credentials to access the exclusive Propeneer
              dashboard
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Registration Successful!
                </h3>
                <p className="text-gray-600 mb-4">
                  Your account has been created successfully. Your login
                  credentials have been sent to your email.
                </p>
                <p className="text-sm text-gray-500">
                  Redirecting to login page...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                    {error}
                  </div>
                )}

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  register={register}
                  required
                  error={errors.email || emailError}
                  onBlur={handleEmailBlur}
                />

                <Input
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Choose a username"
                  register={register}
                  required
                  error={errors.username || usernameError}
                  onBlur={handleUsernameBlur}
                />

                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  register={register}
                  required
                  error={errors.password}
                />

                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  register={() =>
                    register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords don't match",
                    })
                  }
                  error={errors.confirmPassword}
                />

                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Important:</span> Your
                    username and password will be sent to your email. Please
                    make sure your email address is correct.
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={isLoading || emailError || usernameError}
                >
                  {isLoading ? "Creating Account..." : "Complete Registration"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}