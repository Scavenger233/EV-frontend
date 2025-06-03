import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Transaction } from "@/types/api";

export const useTransactionsByIds = (ids: string[]) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ids.length === 0) {
      setTransactions([]);
      setLoading(false);
      return;
    }

    const query = ids.map(id => `ids=${id}`).join("&");
    api.get<Transaction[]>(`/transactions/batch?${query}`)
      .then(res => setTransactions(res.data))
      .catch(() => setTransactions([]))
      .finally(() => setLoading(false));
  }, [ids]);

  return { transactions, loading };
};
