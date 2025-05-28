
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const OverviewChart = ({ view }: { view: string }) => {
  return (
    <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg mt-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview Chart - {view}</h3>
        <p className="text-gray-600">
          This will display general revenue and profit overview based on the selected view.
        </p>
      </div>
    </div>
  );
};

const Overview = () => {
  const [view, setView] = useState("units");

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <Header />
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">OVERVIEW</h1>
            <p className="text-gray-600">Overview of general revenue and profit</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6" style={{ height: '75vh' }}>
            <div className="mt-4 mb-6">
              <Label htmlFor="view-select" className="text-sm font-medium text-gray-700 mb-2 block">
                View
              </Label>
              <Select value={view} onValueChange={setView}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="units">Units</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <OverviewChart view={view} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
