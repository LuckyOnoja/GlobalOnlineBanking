"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import UserTransferForm from "../../components/ui/UserTransferForm";
import TransactionTable from "../../components/ui/TransactionTable";
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
  Menu,
  X,
} from "lucide-react";
import { FaCopy } from "react-icons/fa";
import axios from "axios";

export default function UserDashboard() {
  const SERVER_NAME = process.env.NEXT_PUBLIC_SERVER_NAME;
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [user, setUser] = useState({});
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: "8734 5621 9048 2376",
    balance: "€12,450.82",
    savingsBalance: "€5,382.65",
    currency: "EUR",
    accountStatus: "Active",
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [quickAccounts, setQuickAccounts] = useState([
    {
      name: "Sarah Johnson",
      accountNumber: "****3842",
      lastTransfer: "€250.00",
    },
    {
      name: "David Miller",
      accountNumber: "****9572",
      lastTransfer: "€125.00",
    },
    {
      name: "Savings Account",
      accountNumber: "****7601",
      lastTransfer: "€800.00",
    },
  ]);

  // Get token from localStorage (either adminToken or token)
  const getAuthToken = () => {
    return localStorage.getItem("token");
  };

  const getUser = async () => {
    try {
      const token = getAuthToken();
      if (!token) {
        setError("Authentication token not found. Please log in.");
        return;
      }

      const res = await axios.get(`${SERVER_NAME}user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.user);
      console.log("USER", res.data.user);
      setError("");
    } catch (error) {
      setUser(null);
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
    getUser();
    fetchTransactions();

    const interval = setInterval(fetchTransactions, getUser, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".mobile-menu-button")
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Function to get initials from firstName and lastName
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName.charAt(0) : "";
    const lastInitial = lastName ? lastName.charAt(0) : "";
    return `${firstInitial}${lastInitial}`.toUpperCase(); // Convert to uppercase
  };

  
  const initials = getInitials(user.firstName, user.lastName);

  const [copiedId, setCopiedId] = useState(null); // Track which Account Number was copied

  // Function to copy the account number to the clipboard
  const copyToClipboard = (accountNumber) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setCopiedId(accountNumber); // Set the copied account number
        setTimeout(() => setCopiedId(null), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };


  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="mobile-menu-button mr-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-bold text-blue-700">
            Global<span className="text-blue-500">Bank</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
            {initials}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`sidebar fixed inset-0 z-40 md:relative md:z-0 md:w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-700">
            Global<span className="text-blue-500">Bank</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">Online Banking</p>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              {initials}
            </div>
            <div>
              <p className="font-medium text-sm">
                {user.firstName} {user.lastName}{" "}
              </p>
              <p className="text-xs text-gray-500">Personal Account</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-blue-700 bg-blue-50 border-l-4 border-blue-600"
            onClick={() => setSidebarOpen(false)}
          >
            <Home size={18} />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/accounts"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
            onClick={() => setSidebarOpen(false)}
          >
            <Wallet size={18} />
            <span>Accounts</span>
          </Link>
          <Link
            href="/cards"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
            onClick={() => setSidebarOpen(false)}
          >
            <CreditCard size={18} />
            <span>Cards</span>
          </Link>
          <Link
            href="/transfers"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
            onClick={() => setSidebarOpen(false)}
          >
            <Send size={18} />
            <span>Transfers</span>
          </Link>
          <Link
            href="/history"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
            onClick={() => setSidebarOpen(false)}
          >
            <ArrowUpDown size={18} />
            <span>Transaction History</span>
          </Link>

          <div className="px-4 mt-6 mb-2">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Settings
            </p>
          </div>
          <Link
            href="/profile"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
            onClick={() => setSidebarOpen(false)}
          >
            <User size={18} />
            <span>Profile</span>
          </Link>
          <Link
            href="/help"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
            onClick={() => setSidebarOpen(false)}
          >
            <HelpCircle size={18} />
            <span>Help Center</span>
          </Link>
          <Link
            href="/logout"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 mt-6"
            onClick={() => setSidebarOpen(false)}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation (desktop) */}
        <header className="hidden md:block bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                My Dashboard
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <button className="relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  {initials}
                </div>
                <span className="text-sm font-medium">
                  {user.firstName} {user.lastName}{" "}
                </span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Mobile Dashboard Title */}
          <div className="md:hidden mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              My Dashboard
            </h2>
          </div>

          {/* Account Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="lg:col-span-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-4 md:p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 md:mb-8">
                <div className="mb-4 sm:mb-0">
                  <p className="text-blue-100 mb-1">Current Account</p>
                  <h3 className="text-2xl font-bold mb-1">
                    ${(user.balance || 0).toLocaleString()}
                  </h3>
                  <p className="text-sm text-blue-100">Available Balance</p>
                </div>
                <div className="flex flex-col items-start sm:items-end">
                  <p className="text-sm text-blue-100 mb-1">Account Number</p>
                  <span className="font-medium tracking-wider flex items-center gap-2">
                    <span className="flex flex-col">
                      {user.accountNumber}
                      {copiedId === user.accountNumber && (
                        <span className="text-sm text-green-300">Copied!</span>
                      )}
                    </span>
                    <button
                      onClick={() => copyToClipboard(user.accountNumber)}
                      className="text-blue-300 hover:text-blue-100 transition-colors"
                      title="Copy Account Number"
                    >
                      <FaCopy className="inline-block" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
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

            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm">
              <h3 className="font-medium text-gray-800 mb-4">
                Quick Transfers
              </h3>
              <div className="space-y-4">
                {quickAccounts.map((account, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        {account.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{account.name}</p>
                        <p className="text-xs text-gray-500">
                          {account.accountNumber}
                        </p>
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
            <div className="border-b border-gray-200 p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Transactions
                </h2>
                <div className="flex flex-wrap items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    <Calendar size={16} />
                    <span>This Week</span>
                    <ChevronDown size={16} />
                  </button>
                  <Link
                    href="/history"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 overflow-x-auto">
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

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"></div>
      )}

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-4 md:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Send Money
                </h3>
                <button
                  onClick={() => setShowTransferModal(false)}
                  className="text-gray-400 hover:text-gray-500 text-xl"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="p-4 md:p-6">
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
