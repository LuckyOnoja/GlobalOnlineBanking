// app/page.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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

  return (
    <MainLayout>
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/hero.jpeg')",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-primary-900/70 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            className="w-full"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              <span className="block">Global Online Banking</span>
              <span className="text-primary-300">Reimagined</span> for the
              Digital Age
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl"
              variants={fadeInUp}
            >
              Experience seamless, secure, and innovative banking solutions
              designed to meet your financial needs in our increasingly
              connected world.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              variants={fadeInUp}
            >
              <Link href="/register">
                <Button
                  variant="primary"
                  className="text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Now
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="secondary"
                  className="text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  Existing Customer Login
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Features Section with Animated Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose Global Online Banking?
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of banking today with our innovative digital
              platform
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                title: "Advanced Security",
                description:
                  "Bank with confidence using our state-of-the-art security protocols, biometric authentication, and end-to-end encryption. Your financial data is protected 24/7.",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Global Instant Transfers",
                description:
                  "Send money instantly to anyone, anywhere in the world, without unnecessary fees or delays. Enjoy competitive exchange rates and real-time transaction confirmation.",
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "AI-Powered Analytics",
                description:
                  "Track your spending, visualize your financial health, and receive personalized insights using our advanced AI analytics platform. Make smarter financial decisions every day.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <motion.div
                  className="bg-primary-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Digital Banking Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Comprehensive Digital Services
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for modern banking, all in one platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                className="bg-blue-50 p-2 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <MobileBankingAnimation/>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Mobile-First Banking Experience
              </h3>

              <ul className="space-y-6">
                {[
                  {
                    title: "Seamless Account Management",
                    description:
                      "Manage all your accounts, cards, and investments from a single intuitive dashboard.",
                  },
                  {
                    title: "Smart Budgeting Tools",
                    description:
                      "Set financial goals, create custom budgets, and receive automated insights to stay on track.",
                  },
                  {
                    title: "Contactless Payments",
                    description:
                      "Make secure payments with your phone, smartwatch, or contactless card worldwide.",
                  },
                  {
                    title: "Investment Portfolio",
                    description:
                      "Access global markets, stocks, ETFs, and cryptocurrency trading with low fees.",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="bg-primary-100 text-primary-600 p-2 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="text-lg px-6 py-3 flex items-center gap-2"
                  >
                    <span>Explore All Services</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Sliding Animation */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers worldwide
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Become a Propeneer Banner with Animated Background */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-primary-600"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800"
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Become a Propeneer Today
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
              Join our exclusive network of banking professionals and unlock
              premium features, personalized wealth management, dedicated
              advisors, and global investment opportunities.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/join">
                <Button
                  variant="secondary"
                  className="text-primary-600 bg-white hover:bg-gray-100 text-lg font-semibold px-10 py-5 rounded-full shadow-xl"
                >
                  Learn More About Propeneer Benefits
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated particles */}
        <ParticleBackground />
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Global Presence, Local Expertise
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Banking without borders, accessible whenever and wherever you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Banking Without Boundaries
              </h3>
              <p className="text-gray-600 mb-8">
                Global Online Banking operates in over 100 countries, providing
                seamless financial services across borders. Our international
                network ensures you can access your money and services no matter
                where life takes you.
              </p>

              <ul className="space-y-6">
                {[
                  {
                    title: "24/7 Global Support",
                    description:
                      "Access our multilingual support team anytime, anywhere through chat, call, or video conference.",
                  },
                  {
                    title: "Multi-Currency Accounts",
                    description:
                      "Hold, exchange, and manage multiple currencies with real-time exchange rates and minimal fees.",
                  },
                  {
                    title: "International Banking Network",
                    description:
                      "Enjoy fee-free ATM withdrawals and banking services through our partner network worldwide.",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="bg-primary-100 text-primary-600 p-2 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                className="bg-blue-50 p-2 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <WorldMapAnimation />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl font-bold mb-8">
              Ready to Transform Your Banking Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join Global Online Banking today and experience banking reimagined
              for the digital age. Opening an account takes less than 10
              minutes.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/join">
                  <Button
                    variant="primary"
                    className="text-lg px-10 py-5 rounded-full shadow-xl w-full sm:w-auto"
                  >
                    Open Account
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/demo">
                  <Button
                    variant="outline"
                    className="text-lg px-10 py-5 rounded-full border-2 w-full sm:w-auto"
                  >
                    Request Demo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

// Testimonial Slider Component
function TestimonialSlider() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "/testimonials/SarahJohnson.jpg",
      content:
        "Global Online Banking has transformed how I manage my business finances. The real-time analytics and seamless international transfers have saved me countless hours and reduced costs significantly.",
    },
    {
      name: "Michael Damian",
      role: "Digital Nomad",
      image: "/testimonials/MichaelDamian.jpg",
      content:
        "As someone who works from a different country every month, having Global Online Banking has been life-changing. Their multi-currency accounts and zero foreign transaction fees are unmatched.",
    },
    {
      name: "Elena Rodriguez",
      role: "Propeneer Member",
      image: "/testimonials/ElenaRodriguez.jpg",
      content:
        "The Propeneer program is worth every penny. My dedicated financial advisor has helped me increase my investment returns by 27% in just one year. The exclusive events are invaluable for networking.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden pb-12">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="min-w-full px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: index === current ? 1 : 0.5,
              scale: index === current ? 1 : 0.95,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-primary-100 shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/100x100?text=${testimonial.name.charAt(
                        0
                      )}`;
                    }}
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-600 font-medium">
                    {testimonial.role}
                  </p>
                  <div className="flex justify-center md:justify-start mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-lg italic">
                "{testimonial.content}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary-600 w-10" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on the client
    const generatedParticles = [...Array(30)].map((_, i) => {
      const size = Math.floor(Math.random() * 6) + 2;
      const duration = Math.floor(Math.random() * 20) + 10;
      const delay = Math.floor(Math.random() * 10);
      const initialX = Math.floor(Math.random() * 100);
      const initialY = Math.floor(Math.random() * 100);

      return {
        key: i,
        size,
        duration,
        delay,
        initialX,
        initialY,
      };
    });

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.key}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [0, -300, 0],
            x: [0, Math.random() > 0.5 ? 100 : -100, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function MobileBankingAnimation() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Seamless Account Management",
      description:
        "Manage all your accounts, cards, and investments from a single intuitive dashboard.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
      color: "#6366F1", // Indigo
    },
    {
      title: "Smart Budgeting Tools",
      description:
        "Set financial goals, create custom budgets, and receive automated insights to stay on track.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 0v1m0-1H9m3 0h3m-3 0H9m3 0h3m-3 0H9m3 0h3M3 12h18M3 6h18M3 18h18"
          />
        </svg>
      ),
      color: "#10B981", // Emerald
    },
    {
      title: "Contactless Payments",
      description:
        "Make secure payments with your phone, smartwatch, or contactless card worldwide.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      color: "#EF4444", // Red
    },
    {
      title: "Investment Portfolio",
      description:
        "Access global markets, stocks, ETFs, and cryptocurrency trading with low fees.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 0v1m0-1H9m3 0h3m-3 0H9m3 0h3m-3 0H9m3 0h3M3 12h18M3 6h18M3 18h18"
          />
        </svg>
      ),
      color: "#F59E0B", // Amber
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000); // Change feature every 5 seconds
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden">
      {/* Background Animation (Behind the Cards) */}
   

      {/* Feature Cards (Above the Background) */}
      <div className="relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{
              opacity: activeFeature === index ? 1 : 0,
              y: activeFeature === index ? 0 : 20,
              scale: activeFeature === index ? 1 : 0.9,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl min-w-[25vw] text-center border border-gray-100">
              <div
                className="mx-auto mb-6 p-4 rounded-full bg-opacity-20"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 flex space-x-2 z-20">
        {features.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeFeature === index
                ? "bg-indigo-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setActiveFeature(index)}
          />
        ))}
      </div>
    </div>
  );
}


// World Map Animation Component
function WorldMapAnimation() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Generate or fetch locations on the client
    const generatedLocations = [
      { id: 1, x: 25, y: 30, label: "New York" },
      { id: 2, x: 48, y: 25, label: "London" },
      { id: 3, x: 55, y: 35, label: "Dubai" },
      { id: 4, x: 75, y: 32, label: "Tokyo" },
      { id: 5, x: 40, y: 65, label: "Sydney" },
      { id: 6, x: 35, y: 45, label: "Lagos" },
      { id: 7, x: 60, y: 45, label: "Mumbai" },
      { id: 8, x: 20, y: 55, label: "São Paulo" },
    ];

    setLocations(generatedLocations);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* World Map SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 500"
        className="w-full h-full opacity-70"
      >
        <path
          d="M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l0.5,3.35l-3.95,5.18l-6.29,0.86l4.62-4.77l-2.2-4.38
          l-4.29-1.25l-3.6-0.14l-5.14,0.54l-6.72-2.57l-3.44-5.27l-12.25-2.47l-5.59-3.3l-0.64-3.05l-3.04-1.37l-0.14-2.01
          l-5.05-5.86l-0.64-7.41l-3.73-5.43l2.93-4.8l59.26,0l5.27,5.43l7.13,7.3l6.86,11.86L781.68,324.4z"
          stroke="#000000"
          fill="#A4C7F2"
        />
      </svg>

      {/* Location Dots and Connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Connection Lines */}
        {locations.map((location, index) => (
          <g key={`line-${location.id}`}>
            {locations.slice(index + 1).map((targetLoc) => (
              <motion.path
                key={`line-${location.id}-${targetLoc.id}`}
                d={`M${location.x},${location.y} Q${
                  (location.x + targetLoc.x) / 2
                },${Math.min(location.y, targetLoc.y) - 10} ${targetLoc.x},${
                  targetLoc.y
                }`}
                fill="none"
                stroke="#4F46E5"
                strokeWidth="0.2"
                strokeDasharray="1,1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: [0, 0.5, 0],
                  strokeWidth: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </g>
        ))}

        {/* Location Dots */}
        {locations.map((location) => (
          <g key={`loc-${location.id}`}>
            <motion.circle
              cx={location.x}
              cy={location.y}
              r="1.2"
              fill="#4F46E5"
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.circle
              cx={location.x}
              cy={location.y}
              r="0.6"
              fill="#FFFFFF"
            />
            <motion.text
              x={location.x}
              y={location.y - 2}
              fontSize="2"
              textAnchor="middle"
              fill="#1E3A8A"
              fontWeight="bold"
              initial={{ opacity: 0, y: 1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {location.label}
            </motion.text>
          </g>
        ))}

        {/* Pulsing Global Network Effect */}
        {locations.map((location) => (
          <motion.circle
            key={`pulse-${location.id}`}
            cx={location.x}
            cy={location.y}
            r="0.5"
            fill="none"
            stroke="#4F46E5"
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: 10,
              opacity: 0,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: location.id * 0.7,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-2 right-2 bg-white/80 p-2 rounded-lg text-xs">
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-primary-600 mr-2"></div>
          <span>Global Banking Centers</span>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-0.5 bg-primary-600 mr-2 opacity-50"></div>
          <span>Secure Network</span>
        </div>
      </div>
    </div>
  );
}
