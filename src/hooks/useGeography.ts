import { useEffect, useState } from "react";
import api from "@/lib/api";
import { CountryGeography } from "@/types/api";

export const useGeographyData = () => {
  const [data, setData] = useState<CountryGeography[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<CountryGeography[]>("/overall-stats/geography")
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
