import { useState, useEffect } from "react";
import api from "@/lib/api";
import { MonthlySales } from "@/types/api";

export const useOverviewData = () => {
  const [data, setData] = useState<MonthlySales[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get<MonthlySales[]>("/overall-stats/monthly")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
