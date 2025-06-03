import { useEffect, useState } from "react";
import api from "@/lib/api";

export interface DailySales {
  date: string; // "2021-02-05"
  totalSales: number;
  totalUnits: number;
}

export const useDailySales = () => {
  const [data, setData] = useState<DailySales[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<DailySales[]>("/overall-stats/daily")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
