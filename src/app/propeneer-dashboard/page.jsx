"use client";
// PropeneerDashboard.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Menu, X, Home, Users, PieChart, CreditCard, 
  Settings, HelpCircle, Bell, User, LogOut, Search, DollarSign,
  ArrowUp, ArrowDown, Activity, Shield, Globe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

const slideIn = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } }
};

export default function PropeneerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(5);
  const [currentTime, setCurrentTime] = useState('');

  // Update time
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data for dashboard metrics
  const stats = [
    { id: 1, title: 'Total Users', value: '24,892', change: '+12.5%', isPositive: true, icon: <Users size={20} /> },
    { id: 2, title: 'Transaction Volume', value: '$4.5M', change: '+8.3%', isPositive: true, icon: <Activity size={20} /> },
    { id: 3, title: 'Active Accounts', value: '18,753', change: '+5.2%', isPositive: true, icon: <CreditCard size={20} /> },
    { id: 4, title: 'System Health', value: '99.8%', change: '-0.1%', isPositive: false, icon: <Shield size={20} /> }
  ];

  // Recent transactions mock data
  const recentTransactions = [
    { id: 1, user: 'Sarah Johnson', type: 'Deposit', amount: '$2,500.00', status: 'Completed', time: '10:28 AM' },
    { id: 2, user: 'Michael Chen', type: 'Withdrawal', amount: '$750.00', status: 'Pending', time: '9:15 AM' },
    { id: 3, user: 'Elena Rodriguez', type: 'Transfer', amount: '$1,200.00', status: 'Completed', time: 'Yesterday' },
    { id: 4, user: 'James Wilson', type: 'Loan Payment', amount: '$325.50', status: 'Completed', time: 'Yesterday' },
    { id: 5, user: 'Aisha Patel', type: 'Deposit', amount: '$5,000.00', status: 'Under Review', time: '2 days ago' }
  ];

  // Active users by region
  const usersByRegion = [
    { region: 'North America', percentage: 35 },
    { region: 'Europe', percentage: 28 },
    { region: 'Asia', percentage: 22 },
    { region: 'Africa', percentage: 8 },
    { region: 'South America', percentage: 5 },
    { region: 'Oceania', percentage: 2 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        className={`bg-blue-700 text-white ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col transition-all duration-300 ease-in-out`}
        initial={{ width: 256 }}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
      >
        {/* Logo Section */}
        <div className="p-4 flex items-center justify-between border-b border-blue-600">
          {isSidebarOpen ? (
            <motion.div 
              className="flex items-center space-x-2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="bg-white text-blue-700 h-8 w-8 rounded-md flex items-center justify-center font-bold text-xl">G</div>
              <span className="font-bold text-xl">GlobalBank</span>
            </motion.div>
          ) : (
            <div className="bg-white text-blue-700 h-8 w-8 mx-auto rounded-md flex items-center justify-center font-bold text-xl">G</div>
          )}
          <button 
            className="text-white focus:outline-none" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-4 flex flex-col justify-between">
          <div>
            <div className="px-4 mb-2 text-xs font-semibold text-blue-200 uppercase">
              {isSidebarOpen && "Main"}
            </div>
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'overview' ? 'bg-blue-800' : 'hover:bg-blue-600'} transition-colors duration-200`} onClick={() => setActiveTab('overview')}>
              <Home size={20} />
              {isSidebarOpen && <span className="ml-3">Overview</span>}
            </Link>
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'users' ? 'bg-blue-800' : 'hover:bg-blue-600'} transition-colors duration-200`} onClick={() => setActiveTab('users')}>
              <Users size={20} />
              {isSidebarOpen && <span className="ml-3">User Management</span>}
            </Link>
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'transactions' ? 'bg-blue-800' : 'hover:bg-blue-600'} transition-colors duration-200`} onClick={() => setActiveTab('transactions')}>
              <Activity size={20} />
              {isSidebarOpen && <span className="ml-3">Transactions</span>}
            </Link>
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'analytics' ? 'bg-blue-800' : 'hover:bg-blue-600'} transition-colors duration-200`} onClick={() => setActiveTab('analytics')}>
              <PieChart size={20} />
              {isSidebarOpen && <span className="ml-3">Analytics</span>}
            </Link>
            
            {isSidebarOpen && (
              <div className="px-4 mt-6 mb-2 text-xs font-semibold text-blue-200 uppercase">
                Admin Tools
              </div>
            )}
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'security' ? 'bg-blue-800' : 'hover:bg-blue-600'} transition-colors duration-200`} onClick={() => setActiveTab('security')}>
              <Shield size={20} />
              {isSidebarOpen && <span className="ml-3">Security Center</span>}
            </Link>
            <Link href="#" className={`flex items-center py-3 px-4 ${activeTab === 'settings' ? 'bg-blue-800' : 'hover:bg-blue-600'} transition-colors duration-200`} onClick={() => setActiveTab('settings')}>
              <Settings size={20} />
              {isSidebarOpen && <span className="ml-3">System Settings</span>}
            </Link>
          </div>
          
          <div className="mt-auto">
            <Link href="#" className="flex items-center py-3 px-4 hover:bg-blue-600 transition-colors duration-200">
              <HelpCircle size={20} />
              {isSidebarOpen && <span className="ml-3">Help & Support</span>}
            </Link>
            <div className="border-t border-blue-600 pt-2 mt-2">
              <div className="flex items-center py-3 px-4">
                <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
                  A
                </div>
                {isSidebarOpen && (
                  <div className="ml-3">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-blue-300">Propeneer</p>
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
          <div className="flex items-center space-x-4 w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{currentTime}</span>
            <div className="relative">
              <Bell className="text-gray-600 cursor-pointer" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>
            <div className="h-8 w-px bg-gray-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                A
              </div>
              <span className="font-medium">Admin</span>
              <ChevronRight size={16} className="text-gray-400" />
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
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Propeneer Dashboard</h1>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Export Data
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                  System Update
                </button>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  variants={slideIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: stat.id * 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                      <p className={`text-sm mt-1 flex items-center ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.isPositive ? <ArrowUp size={16} className="mr-1" /> : <ArrowDown size={16} className="mr-1" />}
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.isPositive ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                      {stat.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Transactions */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h2 className="text-lg font-semibold">Recent Transactions</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All</button>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          <th className="pb-3">User</th>
                          <th className="pb-3">Type</th>
                          <th className="pb-3">Amount</th>
                          <th className="pb-3">Status</th>
                          <th className="pb-3">Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {recentTransactions.map((tx) => (
                          <tr key={tx.id} className="text-sm">
                            <td className="py-4 pr-2 font-medium">{tx.user}</td>
                            <td className="py-4 pr-2 text-gray-600">{tx.type}</td>
                            <td className="py-4 pr-2 font-medium">{tx.amount}</td>
                            <td className="py-4 pr-2">
                              <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium
                                ${tx.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                                  tx.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                                {tx.status}
                              </span>
                            </td>
                            <td className="py-4 text-gray-500">{tx.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Global User Distribution */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h2 className="text-lg font-semibold">User Distribution</h2>
                  <Globe size={20} className="text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {usersByRegion.map((region) => (
                      <div key={region.region}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{region.region}</span>
                          <span className="text-gray-500">{region.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${region.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
                      View Detailed Analytics
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