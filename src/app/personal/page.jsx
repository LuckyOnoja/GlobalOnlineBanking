"use client";
// pages/personal.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  CreditCard,
  Home,
  Smartphone,
  PiggyBank,
  ArrowRight,
  MessageCircle,
  Briefcase,
  Clock,
  CheckCircle,
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function PersonalBankingPage() {
  return (
    <MainLayout>
      <div className=" ">
     
        {/* Hero Section */}
        <section className="bg-gradient-to-r  from-blue-700 to-blue-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Banking That Revolves Around You
              </h1>
              <p className="text-xl mb-8">
                Personalized banking solutions to help you achieve your
                financial goals with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/register"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Open an Account
                </Link>
                <Link
                  href="/register"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  Explore Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Banking Solutions for Every Need
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From everyday banking to long-term financial planning, we have
                you covered.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Card 1 */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Everyday Banking
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Checking and savings accounts with low fees, mobile banking,
                    and 24/7 support.
                  </p>
                  <Link
                    href="/about"
                    className="text-blue-700 font-medium flex items-center group"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Home Loans
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Competitive rates on mortgages, home equity loans, and
                    refinancing options.
                  </p>
                  <Link
                    href="/investments"
                    className="text-blue-700 font-medium flex items-center group"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <PiggyBank className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Savings & Investments
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Solutions to grow your money, from high-yield savings to
                    retirement planning.
                  </p>
                  <Link
                    href="/investments"
                    className="text-blue-700 font-medium flex items-center group"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Banking Made Simple
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our digital banking experience is designed to make managing
                  your money easier than ever before.
                </p>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Secure Online Banking
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Advanced security measures to protect your financial
                        information.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Mobile Banking App
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Manage your accounts, make transfers, and deposit checks
                        from anywhere.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        24/7 Customer Support
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Help is always available when you need it, day or night.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/register"
                  className="mt-8 inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Get Started with Digital Banking
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative bg-blue-100 rounded-2xl p-6 h-80 lg:h-full flex items-center justify-center"
              >
                <div className="absolute -right-4 -top-4 bg-blue-500 w-40 h-40 rounded-full opacity-20"></div>
                <div className="absolute -left-8 -bottom-8 bg-blue-300 w-60 h-60 rounded-full opacity-20"></div>
                <div className="relative z-10 text-center">
                  <Smartphone className="h-20 w-20 text-blue-700 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mobile Banking
                  </h3>
                  <p className="text-gray-700">
                    Download our award-winning app for a seamless banking
                    experience
                  </p>
                  <div className="mt-6 flex justify-center space-x-4">
                    <Link
                      href="/#"
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm flex items-center"
                    >
                      App Store
                    </Link>
                    <Link
                      href="/#"
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm flex items-center"
                    >
                      Google Play
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join millions of satisfied customers who trust GlobalBank with
                their personal finances.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/register"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Open an Account
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  Contact a Representative
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
