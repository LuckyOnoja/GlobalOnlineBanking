import { useState } from "react";
import { FaCopy } from "react-icons/fa"; 

export default function TransactionTable({ transactions }) {
  const [copiedId, setCopiedId] = useState(null);

  // Function to copy the transaction ID
  const copyToClipboard = (id) => {
    navigator.clipboard
      .writeText(id)
      .then(() => {
        setCopiedId(id); // Set the copied ID
        setTimeout(() => setCopiedId(null), 2000); 
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Transaction History</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">No transactions yet.</p>
      ) : (
        <table className="min-w-full bg-white border border-blue-200 rounded-lg">
          <thead>
            <tr className="bg-blue-50">
              <th className="py-3 px-4 text-left text-blue-600">Transaction ID</th>
              <th className="py-3 px-4 text-left text-blue-600">Receiver</th>
              <th className="py-3 px-4 text-left text-blue-600">Amount</th>
              <th className="py-3 px-4 text-left text-blue-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn._id} className="hover:bg-blue-50 transition-colors">
                <td className="py-3 px-4 border-b flex items-center gap-2">
                  <span>{txn._id}</span>
                  <button
                    onClick={() => copyToClipboard(txn._id)}
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                    title="Copy Transaction ID"
                  >
                    <FaCopy className="inline-block" />
                  </button>
                  {copiedId === txn._id && (
                    <span className="text-sm text-green-500">Copied!</span>
                  )}
                </td>
                <td className="py-3 px-4 border-b">
                  {txn.receiver.firstName} {txn.receiver.lastName}
                </td>
                <td className="py-3 px-4 border-b">${(txn.amount || 0).toLocaleString()}</td>
                <td className="py-3 px-4 border-b">
                  <span
                    className={`${
                      txn.status === "Pending"
                        ? "text-yellow-500"
                        : txn.status === "Completed"
                        ? "text-green-500"
                        : "text-red-500"
                    } capitalize`}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}