
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface BreakdownChartProps {
  isDashboard?: boolean;
}

const BreakdownChart = ({ isDashboard = false }: BreakdownChartProps) => {
  // Mock data - replace with actual API call
  const data = [
    { name: 'Clothing', value: 45000, color: '#8884d8' },
    { name: 'Shoes', value: 32000, color: '#82ca9d' },
    { name: 'Accessories', value: 28000, color: '#ffc658' },
    { name: 'Miscellaneous', value: 18000, color: '#ff7300' }
  ];

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
