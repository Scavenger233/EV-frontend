import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTransactions } from "@/hooks/useTransactions";

const TransactionsTable = () => {
  const { transactions, loading, error } = useTransactions({
    page: 1,
    limit: 10,
    sort: "createdAt",
  });

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold">
            Recent Transactions
          </h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
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
              <TableHead className="text-gray-300 font-medium">
                User ID
              </TableHead>
              <TableHead className="text-gray-300 font-medium">
                Created At
              </TableHead>
              <TableHead className="text-gray-300 font-medium">
                # of Products
              </TableHead>
              <TableHead className="text-gray-300 font-medium">Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow
                key={tx.id}
                className="border-gray-700 hover:bg-gray-700/30"
              >
                <TableCell className="text-white font-mono">{tx.id}</TableCell>
                <TableCell className="text-blue-400">{tx.userId}</TableCell>
                <TableCell className="text-gray-300">
                  {new Date(tx.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-gray-300">
                  {tx.productIds.length}
                </TableCell>
                <TableCell className="text-green-400 font-medium">
                  ${tx.cost.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="p-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
        <span>
          Showing {transactions.length} of {transactions.length} entries
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
