import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUsers } from "@/hooks/useUsers";

const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
};

const Customers = () => {
  const { users, loading, error } = useUsers();

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

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone Number</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((customer) => (
                    <TableRow key={customer.id} className="hover:bg-gray-50">
                      <TableCell className="font-mono text-sm">
                        {customer.id}
                      </TableCell>
                      <TableCell className="font-medium">
                        {customer.name}
                      </TableCell>
                      <TableCell>{customer.email}</TableCell>
                      <TableCell>
                        {formatPhoneNumber(customer.phoneNumber)}
                      </TableCell>
                      <TableCell>{customer.country}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            customer.role === "admin"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {customer.role}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Customers;
