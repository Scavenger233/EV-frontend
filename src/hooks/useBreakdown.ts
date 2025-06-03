import { useEffect, useState } from "react";
import api from "@/lib/api"; 

type BreakdownData = {
  [category: string]: number;
};

export const useBreakdownData = () => {
  const [data, setData] = useState<BreakdownData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get<BreakdownData>("/overall-stats/breakdown")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};