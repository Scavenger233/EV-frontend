
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Monthly = () => {
  // Mock monthly data
  const data = [
    { month: 'January', totalSales: 15000, totalUnits: 200 },
    { month: 'February', totalSales: 18000, totalUnits: 240 },
    { month: 'March', totalSales: 22000, totalUnits: 290 },
    { month: 'April', totalSales: 19000, totalUnits: 250 },
    { month: 'May', totalSales: 25000, totalUnits: 320 },
    { month: 'June', totalSales: 28000, totalUnits: 360 },
    { month: 'July', totalSales: 31000, totalUnits: 400 },
    { month: 'August', totalSales: 29000, totalUnits: 380 },
    { month: 'September', totalSales: 33000, totalUnits: 420 },
    { month: 'October', totalSales: 35000, totalUnits: 450 },
    { month: 'November', totalSales: 38000, totalUnits: 480 },
    { month: 'December', totalSales: 42000, totalUnits: 530 }
  ];

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">MONTHLY SALES</h1>
            <p className="text-gray-600">Chart of monthly sales</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6" style={{ height: '75vh' }}>
            <div className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 50,
                    right: 50,
                    left: 60,
                    bottom: 70,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="month"
                    stroke="#6b7280"
                    tick={{ fontSize: 12 }}
                    angle={90}
                    textAnchor="start"
                    height={100}
                    label={{ 
                      value: 'Month', 
                      position: 'insideBottom', 
                      offset: -5 
                    }}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    tick={{ fontSize: 12 }}
                    label={{ 
                      value: 'Total', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' }
                    }}
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
                  <Line 
                    type="monotone" 
                    dataKey="totalSales" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    name="Total Sales"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="totalUnits" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                    name="Total Units"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Monthly;
