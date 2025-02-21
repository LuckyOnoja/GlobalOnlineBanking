export default function TransactionTable({ transactions }) {
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
                <tr key={txn.transactionId} className="hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-4 border-b">{txn.transactionId}</td>
                  <td className="py-3 px-4 border-b">{txn.receiversName}</td>
                  <td className="py-3 px-4 border-b">${txn.amount.toFixed(2)}</td>
                  <td className="py-3 px-4 border-b">
                    <span
                      className={`${
                        txn.status === "pending"
                          ? "text-yellow-500"
                          : txn.status === "completed"
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