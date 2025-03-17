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
  Menu,
  X,
} from "lucide-react";
import axios from "axios";

export default function PropeneerDashboard() {
  const SERVER_NAME = process.env.NEXT_PUBLIC_SERVER_NAME;
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [propeneer, setPropeneer] = useState({});
  const [accountStats, setAccountStats] = useState({
    totalBalance: "€3,458,950",
    totalUsers: 1428,
    monthlyGrowth: "12.4%",
    pendingApprovals: 8,
  });

  const getAuthToken = () => {
    return localStorage.getItem("adminToken");
  };

  const getPropeneer = async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        setError("Authentication token not found. Please log in.");
        return;
      }

      const res = await axios.get(`${SERVER_NAME}propeneer`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPropeneer(res.data.user);
      setError("");
    } catch (error) {
      setPropeneer(null);
      setError(error.response?.data?.message || "User not found");
    }
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
    getPropeneer();
    const interval = setInterval(fetchTransactions, 5000); // Every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Close sidebar when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

   // Function to get initials from firstName and lastName
   const getInitials = (username) => {
    const initial = username ? username.charAt(0) : "";
    return `${initial}`.toUpperCase(); // Convert to uppercase
  };

  
  const initials = getInitials(propeneer.username);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full z-50 w-72 lg:w-64 bg-white border-r border-gray-200 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-700">
            Globalis<span className="text-blue-500">Bank</span>
          </h1>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <p className="text-xs text-gray-500 px-6 pt-2">Administration Portal</p>

        <div className="p-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              {initials}
            </div>
            <div>
              <p className="font-medium text-sm">{propeneer.username} </p>
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
            href="/propeneer-dashboard"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <Users size={18} />
            <span>Users</span>
          </Link>
          <Link
            href="/propeneer-transactions"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <ArrowUpDown size={18} />
            <span>Transactions</span>
          </Link>
          <Link
            href="/#"
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
            href="/propeneer-settings"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <Wallet size={18} />
            <span>Banking Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                className="lg:hidden p-1 rounded-md border border-gray-200"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} className="text-gray-700" />
              </button>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
                Propeneer Dashboard
              </h2>
            </div>
            <div className="flex items-center gap-2 sm:gap-6">
              <div className="relative hidden sm:block">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm w-32 md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  {initials}
                </div>
                <span className="text-sm font-medium hidden sm:inline">
                  Admin
                </span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 ">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Wallet className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500">
                    Total Balance
                  </p>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                    {accountStats.totalBalance}
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-50 flex items-center justify-center">
                  <Users className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500">
                    Total Users
                  </p>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                    {accountStats.totalUsers}
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-50 flex items-center justify-center">
                  <BarChart3 className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500">
                    Monthly Growth
                  </p>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                    {accountStats.monthlyGrowth}
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                  <CreditCard className="text-amber-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-500">
                    Pending Approvals
                  </p>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                    {accountStats.pendingApprovals}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Transfer and Transactions Section */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
            <div className="border-b border-gray-200 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Transactions
                </h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowTransferModal(true)}
                    className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    New Transfer
                  </button>
                  <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    <Calendar size={16} className="hidden sm:inline" />
                    <span>Filter</span>
                    <ChevronDown size={16} />
                  </button>
                  <button className="p-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-x-auto">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="min-w-full">
                  <TransactionTable transactions={transactions} />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  New Transfer
                </h3>
                <button
                  onClick={() => setShowTransferModal(false)}
                  className="text-gray-400 hover:text-gray-500 text-xl"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
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
