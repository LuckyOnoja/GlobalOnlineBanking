"use client";

// UserDashboard.jsx - Continued and Completed
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, Menu, X, Home, CreditCard, Send, PieChart, 
  Settings, HelpCircle, Bell, User, Search, ArrowRight,
  DollarSign, Plus, Clock, Shield, Gift, Download
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
};

export default function UserDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [greeting, setGreeting] = useState('');
  const [selectedCard, setSelectedCard] = useState('primary');

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  // User financial data
  const accountData = {
    name: 'Alex Johnson',
    totalBalance: 12475.86,
    currency: 'USD',
    accounts: [
      { id: 'primary', name: 'Primary Account', balance: 8425.51, number: '•••• 4582', type: 'Checking' },
      { id: 'savings', name: 'Savings Account', balance: 4050.35, number: '•••• 7291', type: 'Savings' }
    ],
    recentTransactions: [
      { id: 1, description: 'Grocery Store', amount: -85.47, date: 'Today', icon: 'shopping' },
      { id: 2, description: 'Salary Deposit', amount: 3275.00, date: 'Yesterday', icon: 'deposit' },
      { id: 3, description: 'Electric Bill', amount: -142.80, date: 'Feb 18', icon: 'utility' },
      { id: 4, description: 'Transfer to Savings', amount: -500.00, date: 'Feb 15', icon: 'transfer' },
      { id: 5, description: 'Coffee Shop', amount: -5.25, date: 'Feb 15', icon: 'food' }
    ],
    upcomingPayments: [
      { id: 1, description: 'Internet Bill', amount: 89.99, dueDate: 'Feb 25' },
      { id: 2, description: 'Rent Payment', amount: 1450.00, dueDate: 'Mar 01' }
    ]
  };

  // Function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Function to get icon for transaction
  const getTransactionIcon = (iconType) => {
    switch (iconType) {
      case 'shopping': return <DollarSign size={16} className="text-purple-500" />;
      case 'deposit': return <Download size={16} className="text-green-500" />;
      case 'utility': return <Home size={16} className="text-blue-500" />;
      case 'transfer': return <Send size={16} className="text-orange-500" />;
      case 'food': return <CreditCard size={16} className="text-red-500" />;
      default: return <CreditCard size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        className={`bg-white border-r border-gray-200 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col transition-all duration-300 ease-in-out`}
        initial={{ width: 256 }}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
      >
        {/* Logo Section */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          {isSidebarOpen ? (
            <motion.div 
              className="flex items-center space-x-2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="bg-blue-600 text-white h-8 w-8 rounded-md flex items-center justify-center font-bold text-xl">G</div>
              <span className="font-bold text-xl text-blue-600">GlobalBank</span>
            </motion.div>
          ) : (
            <div className="bg-blue-600 text-white h-8 w-8 mx-auto rounded-md flex items-center justify-center font-bold text-xl">G</div>
          )}
          <button 
            className="text-gray-500 focus:outline-none" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-4 flex flex-col justify-between">
          <div>
            {isSidebarOpen && (
              <div className="px-4 mb-2 text-xs font-semibold text-gray-500 uppercase">
                Main Menu
              </div>
            )}
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'} transition-colors duration-200`} onClick={() => setActiveTab('dashboard')}>
              <Home size={20} />
              {isSidebarOpen && <span className="ml-3">Dashboard</span>}
            </Link>
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'accounts' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'} transition-colors duration-200`} onClick={() => setActiveTab('accounts')}>
              <CreditCard size={20} />
              {isSidebarOpen && <span className="ml-3">My Accounts</span>}
            </Link>
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'transfer' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'} transition-colors duration-200`} onClick={() => setActiveTab('transfer')}>
              <Send size={20} />
              {isSidebarOpen && <span className="ml-3">Transfers</span>}
            </Link>
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'finance' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'} transition-colors duration-200`} onClick={() => setActiveTab('finance')}>
              <PieChart size={20} />
              {isSidebarOpen && <span className="ml-3">Financial Overview</span>}
            </Link>
            
            {isSidebarOpen && (
              <div className="px-4 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase">
                Services
              </div>
            )}
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'payments' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'} transition-colors duration-200`} onClick={() => setActiveTab('payments')}>
              <Clock size={20} />
              {isSidebarOpen && <span className="ml-3">Scheduled Payments</span>}
            </Link>
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'security' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'} transition-colors duration-200`} onClick={() => setActiveTab('security')}>
              <Shield size={20} />
              {isSidebarOpen && <span className="ml-3">Security</span>}
            </Link>
          </div>
          
          <div className="mt-auto">
            <Link href="#" className="flex items-center py-3 px-4 text-gray-600 hover:bg-gray-100 transition-colors duration-200">
              <HelpCircle size={20} />
              {isSidebarOpen && <span className="ml-3">Help & Support</span>}
            </Link>
            <Link href="#" className="flex items-center py-3 px-4 text-gray-600 hover:bg-gray-100 transition-colors duration-200">
              <Settings size={20} />
              {isSidebarOpen && <span className="ml-3">Settings</span>}
            </Link>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex items-center py-3 px-4">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {accountData.name.charAt(0)}
                </div>
                {isSidebarOpen && (
                  <div className="ml-3">
                    <p className="text-sm font-medium">{accountData.name}</p>
                    <p className="text-xs text-gray-500">Personal Account</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </motion.aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between p-4">
          <h1 className="text-xl font-semibold text-gray-800">{greeting}, {accountData.name.split(' ')[0]}</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <div className="relative">
              <Bell className="text-gray-600 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="h-8 w-px bg-gray-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {accountData.name.charAt(0)}
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Account Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Accounts</h2>
                <span className="text-sm font-medium text-gray-500">Total Balance: {formatCurrency(accountData.totalBalance)}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {accountData.accounts.map((account, index) => (
                  <motion.div
                    key={account.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedCard === account.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedCard(account.id)}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-gray-800">{account.name}</h3>
                        <p className="text-sm text-gray-500">{account.type} • {account.number}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-gray-100">
                        <CreditCard size={20} className="text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">Available Balance</p>
                      <p className="text-2xl font-bold text-gray-900">{formatCurrency(account.balance)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  <Send size={18} />
                  <span>Transfer Money</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  <Plus size={18} />
                  <span>Add New Account</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Transactions */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h2 className="text-lg font-semibold">Recent Transactions</h2>
                  <Link href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    <span>View All</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {accountData.recentTransactions.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div className="flex items-center">
                          <div className="p-2 rounded-full bg-gray-100 mr-3">
                            {getTransactionIcon(tx.icon)}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">{tx.description}</h4>
                            <p className="text-xs text-gray-500">{tx.date}</p>
                          </div>
                        </div>
                        <div className={`font-medium ${tx.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                          {tx.amount > 0 ? '+' : ''}{formatCurrency(tx.amount)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Column - Upcoming Payments & Quick Actions */}
              <div className="flex flex-col gap-6">
                {/* Upcoming Payments */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold">Upcoming Payments</h2>
                  </div>
                  <div className="p-6">
                    {accountData.upcomingPayments.map((payment) => (
                      <div key={payment.id} className="mb-4 last:mb-0 p-3 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{payment.description}</h4>
                          <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md">
                            Due {payment.dueDate}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold">{formatCurrency(payment.amount)}</span>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            Pay Now
                          </button>
                        </div>
                      </div>
                    ))}
                    <button className="w-full mt-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                      Schedule New Payment
                    </button>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-lg font-semibold">Quick Actions</h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-3 flex flex-col items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Send size={24} className="text-blue-600 mb-2" />
                        <span className="text-sm font-medium">Send Money</span>
                      </button>
                      <button className="p-3 flex flex-col items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <CreditCard size={24} className="text-blue-600 mb-2" />
                        <span className="text-sm font-medium">Card Settings</span>
                      </button>
                      <button className="p-3 flex flex-col items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Gift size={24} className="text-blue-600 mb-2" />
                        <span className="text-sm font-medium">Rewards</span>
                      </button>
                      <button className="p-3 flex flex-col items-center justify-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Shield size={24} className="text-blue-600 mb-2" />
                        <span className="text-sm font-medium">Security</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Financial Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Financial Insights</h2>
              </div>
              <div className="p-6">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <PieChart size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Spending Analysis Ready</h3>
                    <p className="text-sm text-gray-600 mb-3">We've analyzed your last month's spending patterns. Your top category was Groceries at 28% of total expenses.</p>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                      View Full Analysis →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}