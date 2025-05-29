
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import BreakdownChart from '@/components/charts/BreakdownChart';

const Breakdown = () => {
  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">BREAKDOWN</h1>
            <p className="text-gray-600">Breakdown of Sales By Category</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-8" style={{ height: '75vh' }}>
            <BreakdownChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Breakdown;
