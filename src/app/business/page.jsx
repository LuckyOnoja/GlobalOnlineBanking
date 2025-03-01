"use client";
// pages/business.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building,
  Briefcase,
  TrendingUp,
  Globe,
  Users,
  ArrowRight,
  MessageCircle,
  Shield,
  CheckCircle,
  DollarSign
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
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

export default function BusinessBankingPage() {
  return (
    <MainLayout>
      <div className="">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Banking Solutions for Every Business
              </h1>
              <p className="text-xl mb-8">
                From startups to global enterprises, our comprehensive financial services help your business thrive in today's competitive landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/register"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Open a Business Account
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  Speak with an Advisor
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Business Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Business Banking Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tailored financial products and services to support your business at every stage of growth.
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
                    <Briefcase className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Business Accounts
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Checking, savings, and specialized accounts designed to manage your business cash flow efficiently.
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
                    <TrendingUp className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Lending & Financing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Business loans, lines of credit, equipment financing, and commercial real estate solutions.
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
                    <Globe className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Global Banking & Trade
                  </h3>
                  <p className="text-gray-600 mb-4">
                    International payment solutions, foreign exchange services, and trade finance opportunities.
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

        {/* Industry Solutions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Specialized Industry Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Custom financial strategies for the unique challenges and opportunities in your industry.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <Building className="h-10 w-10 text-blue-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Real Estate</h3>
                <p className="text-sm text-gray-600">Specialized financing for development, investment, and property management</p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <Users className="h-10 w-10 text-blue-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Professional Services</h3>
                <p className="text-sm text-gray-600">Tailored solutions for law firms, medical practices, and consulting businesses</p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <DollarSign className="h-10 w-10 text-blue-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Financial Services</h3>
                <p className="text-sm text-gray-600">Banking solutions for investment firms, fintechs, and insurance companies</p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <Globe className="h-10 w-10 text-blue-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Global Commerce</h3>
                <p className="text-sm text-gray-600">International trade, supply chain financing, and cross-border payment systems</p>
              </motion.div>
            </motion.div>

            <div className="text-center mt-8">
              <Link
                href="/register"
                className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors duration-300"
              >
                View all industry solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Treasury Management */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Advanced Treasury Management
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Optimize your company's liquidity, minimize risks, and maximize operational efficiency with our comprehensive treasury management services.
                </p>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Cash Management
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Streamline payables, receivables, and liquidity with advanced digital tools.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Fraud Prevention
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Advanced security features to protect your business accounts and transactions.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Reporting & Analytics
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Real-time insights and custom reports to inform your financial decision-making.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/login"
                  className="mt-8 inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  Explore Treasury Solutions
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
                <div className="relative z-10 text-center p-6">
                  <Shield className="h-20 w-20 text-blue-700 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Secure Business Banking
                  </h3>
                  <p className="text-gray-700">
                    Our enterprise-grade security systems and dedicated fraud prevention team work around the clock to protect your business finances.
                  </p>
                  <Link
                    href="/about"
                    className="mt-6 inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors duration-300"
                  >
                    Learn about our security measures <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See why thousands of businesses choose GlobalBank for their financial needs.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "GlobalBank's trade finance solutions have been instrumental in our international expansion. Their expertise in cross-border transactions has saved us time and money."
                </p>
                <div>
                  <p className="font-bold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">CFO, TechGlobal Solutions</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "As a growing manufacturing company, we needed flexible financing options. GlobalBank understood our needs and created a custom solution that helped us expand our production capacity."
                </p>
                <div>
                  <p className="font-bold text-gray-900">Michael Chen</p>
                  <p className="text-gray-600 text-sm">President, Precision Manufacturing</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  "Their treasury management platform is incredible. Real-time cash flow visibility and automated reconciliation have transformed our finance operations and saved us countless hours."
                </p>
                <div>
                  <p className="font-bold text-gray-900">Emma Rodriguez</p>
                  <p className="text-gray-600 text-sm">Treasurer, Horizon Healthcare Group</p>
                </div>
              </motion.div>
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Take Your Business Further?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that trust GlobalBank with their financial success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/register"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Open a Business Account
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  Contact a Business Specialist
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}