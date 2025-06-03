import { useEffect, useState } from "react";
import api from "@/lib/api";
import { AffiliateStat } from "@/types/api";

export const useAffiliateStats = () => {
  const [stats, setStats] = useState<AffiliateStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    api
      .get<AffiliateStat[]>("/affiliate-stats")
      .then((res) => setStats(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { stats, loading, error };
};