
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

const Admin = () => {
  // Mock data for demonstration - replace with actual API call
  const mockData = [
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
      country: "USA",
      occupation: "Software Engineer",
      role: "Admin"
    },
    {
      _id: "2",
      name: "Jane Smith", 
      email: "jane@example.com",
      phoneNumber: "0987654321",
      country: "Canada",
      occupation: "Product Manager",
      role: "Super Admin"
    },
    {
      _id: "3",
      name: "Bob Johnson",
      email: "bob@example.com", 
      phoneNumber: "5551234567",
      country: "UK",
      occupation: "Data Analyst",
      role: "Admin"
    }
  ];

  const formatPhoneNumber = (phoneNumber: string) => {
    return phoneNumber.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
  };

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">ADMINS</h1>
            <p className="text-gray-600">Managing admins and list of admins</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border" style={{ height: '75vh' }}>
            <div className="p-6 h-full">
              {mockData.length > 0 ? (
                <div className="overflow-auto h-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-medium text-gray-600">ID</TableHead>
                        <TableHead className="font-medium text-gray-600">Name</TableHead>
                        <TableHead className="font-medium text-gray-600">Email</TableHead>
                        <TableHead className="font-medium text-gray-600">Phone Number</TableHead>
                        <TableHead className="font-medium text-gray-600">Country</TableHead>
                        <TableHead className="font-medium text-gray-600">Occupation</TableHead>
                        <TableHead className="font-medium text-gray-600">Role</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockData.map((row) => (
                        <TableRow key={row._id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{row._id}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{formatPhoneNumber(row.phoneNumber)}</TableCell>
                          <TableCell>{row.country}</TableCell>
                          <TableCell>{row.occupation}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              row.role === 'Super Admin' 
                                ? 'bg-purple-100 text-purple-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {row.role}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Loading admin data...</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
