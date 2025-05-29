
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import OverviewChart from '@/components/charts/OverviewChart';

const Overview = () => {
  const [view, setView] = useState("units");

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
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
            <div className="h-96">
              <OverviewChart view={view} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
