import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';
import { Users, Globe, Activity, TrendingUp, ShieldAlert, BarChart3, LayoutDashboard, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, color }) => (
  <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className={`p-3 rounded-xl bg-${color}-500/10`}>
        {React.cloneElement(icon as React.ReactElement, { className: `w-6 h-6 text-${color}-400` })}
      </div>
      {trend && <span className="text-xs text-emerald-400 font-medium">{trend}</span>}
    </div>
    <div>
      <p className="text-sm text-gray-400 font-medium">{title}</p>
      <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
    </div>
  </div>
);

export default function Admin() {
  const [totals, setTotals] = useState({
    totalUsers: 0,
    totalDomains: 0,
  });
  const [recentData, setRecentData] = useState({
    recentUsers: [] as any[],
    recentDomains: [] as any[],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 监听所有用户总数
    const unsubUsers = onSnapshot(collection(db, 'users'), (snapshot) => {
      setTotals(prev => ({ ...prev, totalUsers: snapshot.size }));
      setLoading(false);
    });

    // 监听所有域名总数
    const unsubDomains = onSnapshot(collection(db, 'domains'), (snapshot) => {
      setTotals(prev => ({ ...prev, totalDomains: snapshot.size }));
    });

    // 监听最近用户
    const recentUsersQuery = query(collection(db, 'users'), orderBy('createdAt', 'desc'), limit(5));
    const unsubRecentUsers = onSnapshot(recentUsersQuery, (snapshot) => {
      setRecentData(prev => ({ 
        ...prev, 
        recentUsers: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) 
      }));
    });

    // 监听最近域名
    const recentDomainsQuery = query(collection(db, 'domains'), orderBy('createdAt', 'desc'), limit(5));
    const unsubRecentDomains = onSnapshot(recentDomainsQuery, (snapshot) => {
      setRecentData(prev => ({ 
        ...prev, 
        recentDomains: snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) 
      }));
    });

    return () => {
      unsubUsers();
      unsubDomains();
      unsubRecentUsers();
      unsubRecentDomains();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#05050a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05050a] text-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Link to="/dashboard" className="flex items-center gap-1 hover:text-white transition-colors text-sm">
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Owner Admin Panel</h1>
            <p className="text-gray-400 text-sm">System-wide overview for kashmail.st@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest">
              <ShieldAlert className="w-4 h-4" />
              Restricted Access
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Users" value={totals.totalUsers} icon={<Users />} color="purple" trend="+12% growth" />
          <StatCard title="Monitored Domains" value={totals.totalDomains} icon={<Globe />} color="cyan" trend="+8% growth" />
          <StatCard title="API Requests" value="1.2M" icon={<Activity />} color="emerald" trend="+24% peak" />
          <StatCard title="Conversion Rate" value="18.2%" icon={<TrendingUp />} color="amber" trend="+2.4% avg" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Users Table */}
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-400" />
                Recent User Registrations
              </h2>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-xs text-gray-400 uppercase">
                  <tr>
                    <th className="px-6 py-3 font-semibold">User</th>
                    <th className="px-6 py-3 font-semibold">Email</th>
                    <th className="px-6 py-3 font-semibold">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {recentData.recentUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">
                          {user.displayName?.charAt(0) || 'U'}
                        </div>
                        <span className="text-sm font-medium text-white">{user.displayName || 'Unknown'}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Domains Table */}
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-400" />
                Latest Domains Added
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-xs text-gray-400 uppercase">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Domain</th>
                    <th className="px-6 py-3 font-semibold">User ID</th>
                    <th className="px-6 py-3 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {recentData.recentDomains.map((domain) => (
                    <tr key={domain.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-emerald-400">{domain.domain}</td>
                      <td className="px-6 py-4 text-sm text-gray-400 font-mono">{domain.userId.substring(0, 8)}...</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{domain.createdAt ? new Date(domain.createdAt).toLocaleDateString() : 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
