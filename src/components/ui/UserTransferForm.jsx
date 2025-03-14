import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const UserTransferForm = ({ userData, onComplete }) => {
  const [formData, setFormData] = useState({
    accountNumber: "",
    recipientName: "",
    amount: "",
    description: "",
    currency: "EUR",
  });

  const [formState, setFormState] = useState({
    status: "idle", // idle, loading, success, error
    errorMessage: "",
    isValidating: false,
  });

  const validateAmount = (value) => {
    const numValue = parseFloat(value);
    return !isNaN(numValue) && numValue > 0 && numValue <= 10000;
  };

  const validateAccountNumber = (value) => {
    // Basic validation - should be enhanced for production
    return value.length >= 10 && /^[0-9\s]+$/.test(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateAccountNumber(formData.accountNumber)) {
      setFormState({
        ...formState,
        status: "error",
        errorMessage: "Please enter a valid account number",
      });
      return;
    }

    if (!validateAmount(formData.amount)) {
      setFormState({
        ...formState,
        status: "error",
        errorMessage: "Amount must be between 0.01 and 10,000",
      });
      return;
    }

    // Check if user has sufficient balance
    const transferAmount = parseFloat(formData.amount);
    if (transferAmount > userData.balance) {
      setFormState({
        ...formState,
        status: "error",
        errorMessage: "Insufficient balance. Please enter a lower amount.",
      });
      return;
    }

    // Submit form
    setFormState({ ...formState, status: "loading" });

    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Always show the failure message
      setFormState({
        ...formState,
        status: "error",
        errorMessage: "Couldn't process transaction. Please contact customer care.",
      });
      
    } catch (error) {
      setFormState({
        ...formState,
        status: "error",
        errorMessage: "Transfer failed. Please try again later.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Recipient Details */}
      <div className="space-y-4 mb-6">
        <div>
          <label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            placeholder="Enter account number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="recipientName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recipient Name
          </label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleInputChange}
            placeholder="Enter recipient name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Transfer Details */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500">€</span>
              </div>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="0.00"
                min="0.01"
                max="10000"
                step="0.01"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Available balance: {formData.currency} {userData.balance.toFixed(2)}
            </p>
          </div>
          <div className="w-24">
            <label
              htmlFor="currency"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
              className="w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description (Optional)
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="What's this transfer for?"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Error Message */}
      {formState.status === "error" && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
          <AlertCircle
            size={18}
            className="text-red-500 mt-0.5 flex-shrink-0"
          />
          <p className="text-sm text-red-700">{formState.errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={formState.status === "loading"}
          className={`px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 ${
            formState.status === "loading"
              ? "opacity-70 cursor-not-allowed"
              : ""
          }`}
        >
          {formState.status === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              Transfer Funds <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default UserTransferForm;