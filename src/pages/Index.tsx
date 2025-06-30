// src/pages/Index.tsx
import React from "react";
import { Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import SalesLineChart from "@/components/charts/LineChart";
import SalesDonutChart from "@/components/charts/DonutChart";
import TransactionsTable from "@/components/TransactionsTable";
import { useDashboardStats } from "@/hooks/useDashboardStats";

const Index = () => {
  const { stats, loading, error } = useDashboardStats();

  if (loading || !stats) {
    return <div className="text-white p-6">Loading dashboard...</div>;
  }

  const statsData = [
    {
      title: "Total Customers",
      value: stats?.totalCustomers || 0,
      change: "+14%",
      changeType: "increase" as const,
      icon: Users,
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      title: "Sales Today",
      value: stats?.todayStats.totalSales || 0,
      change: "+21%",
      changeType: "increase" as const,
      icon: ShoppingCart,
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      title: "Monthly Sales",
      value: stats?.thisMonthStats.totalSales || 0,
      change: "+5%",
      changeType: "increase" as const,
      icon: DollarSign,
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "Yearly Sales",
      value: stats?.yearlySalesTotal || 0,
      change: "+43%",
      changeType: "increase" as const,
      icon: TrendingUp,
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
              <p className="text-gray-400">
                Welcome back! Here's what's happening with your business today.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <StatsCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  changeType={stat.changeType}
                  icon={stat.icon}
                  gradient={stat.gradient}
                />
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SalesLineChart />
              <SalesDonutChart />
            </div>

            {/* Transactions Table */}
            <TransactionsTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
