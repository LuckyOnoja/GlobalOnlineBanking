"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import PropeneerTransferForm from "../../components/ui/TransferForm";
import TransactionTable from "../../components/ui/TransactionTable";
import {
  BarChart3,
  Users,
  CreditCard,
  Wallet,
  ArrowUpDown,
  Bell,
  Search,
  ChevronDown,
  Calendar,
  Download,
  Filter,
} from "lucide-react";
import axios from "axios";

export default function PropeneerDashboard() {
  const SERVER_NAME = process.env.NEXT_PUBLIC_SERVER_NAME;
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [accountStats, setAccountStats] = useState({
    totalBalance: "€3,458,950.00",
    totalUsers: 1428,
    monthlyGrowth: "12.4%",
    pendingApprovals: 8,
  });

  const getAuthToken = () => {
    return  localStorage.getItem("adminToken");
  };

  // Fetch transactions for the logged-in user
  const fetchTransactions = async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        setError("Authentication token not found. Please log in.");
        return;
      }

      const res = await axios.get(`${SERVER_NAME}transactions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTransactions(res.data.transactions);
      console.log("TRANSACTION DETAIL", res.data.transactions);
      setLoading(false);
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to fetch transactions."
      );
      setLoading(false);
    }
  };

  // Poll for real-time updates
  useEffect(() => {
    fetchTransactions();
    const interval = setInterval(fetchTransactions, 5000); // Every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-700">
            Global<span className="text-blue-500">Bank</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">Administration Portal</p>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              AP
            </div>
            <div>
              <p className="font-medium text-sm">Admin Portal</p>
              <p className="text-xs text-gray-500">Propeneer Access</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          <div className="px-4 mb-2">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Main Menu
            </p>
          </div>
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-700 bg-blue-50 border-l-4 border-blue-600"
          >
            <BarChart3 size={18} />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/users"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <Users size={18} />
            <span>Users</span>
          </Link>
          <Link
            href="/transactions"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <ArrowUpDown size={18} />
            <span>Transactions</span>
          </Link>
          <Link
            href="/accounts"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <CreditCard size={18} />
            <span>Accounts</span>
          </Link>

          <div className="px-4 mt-6 mb-2">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Administration
            </p>
          </div>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <Wallet size={18} />
            <span>Banking Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Propeneer Dashboard
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  P
                </div>
                <span className="text-sm font-medium">Admin</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Wallet className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Balance
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {accountStats.totalBalance}
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                  <Users className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Users
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {accountStats.totalUsers}
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
                  <BarChart3 className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Monthly Growth
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {accountStats.monthlyGrowth}
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                  <CreditCard className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Pending Approvals
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {accountStats.pendingApprovals}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Transfer and Transactions Section */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Transactions
                </h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowTransferModal(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    New Transfer
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    <Calendar size={16} />
                    <span>Filter</span>
                    <ChevronDown size={16} />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <TransactionTable transactions={transactions} />
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
                <h3 className="text-lg font-semibold text-gray-900">
                  New Transfer
                </h3>
                <button
                  onClick={() => setShowTransferModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="p-6">
              <PropeneerTransferForm
                setTransactions={setTransactions}
                onComplete={() => setShowTransferModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
