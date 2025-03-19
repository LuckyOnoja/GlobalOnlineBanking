"use client";
import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";

export default function HelpPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "Why was my transaction declined?",
      answer:
        "Transactions may be declined for several reasons including insufficient funds, suspicious activity detected, incorrect account information, or technical issues with our payment processor. If this is a recurring issue, please ensure your account details are up to date and your balance is sufficient for the transaction amount.",
    },
    {
      id: 2,
      question: "How do I update my account information?",
      answer:
        "To update your account information, go to your Account Settings page and select the 'Personal Details' section. From there, you can modify your personal information, contact details, and preferences. Don't forget to click 'Save Changes' when you're finished. Please note that some changes may require additional verification.",
    },
    {
      id: 3,
      question: "When will my transfer be completed?",
      answer:
        "Most transfers are processed within 1-2 business days. However, international transfers may take 3-5 business days depending on the destination country and banking system. If your transfer has been pending for longer than expected, please wait one more business day before contacting us again.",
    },
    {
      id: 4,
      question: "How do I report unauthorized transactions?",
      answer:
        "If you notice any unauthorized transactions on your account, please contact our security team immediately by calling our 24/7 hotline at +1-800-555-0123. For your protection, we recommend changing your password and enabling two-factor authentication on your account.",
    },
    {
      id: 5,
      question: "What are the transfer limits?",
      answer:
        "Standard accounts have a daily transfer limit of €10,000 and a monthly limit of €50,000. Premium accounts have higher limits of €25,000 daily and €100,000 monthly. If you need to make a larger transfer, please contact our customer service team to request a temporary limit increase.",
    },
    {
      id: 6,
      question: "I forgot my password, what should I do?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. We'll send a password reset link to your registered email address. For security reasons, this link will expire after 24 hours. If you don't receive the email, please check your spam folder or contact customer support.",
    },
  ];

  // Toggle FAQ answer visibility
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleEmailSupport = () => {
    window.location.href = "mailto:sglobalis35@gmail.com";
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col ">
        {/* Help Section */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 m-6">
          {/* Back Button */}
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium mb-6"
          >
            <ArrowLeft size={16} />
            <span>Back to Dashboard</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Help Center</h1>

          {/* FAQs Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {faq.question}
                    </span>
                    {openFaqIndex === index ? (
                      <ChevronUp size={16} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={16} className="text-gray-500" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Support */}
              <div
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-400"
                onClick={handleEmailSupport}
              >
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-600" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 ">
                      Email Support
                    </h3>
                  </div>
                </div>
              </div>

              {/* Phone Support */}
              <div
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-400"
                onClick={handleEmailSupport}
              >
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-600" />
                  <div>
                    <h3
                      className="text-sm font-medium text-gray-900"
                    >
                      Phone Support
                    </h3>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-400"
                onClick={handleEmailSupport}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-blue-600" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Live Chat
                    </h3>
                    <p className="text-sm text-gray-600">
                      Available 24/7 on the app
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
