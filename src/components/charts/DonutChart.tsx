
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const categoryData = [
  { name: 'Shoes', value: 35, color: '#3B82F6' },
  { name: 'Clothing', value: 30, color: '#8B5CF6' },
  { name: 'Accessories', value: 25, color: '#10B981' },
  { name: 'Misc', value: 10, color: '#F59E0B' }
];

const SalesDonutChart = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h3 className="text-white text-lg font-semibold mb-4">Sales by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#FFFFFF'
            }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            wrapperStyle={{ color: '#FFFFFF' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesDonutChart;
