import { useState } from "react";
import { Copy, CheckCircle, Filter, ChevronDown, ChevronUp } from "lucide-react";

export default function TransactionTable({ transactions }) {
  const [copiedId, setCopiedId] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [expandedRow, setExpandedRow] = useState(null);

  // Function to copy the transaction ID
  const copyToClipboard = (id) => {
    navigator.clipboard
      .writeText(id)
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  // Function to handle sorting
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Function to toggle row expansion for mobile view
  const toggleRowExpansion = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // Get sorted transactions
  const getSortedTransactions = () => {
    const sortableTransactions = [...transactions];
    if (sortConfig.key) {
      sortableTransactions.sort((a, b) => {
        if (sortConfig.key === 'receiver') {
          const nameA = `${a.receiver.firstName} ${a.receiver.lastName}`.toLowerCase();
          const nameB = `${b.receiver.firstName} ${b.receiver.lastName}`.toLowerCase();
          if (nameA < nameB) return sortConfig.direction === 'asc' ? -1 : 1;
          if (nameA > nameB) return sortConfig.direction === 'asc' ? 1 : -1;
          return 0;
        } else {
          if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
          if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
          return 0;
        }
      });
    }
    return sortableTransactions;
  };

  // Get appropriate status styling
  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Failed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatTransactionId = (id) => {
    // Show only first and last 4 characters with ellipsis in between
    return id.length > 12 ? `${id.substring(0, 4)}...${id.substring(id.length - 4)}` : id;
  };

  return (
    <div className="overflow-hidden bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">Transaction History</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-sm text-gray-600 px-2 py-1 rounded hover:bg-gray-100">
            <Filter size={16} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      {transactions.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-gray-500">No transactions yet.</p>
          <p className="text-sm text-gray-400 mt-2">When you make transactions, they'll appear here.</p>
        </div>
      ) : (
        <>
          {/* Desktop view */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('_id')}
                  >
                    <div className="flex items-center gap-1">
                      Transaction ID
                      {sortConfig.key === '_id' && (
                        sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('receiver')}
                  >
                    <div className="flex items-center gap-1">
                      Receiver
                      {sortConfig.key === 'receiver' && (
                        sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('amount')}
                  >
                    <div className="flex items-center gap-1">
                      Amount
                      {sortConfig.key === 'amount' && (
                        sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('status')}
                  >
                    <div className="flex items-center gap-1">
                      Status
                      {sortConfig.key === 'status' && (
                        sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getSortedTransactions().map((txn) => (
                  <tr key={txn._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700 text-sm font-medium">{formatTransactionId(txn._id)}</span>
                        <button
                          onClick={() => copyToClipboard(txn._id)}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          title="Copy Transaction ID"
                        >
                          {copiedId === txn._id ? (
                            <CheckCircle size={16} className="text-green-500" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{txn.receiver.firstName} {txn.receiver.lastName}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">${(txn.amount || 0).toLocaleString()}</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(txn.status)}`}>
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile view */}
          <div className="md:hidden">
            <div className="divide-y divide-gray-200">
              {getSortedTransactions().map((txn) => (
                <div key={txn._id} className="p-4">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleRowExpansion(txn._id)}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">
                          {formatTransactionId(txn._id)}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(txn._id);
                          }}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          {copiedId === txn._id ? (
                            <CheckCircle size={14} className="text-green-500" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        To: {txn.receiver.firstName} {txn.receiver.lastName}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          ${(txn.amount || 0).toLocaleString()}
                        </div>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(txn.status)}`}>
                          {txn.status}
                        </span>
                      </div>
                      {expandedRow === txn._id ? (
                        <ChevronUp size={16} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {expandedRow === txn._id && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-gray-500">Full ID:</div>
                        <div className="text-gray-900 break-all">{txn._id}</div>
                        <div className="text-gray-500">Receiver:</div>
                        <div className="text-gray-900">{txn.receiver.firstName} {txn.receiver.lastName}</div>
                        <div className="text-gray-500">Amount:</div>
                        <div className="text-gray-900">${(txn.amount || 0).toLocaleString()}</div>
                        <div className="text-gray-500">Status:</div>
                        <div className="text-gray-900">{txn.status}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}