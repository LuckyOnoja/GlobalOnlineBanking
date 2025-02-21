import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const UserTransferForm = ({ onComplete, quickAccounts = [] }) => {
  const [formData, setFormData] = useState({
    recipientType: "saved", // saved or new
    recipientId: quickAccounts.length > 0 ? 0 : "",
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
    
    if (name === "recipientType" && value === "saved") {
      setFormData({
        ...formData,
        [name]: value,
        recipientId: quickAccounts.length > 0 ? 0 : "",
        accountNumber: "",
        recipientName: "",
      });
    } else if (name === "recipientId" && value !== "") {
      const selectedAccount = quickAccounts[parseInt(value)];
      setFormData({
        ...formData,
        [name]: value,
        recipientName: selectedAccount.name,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (formData.recipientType === "new" && !validateAccountNumber(formData.accountNumber)) {
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
    
    // Submit form
    setFormState({ ...formState, status: "loading" });
    
    try {
      // In real implementation, you would call your API here
      // const response = await fetch('/api/transfers', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success state
      setFormState({ ...formState, status: "success" });
      
      // Reset form after success
      setTimeout(() => {
        onComplete && onComplete();
      }, 2000);
      
    } catch (error) {
      setFormState({
        ...formState,
        status: "error",
        errorMessage: "Transfer failed. Please try again later.",
      });
    }
  };
  
  // Render success state
  if (formState.status === "success") {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-4">
          <CheckCircle size={64} className="text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Transfer Successful!</h3>
        <p className="text-gray-600 mb-6">
          You've transferred {formData.currency} {parseFloat(formData.amount).toFixed(2)} to{" "}
          {formData.recipientType === "saved" 
            ? quickAccounts[parseInt(formData.recipientId)].name 
            : formData.recipientName}
        </p>
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Recipient Selection */}
      <div className="mb-6">
        <div className="flex border border-gray-200 rounded-lg overflow-hidden mb-4">
          <button
            type="button"
            className={`flex-1 py-2 text-center text-sm font-medium ${
              formData.recipientType === "saved"
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => handleInputChange({ target: { name: "recipientType", value: "saved" } })}
          >
            Saved Recipients
          </button>
          <button
            type="button"
            className={`flex-1 py-2 text-center text-sm font-medium ${
              formData.recipientType === "new"
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => handleInputChange({ target: { name: "recipientType", value: "new" } })}
          >
            New Recipient
          </button>
        </div>

        {formData.recipientType === "saved" ? (
          <div>
            {quickAccounts.length > 0 ? (
              <div className="space-y-2">
                {quickAccounts.map((account, index) => (
                  <label
                    key={index}
                    className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer ${
                      parseInt(formData.recipientId) === index
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="recipientId"
                        value={index}
                        checked={parseInt(formData.recipientId) === index}
                        onChange={handleInputChange}
                        className="accent-blue-600"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{account.name}</p>
                        <p className="text-xs text-gray-500">{account.accountNumber}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">Last: {account.lastTransfer}</span>
                  </label>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 border border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500 mb-2">No saved recipients found</p>
                <button
                  type="button"
                  className="text-blue-600 text-sm font-medium"
                  onClick={() => handleInputChange({ target: { name: "recipientType", value: "new" } })}
                >
                  Add a new recipient
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
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
              <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-1">
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
        )}
      </div>

      {/* Transfer Details */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
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
          </div>
          <div className="w-24">
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
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
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
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
          <AlertCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-700">{formState.errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={formState.status === "loading"}
          className={`px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 ${
            formState.status === "loading" ? "opacity-70 cursor-not-allowed" : ""
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