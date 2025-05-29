
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useSales } from '@/hooks/useApi';

interface BreakdownChartProps {
  isDashboard?: boolean;
}

const BreakdownChart = ({ isDashboard = false }: BreakdownChartProps) => {
  const { data: salesData, loading, error } = useSales();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Loading breakdown data...</p>
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

  if (!salesData) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  // Convert salesByCategory object to array format for the chart
  const data = Object.entries(salesData.salesByCategory).map(([category, sales], i) => ({
    name: category,
    value: sales,
    color: ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'][i % 4]
  }));

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={`relative ${isDashboard ? 'h-96' : 'h-full'} w-full`}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={isDashboard ? 60 : 80}
            outerRadius={isDashboard ? 100 : 120}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
          />
          {!isDashboard && (
            <Legend 
              verticalAlign="bottom" 
              height={36}
              iconType="circle"
            />
          )}
        </PieChart>
      </ResponsiveContainer>
      
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-600">
            {!isDashboard && "Total: "}${total.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreakdownChart;
