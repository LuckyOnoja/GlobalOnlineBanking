"use client";
// pages/investments.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  PieChart,
  BarChart,
  Shield,
  ArrowRight,
  Target,
  Briefcase,
  AlertCircle,
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

export default function InvestmentsPage() {
  // State for investment calculator
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(7);

  // Calculate future value
  const calculateFutureValue = () => {
    return (investmentAmount * Math.pow(1 + rate / 100, years)).toFixed(2);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <Head>
          <title>Investment Services | GlobalBank</title>
          <meta
            name="description"
            content="Investment solutions to grow your wealth"
          />
        </Head>

        {/* Header component would be here */}

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
                Invest With Confidence
              </h1>
              <p className="text-xl mb-8">
                Expert guidance and diversified investment solutions to help you
                build and protect your wealth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/register"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Start Investing
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

        {/* Investment Solutions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Investment Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From retirement planning to active trading, we offer investment
                options designed to meet your financial goals.
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
                    <PieChart className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Managed Portfolios
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professionally managed investment portfolios tailored to
                    your risk tolerance and goals.
                  </p>
                  <Link
                    href="/investments/managed-portfolios"
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
                    <Target className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Retirement Planning
                  </h3>
                  <p className="text-gray-600 mb-4">
                    IRAs, 401(k) rollovers, and retirement income strategies to
                    secure your future.
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

              {/* Card 3 */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Self-Directed Trading
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Tools and platforms for active investors, with competitive
                    commissions and research.
                  </p>
                  <Link
                    href="/register"
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

        {/* Investment Calculator */}
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
                  Calculate Your Investment Growth
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  See how your investments could grow over time with our simple
                  calculator.
                </p>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="investment-amount"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Initial Investment
                    </label>
                    <input
                      type="range"
                      id="investment-amount"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={investmentAmount}
                      onChange={(e) =>
                        setInvestmentAmount(parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <p className="mt-2 text-lg font-medium text-blue-700">
                      ${investmentAmount.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="investment-years"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Time Period (Years)
                    </label>
                    <input
                      type="range"
                      id="investment-years"
                      min="1"
                      max="30"
                      value={years}
                      onChange={(e) => setYears(parseInt(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <p className="mt-2 text-lg font-medium text-blue-700">
                      {years} years
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="investment-rate"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Expected Annual Return (%)
                    </label>
                    <input
                      type="range"
                      id="investment-rate"
                      min="1"
                      max="15"
                      step="0.5"
                      value={rate}
                      onChange={(e) => setRate(parseFloat(e.target.value))}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <p className="mt-2 text-lg font-medium text-blue-700">
                      {rate}%
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Potential Future Value
                  </h3>
                  <p className="text-4xl font-bold text-blue-700 mb-6">
                    $
                    {calculateFutureValue().replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </p>
                  <p className="text-gray-600 mb-6">
                    This calculation is for illustrative purposes only and does
                    not guarantee future returns.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300"
                  >
                    Discuss with an Advisor
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Invest With GlobalBank
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine global expertise with personalized service to help
                you achieve your investment goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Advisors
                </h3>
                <p className="text-gray-600">
                  Certified financial professionals with years of experience.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Wealth Protection
                </h3>
                <p className="text-gray-600">
                  Strategies to protect and preserve your assets for
                  generations.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Risk Management
                </h3>
                <p className="text-gray-600">
                  Personalized strategies aligned with your risk tolerance.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Long-term Planning
                </h3>
                <p className="text-gray-600">
                  Comprehensive strategies for all life stages and goals.
                </p>
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
              <h2 className="text-3xl font-bold mb-6">
                Take the Next Step in Your Investment Journey
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Schedule a consultation with one of our investment specialists
                to create your personalized investment plan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/register"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Start Investing
                </Link>
                <Link
                  href="/register"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
