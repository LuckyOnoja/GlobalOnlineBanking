"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import UserTransferForm from "../../components/ui/UserTransferForm";
import { 
  Home, 
  CreditCard, 
  Send, 
  Wallet, 
  ArrowUpDown, 
  Bell, 
  User,
  ChevronDown,
  Calendar,
  PlusCircle,
  Download,
  HelpCircle,
  LogOut,
  DollarSign,
  ArrowUp,
  ArrowDown,
  Clock
} from "lucide-react";

export default function UserDashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: "8734 5621 9048 2376",
    balance: "€12,450.82",
    savingsBalance: "€5,382.65",
    currency: "EUR",
    accountStatus: "Active"
  });
  
  const [quickAccounts, setQuickAccounts] = useState([
    { name: "Sarah Johnson", accountNumber: "****3842", lastTransfer: "€250.00" },
    { name: "David Miller", accountNumber: "****9572", lastTransfer: "€125.00" },
    { name: "Savings Account", accountNumber: "****7601", lastTransfer: "€800.00" }
  ]);

  // Fetch transactions from your Node.js backend
  const fetchTransactions = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/user/transactions", {
        credentials: "include", // For auth cookies if needed
      });
      const data = await res.json();
      setTransactions(data.transactions || getSampleTransactions());
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      // For demo purposes, generate sample data
      setTransactions(getSampleTransactions());
      setLoading(false);
    }
  };
  
  const getSampleTransactions = () => {
    return [
      {
        id: "TX78425601",
        date: "2025-02-21T10:23:15",
        description: "Grocery Store",
        amount: -85.27,
        status: "completed",
        category: "Shopping"
      },
      {
        id: "TX78425512",
        date: "2025-02-20T14:12:32",
        description: "Salary Deposit",
        amount: 2450.00,
        status: "completed",
        category: "Income"
      },
      {
        id: "TX78425498",
        date: "2025-02-19T09:45:03",
        description: "Transfer to Savings",
        amount: -500.00,
        status: "completed",
        category: "Transfer"
      },
      {
        id: "TX78425423",
        date: "2025-02-18T16:34:08",
        description: "Electric Bill",
        amount: -128.45,
        status: "completed",
        category: "Utilities"
      },
      {
        id: "TX78425379",
        date: "2025-02-16T12:18:57",
        description: "Restaurant Payment",
        amount: -64.30,
        status: "completed",
        category: "Dining"
      }
    ];
  };

  // Poll for real-time updates
  useEffect(() => {
    fetchTransactions();
    const interval = setInterval(fetchTransactions, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-700">Global<span className="text-blue-500">Bank</span></h1>
          <p className="text-xs text-gray-500 mt-1">Online Banking</p>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div>
              <p className="font-medium text-sm">John Doe</p>
              <p className="text-xs text-gray-500">Personal Account</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-700 bg-blue-50 border-l-4 border-blue-600">
            <Home size={18} />
            <span>Dashboard</span>
          </Link>
          <Link href="/accounts" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Wallet size={18} />
            <span>Accounts</span>
          </Link>
          <Link href="/cards" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <CreditCard size={18} />
            <span>Cards</span>
          </Link>
          <Link href="/transfers" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Send size={18} />
            <span>Transfers</span>
          </Link>
          <Link href="/history" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <ArrowUpDown size={18} />
            <span>Transaction History</span>
          </Link>
          
          <div className="px-4 mt-6 mb-2">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Settings</p>
          </div>
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <User size={18} />
            <span>Profile</span>
          </Link>
          <Link href="/help" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <HelpCircle size={18} />
            <span>Help Center</span>
          </Link>
          <Link href="/logout" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 mt-6">
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">My Dashboard</h2>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <span className="text-sm font-medium">John Doe</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Account Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-6 shadow-lg">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-blue-100 mb-1">Current Account</p>
                  <h3 className="text-2xl font-bold mb-1">{accountDetails.balance}</h3>
                  <p className="text-sm text-blue-100">Available Balance</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm text-blue-100 mb-1">Account Number</p>
                  <p className="font-medium tracking-wider">{accountDetails.accountNumber}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowTransferModal(true)}
                  className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  <Send size={16} />
                  <span>Send Money</span>
                </button>
                <button className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium">
                  <Download size={16} />
                  <span>Download Statement</span>
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="font-medium text-gray-800 mb-4">Quick Transfers</h3>
              <div className="space-y-4">
                {quickAccounts.map((account, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        {account.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{account.name}</p>
                        <p className="text-xs text-gray-500">{account.accountNumber}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowTransferModal(true)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Send
                    </button>
                  </div>
                ))}
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium mt-2">
                  <PlusCircle size={16} />
                  <span>Add Recipient</span>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    <Calendar size={16} />
                    <span>This Week</span>
                    <ChevronDown size={16} />
                  </button>
                  <Link href="/history" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View All
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.amount > 0 
                            ? 'bg-green-100 text-green-600' 
                            : transaction.category === 'Transfer' 
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-red-100 text-red-600'
                        }`}>
                          {transaction.amount > 0 ? (
                            <ArrowDown size={20} />
                          ) : transaction.category === 'Transfer' ? (
                            <Send size={20} />
                          ) : (
                            <ArrowUp size={20} />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{formatDate(transaction.date)}</span>
                            <span>•</span>
                            <span>{transaction.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}€{Math.abs(transaction.amount).toFixed(2)}
                        </p>
                        <p className="text-xs flex items-center gap-1 justify-end text-gray-500">
                          <Clock size={12} />
                          <span>{transaction.status}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Send Money</h3>
                <button 
                  onClick={() => setShowTransferModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="p-6">
              <UserTransferForm 
                onComplete={() => setShowTransferModal(false)}
                quickAccounts={quickAccounts}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}