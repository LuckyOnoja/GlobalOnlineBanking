import { useState } from "react";
import axios from "axios";

export default function PropeneerTransferForm({ setTransactions }) {
  const SERVER_NAME = process.env.NEXT_PUBLIC_SERVER_NAME;
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [receiver, setReceiver] = useState(null); 

  // Get token from localStorage (either adminToken or token)
  const getAuthToken = () => {
    return localStorage.getItem("adminToken") || localStorage.getItem("token");
  };

  // Search for user by account number
  const searchUser = async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        setError("Authentication token not found. Please log in.");
        return;
      }

      const res = await axios.get(
        `${SERVER_NAME}user/search/${accountNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReceiver(res.data.user); // Set receiver details
      setError("");
    } catch (error) {
      setReceiver(null);
      setError(error.response?.data?.message || "Account not found");
    }
  };

  // Handle transfer
  const handleTransfer = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = getAuthToken();
      if (!token) {
        setError("Authentication token not found. Please log in.");
        return;
      }

      const res = await axios.post(
        `${SERVER_NAME}transactions/transfer`,
        {receiverAccountNumber: accountNumber, amount: parseFloat(amount) },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Transfer initiated successfully!");
      setTransactions((prev) => [res.data.transaction, ...prev]); // Add new transaction
      setAccountNumber("");
      setAmount("");
      setReceiver(null); // Reset receiver
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleTransfer} className="mb-8">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Initiate Transfer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Receiver's Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            onBlur={searchUser} // Search when user leaves the input
            className="p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          {receiver && (
            <p className="text-sm text-green-600 mt-2">
              Receiver: {receiver.firstName} {receiver.lastName}
            </p>
          )}
        </div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          required
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        disabled={!receiver} // Disable button if no receiver is found
      >
        Transfer
      </button>
    </form>
  );
}