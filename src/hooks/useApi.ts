
import { useState, useEffect } from 'react';
import { ApiError } from '@/types/api';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

export function useApi<T>(
  apiCall: () => Promise<T>,
  dependencies: any[] = []
): UseApiState<T> & { refetch: () => void } {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const result = await apiCall();
      setState({
        data: result,
        loading: false,
        error: null,
      });
    } catch (error: any) {
      const apiError: ApiError = {
        message: error.response?.data?.message || error.message || 'An error occurred',
        status: error.response?.status || 500,
        code: error.response?.data?.code,
      };
      
      setState({
        data: null,
        loading: false,
        error: apiError,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return {
    ...state,
    refetch: fetchData,
  };
}

// Specific hooks for common API calls
export function useUser(userId: string) {
  const { userApi } = require('@/services/api');
  return useApi(() => userApi.getUser(userId), [userId]);
}

export function useSales() {
  const { salesApi } = require('@/services/api');
  return useApi(() => salesApi.getSales(), []);
}

export function useProducts(page = 1, pageSize = 20) {
  const { productApi } = require('@/services/api');
  return useApi(() => productApi.getProducts(page, pageSize), [page, pageSize]);
}

export function useTransactions(page = 1, pageSize = 20, search?: string) {
  const { transactionApi } = require('@/services/api');
  return useApi(() => transactionApi.getTransactions(page, pageSize, search), [page, pageSize, search]);
}

export function useGeography() {
  const { geographyApi } = require('@/services/api');
  return useApi(() => geographyApi.getGeography(), []);
}

export function usePerformance(userId: string) {
  const { performanceApi } = require('@/services/api');
  return useApi(() => performanceApi.getUserPerformance(userId), [userId]);
}

export function useAdmins() {
  const { adminApi } = require('@/services/api');
  return useApi(() => adminApi.getAdmins(), []);
}
