
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const BreakdownChart = () => {
  return (
    <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
      <div className="text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Breakdown Chart</h3>
        <p className="text-gray-600 mb-4">
          Pie chart showing breakdown of sales by category.
        </p>
        <div className="bg-orange-50 rounded-lg p-4 max-w-md mx-auto">
          <h4 className="font-medium text-orange-900 mb-2">Categories:</h4>
          <ul className="text-sm text-orange-800 space-y-1">
            <li>• Clothing</li>
            <li>• Shoes</li>
            <li>• Accessories</li>
            <li>• Miscellaneous</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

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
          
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <BreakdownChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Breakdown;
