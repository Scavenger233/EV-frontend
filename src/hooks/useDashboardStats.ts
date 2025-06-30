import { useEffect, useState } from 'react';
import api from '@/lib/api';

export interface DashboardStats {
  totalCustomers: number;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  thisMonthStats: {
    month: string;
    totalSales: number;
    totalUnits: number;
  };
  todayStats: {
    date: string;
    totalSales: number;
    totalUnits: number;
  };
}

export const useDashboardStats = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<DashboardStats>('/overall-stats/dashboard')
      .then(res => {
        console.log("📊 Dashboard stats from backend:", res.data);
        setStats(res.data);
      })
      .catch(err => {
        console.error("❌ Failed to load dashboard stats", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { stats, loading, error };
};

export default useDashboardStats;