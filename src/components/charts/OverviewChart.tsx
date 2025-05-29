
import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useSales } from '@/hooks/useApi';
import { SalesData } from '@/types/api';

interface OverviewChartProps {
  view: 'sales' | 'units';
}

const OverviewChart = ({ view }: OverviewChartProps) => {
  const { data, loading, error } = useSales();

  const chartData = useMemo(() => {
    if (!data) return [];

    // Type assertion to ensure data is SalesData
    const salesData = data as SalesData;

    // Convert monthly data to cumulative data
    const cumulativeData: any[] = [];
    let totalSales = 0;
    let totalUnits = 0;

    salesData.monthlyData.forEach((monthData) => {
      totalSales += monthData.totalSales;
      totalUnits += monthData.totalUnits;
      
      cumulativeData.push({
        month: monthData.month,
        totalSales,
        totalUnits,
      });
    });

    return cumulativeData;
  }, [data]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Loading overview data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">Error loading data: {error.message}</p>
      </div>
    );
  }

  if (!chartData.length) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis 
          dataKey="month" 
          stroke="#6b7280"
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          stroke="#6b7280"
          tick={{ fontSize: 12 }}
        />
        <Tooltip 
          formatter={(value, name) => [
            name === 'totalSales' ? `$${value.toLocaleString()}` : value.toLocaleString(),
            name === 'totalSales' ? 'Total Sales' : 'Total Units'
          ]}
          labelStyle={{ color: '#374151' }}
          contentStyle={{ 
            backgroundColor: 'white', 
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem'
          }}
        />
        <Legend />
        {view === 'sales' ? (
          <Line 
            type="monotone" 
            dataKey="totalSales" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            name="Total Sales"
          />
        ) : (
          <Line 
            type="monotone" 
            dataKey="totalUnits" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            name="Total Units"
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
