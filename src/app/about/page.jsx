"use client";
// pages/about.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Heart,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  Calendar,
  ArrowRight,
  MapPin,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import MainLayout from "../../components/layout/MainLayout";
import WorldMap from "../../components/ui/globalMap";

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

export default function AboutPage() {
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
                Building A Better Financial Future Together
              </h1>
              <p className="text-xl mb-8">
                Since 1985, GlobalBank has been a trusted partner helping
                individuals and businesses achieve their financial goals through
                innovation, integrity, and excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Meet Our Team
                </Link>
                <Link
                  href="/register"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  Join Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  GlobalBank was founded in 1985 with a simple mission: to
                  provide accessible, transparent financial services that
                  empower people and businesses to achieve their goals.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What started as a small regional bank has grown into a global
                  financial institution serving millions of customers across 45
                  countries. Throughout our journey, we've remained committed to
                  our founding principles of trust, innovation, and
                  customer-centricity.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we combine cutting-edge technology with personalized
                  service to deliver financial solutions that meet the evolving
                  needs of our diverse customer base. Whether you're saving for
                  your first home, expanding your business internationally, or
                  planning for retirement, we're here to help you navigate your
                  financial journey.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative bg-blue-100 rounded-2xl p-6 h-full">
                  <div className="absolute -right-4 -top-4 bg-blue-500 w-40 h-40 rounded-full opacity-20"></div>
                  <div className="absolute -left-8 -bottom-8 bg-blue-300 w-60 h-60 rounded-full opacity-20"></div>
                  <div className="relative z-10 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-700 mb-2">
                          45+
                        </h3>
                        <p className="text-gray-700">Countries</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-700 mb-2">
                          40M+
                        </h3>
                        <p className="text-gray-700">Customers</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-700 mb-2">
                          15K+
                        </h3>
                        <p className="text-gray-700">Employees</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold text-blue-700 mb-2">
                          $2T+
                        </h3>
                        <p className="text-gray-700">Assets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do, from developing new
                products to serving our customers.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Customer First
                </h3>
                <p className="text-gray-600">
                  Our customers are at the center of everything we do. We
                  listen, understand, and deliver solutions that meet their
                  unique needs.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical standards
                  that earn our customers' trust every day.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We embrace change and continuously seek new ways to improve
                  our services and create value for our customers.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Community
                </h3>
                <p className="text-gray-600">
                  We are committed to making a positive impact in the
                  communities we serve through sustainable practices and
                  initiatives.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals guiding our vision and
                strategy.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {/* CEO */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 bg-gray-200">
                  {/* Placeholder for executive image */}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Sarah Mitchell
                  </h3>
                  <p className="text-blue-700 mb-4">Chief Executive Officer</p>
                  <p className="text-gray-600 text-sm">
                    25+ years of banking experience with a focus on digital
                    transformation and global markets.
                  </p>
                </div>
              </motion.div>

              {/* CFO */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 bg-gray-200">
                  {/* Placeholder for executive image */}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Michael Wong
                  </h3>
                  <p className="text-blue-700 mb-4">Chief Financial Officer</p>
                  <p className="text-gray-600 text-sm">
                    Former investment banker with expertise in financial
                    strategy and sustainable growth.
                  </p>
                </div>
              </motion.div>

              {/* CTO */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 bg-gray-200">
                  {/* Placeholder for executive image */}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Aisha Johnson
                  </h3>
                  <p className="text-blue-700 mb-4">Chief Technology Officer</p>
                  <p className="text-gray-600 text-sm">
                    Tech innovator leading our digital banking platforms and
                    cybersecurity initiatives.
                  </p>
                </div>
              </motion.div>

              {/* COO */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 bg-gray-200">
                  {/* Placeholder for executive image */}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Carlos Rodriguez
                  </h3>
                  <p className="text-blue-700 mb-4">Chief Operations Officer</p>
                  <p className="text-gray-600 text-sm">
                    Operations expert focused on efficiency, customer
                    experience, and global expansion.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="text-center mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors duration-300"
              >
                View the complete leadership team{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Global Presence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Serving customers across 45 countries with local expertise and
                global capabilities.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative bg-white rounded-xl shadow-md p-6 h-96"
            >
              {/* This would be replaced with an actual map component */}
              <div className="w-full h-full bg-blue-50 rounded-lg flex items-center justify-center">
                <WorldMap />
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
            >
              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Americas</h3>
                    <p className="text-gray-600 text-sm">
                      Headquarters in New York with regional offices in Toronto,
                      Chicago, San Francisco, Mexico City, São Paulo, and Buenos
                      Aires.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Europe & Middle East
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Major hubs in London, Frankfurt, Paris, Zurich, Dubai, and
                      Abu Dhabi serving the EMEA region.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Asia Pacific
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Regional headquarters in Singapore with key locations in
                      Tokyo, Hong Kong, Shanghai, Sydney, and Mumbai.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Sustainability */}
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
                  Our Commitment to Sustainability
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At GlobalBank, we believe financial institutions play a vital
                  role in creating a more sustainable future. Our comprehensive
                  sustainability strategy focuses on environmental stewardship,
                  social responsibility, and ethical governance.
                </p>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Environmental Impact
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Committed to carbon neutrality by 2030 and funding $50B
                        in sustainable projects over the next decade.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Community Investment
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Investing $100M annually in financial education,
                        affordable housing, and economic development.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-blue-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        Responsible Banking
                      </h4>
                      <p className="mt-1 text-gray-600">
                        Integrating ESG criteria into our lending and investment
                        decisions to promote sustainable business practices.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
                >
                  View Our Sustainability Report
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <div className="relative bg-blue-100 rounded-2xl p-6 h-full">
                  <div className="absolute -right-4 -top-4 bg-blue-500 w-40 h-40 rounded-full opacity-20"></div>
                  <div className="absolute -left-8 -bottom-8 bg-blue-300 w-60 h-60 rounded-full opacity-20"></div>
                  <div className="relative z-10 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      2024 Sustainability Highlights
                    </h3>
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                            <TrendingUp className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">$12B+</h4>
                            <p className="text-sm text-gray-600">
                              In sustainable financing
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                            <Users className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">2.5M+</h4>
                            <p className="text-sm text-gray-600">
                              People reached through financial education
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                            <Heart className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">300K+</h4>
                            <p className="text-sm text-gray-600">
                              Volunteer hours by our employees
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Recognition & Awards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized by industry
                leaders and organizations worldwide.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <Award className="h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Best Global Bank 2024
                </h3>
                <p className="text-gray-600 text-sm">
                  Financial Times Banking Awards
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <Award className="h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Most Innovative Digital Bank
                </h3>
                <p className="text-gray-600 text-sm">Global Finance Magazine</p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <Award className="h-12 w-12 text-blue-700 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Excellence in Sustainable Finance
                </h3>
                <p className="text-gray-600 text-sm">World Economic Forum</p>
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
              <h2 className="text-3xl font-bold mb-6">
                Join the GlobalBank Family
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Whether you're looking for a banking partner or a career
                opportunity, we invite you to be part of our journey to
                transform the future of finance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/register"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Become a Customer
                </Link>
                <Link
                  href="/register"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  Explore Careers
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
