
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const MonthlyChart = () => {
  return (
    <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
      <div className="text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly Sales Chart</h3>
        <p className="text-gray-600 mb-4">
          Line chart showing monthly sales trends and units sold.
        </p>
        <div className="bg-purple-50 rounded-lg p-4 max-w-md mx-auto">
          <h4 className="font-medium text-purple-900 mb-2">Chart Features:</h4>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Monthly total sales line</li>
            <li>• Monthly total units line</li>
            <li>• Interactive tooltips</li>
            <li>• Legend and axis labels</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Monthly = () => {
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
            <MonthlyChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Monthly;
