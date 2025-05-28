
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const transactionData = [
  { id: '001', userId: 'USR001', createdAt: '2024-01-15', products: 3, cost: 299.99 },
  { id: '002', userId: 'USR002', createdAt: '2024-01-15', products: 1, cost: 89.99 },
  { id: '003', userId: 'USR003', createdAt: '2024-01-14', products: 5, cost: 459.99 },
  { id: '004', userId: 'USR004', createdAt: '2024-01-14', products: 2, cost: 189.99 },
  { id: '005', userId: 'USR005', createdAt: '2024-01-13', products: 4, cost: 329.99 },
  { id: '006', userId: 'USR006', createdAt: '2024-01-13', products: 1, cost: 79.99 },
  { id: '007', userId: 'USR007', createdAt: '2024-01-12', products: 3, cost: 249.99 },
  { id: '008', userId: 'USR008', createdAt: '2024-01-12', products: 2, cost: 199.99 },
];

const TransactionsTable = () => {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold">Recent Transactions</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Export
            </Button>
            <select className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm text-white">
              <option>10 per page</option>
              <option>20 per page</option>
              <option>50 per page</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-700 hover:bg-gray-700/50">
              <TableHead className="text-gray-300 font-medium">ID</TableHead>
              <TableHead className="text-gray-300 font-medium">User ID</TableHead>
              <TableHead className="text-gray-300 font-medium">Created At</TableHead>
              <TableHead className="text-gray-300 font-medium"># of Products</TableHead>
              <TableHead className="text-gray-300 font-medium">Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionData.map((transaction) => (
              <TableRow key={transaction.id} className="border-gray-700 hover:bg-gray-700/30">
                <TableCell className="text-white font-mono">{transaction.id}</TableCell>
                <TableCell className="text-blue-400">{transaction.userId}</TableCell>
                <TableCell className="text-gray-300">{transaction.createdAt}</TableCell>
                <TableCell className="text-gray-300">{transaction.products}</TableCell>
                <TableCell className="text-green-400 font-medium">${transaction.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="p-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
        <span>Showing 1-8 of 500+ entries</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
