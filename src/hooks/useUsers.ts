import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Customer } from "@/types/api";

export const useUsers = () => {
  const [users, setUsers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<Customer[]>("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
};