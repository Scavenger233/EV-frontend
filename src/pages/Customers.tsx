
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

// Mock data for customers - in a real app this would come from an API
const mockCustomers = [
  {
    _id: "63701cc1f03239b7f700000e",
    name: "John Smith",
    email: "john.smith@email.com",
    phoneNumber: "5551234567",
    country: "United States",
    occupation: "Software Engineer",
    role: "user"
  },
  {
    _id: "63701cc1f03239b7f700000f",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phoneNumber: "5559876543",
    country: "Canada",
    occupation: "Designer",
    role: "user"
  },
  {
    _id: "63701cc1f03239b7f7000010",
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phoneNumber: "5555551234",
    country: "United Kingdom",
    occupation: "Manager",
    role: "admin"
  },
  {
    _id: "63701cc1f03239b7f7000011",
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phoneNumber: "5554567890",
    country: "Australia",
    occupation: "Teacher",
    role: "user"
  },
  {
    _id: "63701cc1f03239b7f7000012",
    name: "David Wilson",
    email: "david.wilson@email.com",
    phoneNumber: "5553216547",
    country: "Germany",
    occupation: "Doctor",
    role: "user"
  }
];

const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
};

const Customers = () => {
  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">CUSTOMERS</h1>
            <p className="text-gray-600">List of Customers</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Occupation</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCustomers.map((customer) => (
                  <TableRow key={customer._id} className="hover:bg-gray-50">
                    <TableCell className="font-mono text-sm">{customer._id}</TableCell>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{formatPhoneNumber(customer.phoneNumber)}</TableCell>
                    <TableCell>{customer.country}</TableCell>
                    <TableCell>{customer.occupation}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        customer.role === 'admin' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {customer.role}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Customers;
