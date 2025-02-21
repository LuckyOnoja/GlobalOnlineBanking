"use client";
// app/propeneer-checkout/page.js

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "../../components/layout/MainLayout";
import Button from "../../components/ui/Button";
import axios from "axios";

export default function PropeneerCheckoutPage() {
  const router = useRouter();
  const SERVER_NAME = process.env.NEXT_PUBLIC_SERVER_NAME;
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async () => {
    setIsLoading(true);
    setError("");

    try {
      const { data } = await axios.post(`${SERVER_NAME}payment/initialize`, {
        email,
        amount: 50000, // Amount in Naira
      });

      if (data?.authorization_url) {
        // Redirect user to Paystack payment page
        window.location.href = data.authorization_url;
      } else {
        throw new Error("Failed to initialize payment");
      }
    } catch (error) {
      console.error("Payment initialization error:", error);
      setError("Failed to initialize payment. Please try again.");
      setIsLoading(false);
    }
  };

  // Function to verify payment status after redirection
  const verifyPayment = useCallback(
    async (reference) => {
      try {
        const { data } = await axios.post(`${SERVER_NAME}payment/verify`, {
          reference,
        });

        if (data?.data?.status === "success") {
          router.push("/propeneer-success");
        } else {
          router.push("/propeneer-fail");
        }
      } catch (error) {
        console.error(
          "Payment verification error:",
          error.response?.data || error.message
        );
        router.push("/propeneer-fail");
      }
    },
    [router]
  );

  // Check for payment reference in URL after redirection
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const reference = urlParams.get("reference");

      if (reference) {
        verifyPayment(reference);
      }
    }
  }, []);

  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-primary-500 px-6 py-8 text-white text-center">
              <h1 className="text-3xl font-bold">Become a Propeneer</h1>
              <p className="mt-2 text-lg text-blue-100">
                One-time payment for lifetime premium access
              </p>
            </div>

            <div className="px-6 py-8">
              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                  {error}
                </div>
              )}

              <div className="flex justify-center mb-10">
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-extrabold text-gray-900">
                      $50
                    </span>
                    <span className="ml-1 text-xl text-gray-500">
                      /lifetime
                    </span>
                  </div>
                  <p className="mt-2 text-gray-500">
                    One-time payment, no recurring fees
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What You'll Get
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <svg
                      className="h-6 w-6 text-primary-500 mr-3"
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
                    <span className="text-gray-700">
                      Unlimited transfer amounts with no verification
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="h-6 w-6 text-primary-500 mr-3"
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
                    <span className="text-gray-700">
                      Advanced dashboard with transaction management
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="h-6 w-6 text-primary-500 mr-3"
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
                    <span className="text-gray-700">
                      Access to premium financial tools and analytics
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="h-6 w-6 text-primary-500 mr-3"
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
                    <span className="text-gray-700">
                      Priority customer support 24/7
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700 mb-2">
                  <span>Propeneer Membership</span>
                  <span>$50.00</span>
                </div>
                <div className="flex justify-between font-medium text-lg text-gray-900">
                  <span>Total</span>
                  <span>$50.00</span>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="py-3 text-lg"
                >
                  {isLoading ? "Processing..." : "Proceed to Payment"}
                </Button>

                <p className="text-center text-gray-500 text-sm">
                  By proceeding, you agree to our Terms of Service and Privacy
                  Policy
                </p>

                <div className="flex items-center justify-center mt-4">
                  <img
                    src="/paystack-hd.png"
                    alt="Paystack"
                    className="h-8 mr-4"
                  />
                  <div className="flex items-center text-gray-500">
                    <svg
                      className="h-5 w-5 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="text-sm">Secure Payment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
