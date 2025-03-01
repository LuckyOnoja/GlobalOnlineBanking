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
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email.",
    },
    {
      question: "How do I update my account information?",
      answer:
        "You can update your account information by navigating to the 'Profile' section in your dashboard.",
    },
    {
      question: "What should I do if I suspect fraudulent activity?",
      answer:
        "Immediately contact our support team at support@globalbank.com or call our helpline at +1 (555) 123-4567.",
    },
    {
      question: "How do I add a new recipient for transfers?",
      answer:
        "Go to the 'Transfers' section and click on 'Add Recipient'. Fill in the required details and save.",
    },
  ];

  // Toggle FAQ answer visibility
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
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
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-600" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Email Support
                    </h3>
                    <p className="text-sm text-gray-600">
                      support@globalbank.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Support */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-600" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Phone Support
                    </h3>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
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
