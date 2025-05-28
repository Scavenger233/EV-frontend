
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Performance = () => {
  // Mock data for demonstration - replace with actual API call
  const mockData = [
    {
      _id: "1",
      userId: "user123",
      createdAt: "2024-01-15",
      products: ["prod1", "prod2", "prod3"],
      cost: 299.99
    },
    {
      _id: "2", 
      userId: "user456",
      createdAt: "2024-01-14",
      products: ["prod4", "prod5"],
      cost: 189.50
    },
    {
      _id: "3",
      userId: "user789", 
      createdAt: "2024-01-13",
      products: ["prod6"],
      cost: 99.00
    }
  ];

  const formatCurrency = (value: number) => {
    return `$${Number(value).toFixed(2)}`;
  };

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">PERFORMANCE</h1>
            <p className="text-gray-600">Track your Affiliate Sales Performance Here</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border" style={{ height: '75vh' }}>
            <div className="p-6 h-full">
              {mockData.length > 0 ? (
                <div className="overflow-auto h-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-medium text-gray-600">ID</TableHead>
                        <TableHead className="font-medium text-gray-600">User ID</TableHead>
                        <TableHead className="font-medium text-gray-600">Created At</TableHead>
                        <TableHead className="font-medium text-gray-600"># of Products</TableHead>
                        <TableHead className="font-medium text-gray-600">Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockData.map((row) => (
                        <TableRow key={row._id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{row._id}</TableCell>
                          <TableCell>{row.userId}</TableCell>
                          <TableCell>{row.createdAt}</TableCell>
                          <TableCell>{row.products.length}</TableCell>
                          <TableCell>{formatCurrency(row.cost)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Loading performance data...</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Performance;
