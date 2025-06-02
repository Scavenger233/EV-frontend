import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Transaction, PaginatedTransactions } from "@/types/api";

interface UseTransactionsParams {
  page: number;
  limit: number;
  sort?: string;
}

export const useTransactions = ({
  page,
  limit,
  sort,
}: UseTransactionsParams) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [total, setTotal] = useState(0); // total number of transactions
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    api
      .get<Transaction[]>("/transactions", {
        params: { page, limit, sort },
      })
      .then((res) => {
        console.log("Raw response:", res.data);
        setTransactions(res.data);
        setTotal(res.data.length);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page, limit, sort]);

  return { transactions, total, loading, error };
};
