
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface OverviewChartProps {
  isDashboard?: boolean;
  view: string;
}

const OverviewChart = ({ isDashboard = false, view }: OverviewChartProps) => {
  // Mock cumulative data
  const data = [
    { month: 'Jan', totalSales: 12000, totalUnits: 150 },
    { month: 'Feb', totalSales: 25000, totalUnits: 320 },
    { month: 'Mar', totalSales: 38000, totalUnits: 480 },
    { month: 'Apr', totalSales: 52000, totalUnits: 650 },
    { month: 'May', totalSales: 67000, totalUnits: 820 },
    { month: 'Jun', totalSales: 83000, totalUnits: 1000 },
    { month: 'Jul', totalSales: 98000, totalUnits: 1180 },
    { month: 'Aug', totalSales: 115000, totalUnits: 1350 },
    { month: 'Sep', totalSales: 132000, totalUnits: 1520 },
    { month: 'Oct', totalSales: 148000, totalUnits: 1700 },
    { month: 'Nov', totalSales: 165000, totalUnits: 1880 },
    { month: 'Dec', totalSales: 183000, totalUnits: 2100 }
  ];

  const dataKey = view === 'sales' ? 'totalSales' : 'totalUnits';
  const yAxisLabel = view === 'sales' ? 'Total Revenue ($)' : 'Total Units';

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 70,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            label={{ 
              value: isDashboard ? '' : yAxisLabel, 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle' }
            }}
          />
          <Tooltip 
            formatter={(value) => [
              view === 'sales' ? `$${value.toLocaleString()}` : value.toLocaleString(),
              view === 'sales' ? 'Revenue' : 'Units'
            ]}
            labelStyle={{ color: '#374151' }}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem'
            }}
          />
          {!isDashboard && (
            <Legend />
          )}
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
