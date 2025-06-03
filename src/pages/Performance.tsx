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
import { useAffiliateStats } from "@/hooks/useAffiliateStats";
import { useTransactionsByIds } from "@/hooks/useTransactionsByIds";

const Performance = () => {
  const {
    stats: affiliateStats,
    loading: statLoading,
    error,
  } = useAffiliateStats();
  const transactionIds = affiliateStats.flatMap((stat) => stat.affiliateSales);
  const { transactions, loading: txnLoading } =
    useTransactionsByIds(transactionIds);

  const transactionMap = Object.fromEntries(
    transactions.map((txn) => [txn.id, txn])
  );

  const formatCurrency = (value: number) => {
    return `$${Number(value).toFixed(2)}`;
  };

  const isLoading = statLoading || txnLoading;

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              PERFORMANCE
            </h1>
            <p className="text-gray-600">
              Track your Affiliate Sales Performance Here
            </p>
          </div>

          <div
            className="bg-white rounded-lg shadow-sm border"
            style={{ height: "75vh" }}
          >
            <div className="p-6 h-full">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Loading performance data...</p>
                </div>
              ) : (
                <div className="overflow-auto h-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-medium text-gray-600">
                          ID
                        </TableHead>
                        <TableHead className="font-medium text-gray-600">
                          User ID
                        </TableHead>
                        <TableHead className="font-medium text-gray-600">
                          Created At
                        </TableHead>
                        <TableHead className="font-medium text-gray-600">
                          # of Products
                        </TableHead>
                        <TableHead className="font-medium text-gray-600">
                          Cost
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {affiliateStats.flatMap((stat) =>
                        stat.affiliateSales.map((txnId) => {
                          const txn = transactionMap[txnId];
                          if (!txn) return null;

                          return (
                            <TableRow key={txn.id} className="hover:bg-gray-50">
                              <TableCell className="font-medium">
                                {txn.id}
                              </TableCell>
                              <TableCell>{stat.userId}</TableCell>
                              <TableCell>
                                {new Date(txn.createdAt).toLocaleDateString()}
                              </TableCell>
                              <TableCell>{txn.productIds.length}</TableCell>
                              <TableCell>{formatCurrency(txn.cost)}</TableCell>
                            </TableRow>
                          );
                        })
                      )}
                    </TableBody>
                  </Table>
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
