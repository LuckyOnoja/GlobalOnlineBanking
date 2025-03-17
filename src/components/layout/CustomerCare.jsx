import React, { useState } from "react";
import { MessageCircle, X, ChevronRight, ChevronLeft, HelpCircle } from "lucide-react";

// Main Customer Care Modal Component
const CustomerCareModal = ({ isOpen, onClose }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showingResponse, setShowingResponse] = useState(false);

  // Pre-defined support questions and answers
  const supportQuestions = [
    {
      id: 1,
      question: "Why was my transaction declined?",
      answer: "Transactions may be declined for several reasons including insufficient funds, suspicious activity detected, incorrect account information, or technical issues with our payment processor. If this is a recurring issue, please ensure your account details are up to date and your balance is sufficient for the transaction amount."
    },
    {
      id: 2,
      question: "How do I update my account information?",
      answer: "To update your account information, go to your Account Settings page and select the 'Personal Details' section. From there, you can modify your personal information, contact details, and preferences. Don't forget to click 'Save Changes' when you're finished. Please note that some changes may require additional verification."
    },
    {
      id: 3,
      question: "When will my transfer be completed?",
      answer: "Most transfers are processed within 1-2 business days. However, international transfers may take 3-5 business days depending on the destination country and banking system. If your transfer has been pending for longer than expected, please wait one more business day before contacting us again."
    },
    {
      id: 4,
      question: "How do I report unauthorized transactions?",
      answer: "If you notice any unauthorized transactions on your account, please contact our security team immediately by calling our 24/7 hotline at +1-800-555-0123. For your protection, we recommend changing your password and enabling two-factor authentication on your account."
    },
    {
      id: 5,
      question: "What are the transfer limits?",
      answer: "Standard accounts have a daily transfer limit of €10,000 and a monthly limit of €50,000. Premium accounts have higher limits of €25,000 daily and €100,000 monthly. If you need to make a larger transfer, please contact our customer service team to request a temporary limit increase."
    },
    {
      id: 6,
      question: "I forgot my password, what should I do?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. We'll send a password reset link to your registered email address. For security reasons, this link will expire after 24 hours. If you don't receive the email, please check your spam folder or contact customer support."
    }
  ];

  const handleSelectQuestion = (questionId) => {
    setSelectedQuestion(questionId);
    setShowingResponse(true);
  };

  const handleBack = () => {
    setShowingResponse(false);
  };

  const handleCallSupport = () => {
    window.location.href = "tel:+1234567890"; // Replace with the actual phone number if available
  };

  const handleEmailSupport = () => {
    window.location.href = "mailto:sglobalis35@gmail.com";
  };

  if (!isOpen) return null;

  const selectedQuestionData = supportQuestions.find(q => q.id === selectedQuestion);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center">
            <MessageCircle className="text-blue-600 mr-2" size={20} />
            <h2 className="text-lg font-semibold text-gray-800">Customer Support</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {!showingResponse ? (
            <div className="p-4">
              <h3 className="text-sm text-gray-500 mb-4">Select a question to get help:</h3>
              <div className="space-y-2">
                {supportQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleSelectQuestion(q.id)}
                    className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span className="text-gray-800">{q.question}</span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4">
              <button 
                onClick={handleBack}
                className="flex items-center text-blue-600 mb-4"
              >
                <ChevronLeft size={16} className="mr-1" />
                <span>Back to questions</span>
              </button>
              
              <h3 className="font-medium text-gray-900 mb-2">{selectedQuestionData?.question}</h3>
              <p className="text-gray-700">{selectedQuestionData?.answer}</p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700">
                  Still need help? Our support team is available 24/7.
                </p>
                <div className="mt-2 flex space-x-3">
                  <button 
                    onClick={handleCallSupport}
                    className="px-3 py-2 text-xs font-medium bg-blue-600 text-white rounded"
                  >
                    Call Support
                  </button>
                  <button 
                    onClick={handleEmailSupport}
                    className="px-3 py-2 text-xs font-medium border border-blue-600 text-blue-600 rounded"
                  >
                    Email Support
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Floating Support Button Component
const FloatingCustomerCareButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors z-40"
        aria-label="Customer Support"
      >
        <HelpCircle size={24} />
      </button>
      
      <CustomerCareModal 
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export { FloatingCustomerCareButton, CustomerCareModal };