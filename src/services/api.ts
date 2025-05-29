
import { api } from '@/config/api';
import { 
  User, 
  Product, 
  Transaction, 
  SalesData, 
  GeographyData, 
  PerformanceData,
  ApiResponse,
  PaginatedResponse
} from '@/types/api';

// User API
export const userApi = {
  getUser: async (id: string): Promise<User> => {
    const response = await api.get<ApiResponse<User>>(`/client/user/${id}`);
    return response.data.data;
  },

  getUsers: async (page = 1, pageSize = 20): Promise<PaginatedResponse<User>> => {
    const response = await api.get<PaginatedResponse<User>>(`/client/users`, {
      params: { page, pageSize }
    });
    return response.data;
  },
};

// Product API
export const productApi = {
  getProducts: async (page = 1, pageSize = 20): Promise<PaginatedResponse<Product>> => {
    const response = await api.get<PaginatedResponse<Product>>(`/client/products`, {
      params: { page, pageSize }
    });
    return response.data;
  },

  getProduct: async (id: string): Promise<Product> => {
    const response = await api.get<ApiResponse<Product>>(`/client/product/${id}`);
    return response.data.data;
  },
};

// Transaction API
export const transactionApi = {
  getTransactions: async (
    page = 1, 
    pageSize = 20, 
    search?: string
  ): Promise<PaginatedResponse<Transaction>> => {
    const response = await api.get<PaginatedResponse<Transaction>>(`/client/transactions`, {
      params: { page, pageSize, search }
    });
    return response.data;
  },
};

// Sales API
export const salesApi = {
  getSales: async (): Promise<SalesData> => {
    const response = await api.get<ApiResponse<SalesData>>(`/sales/sales`);
    return response.data.data;
  },
};

// Geography API
export const geographyApi = {
  getGeography: async (): Promise<GeographyData[]> => {
    const response = await api.get<ApiResponse<GeographyData[]>>(`/client/geography`);
    return response.data.data;
  },
};

// Performance API
export const performanceApi = {
  getUserPerformance: async (userId: string): Promise<PerformanceData[]> => {
    const response = await api.get<ApiResponse<PerformanceData[]>>(`/management/performance/${userId}`);
    return response.data.data;
  },
};

// Admin API
export const adminApi = {
  getAdmins: async (): Promise<User[]> => {
    const response = await api.get<ApiResponse<User[]>>(`/management/admins`);
    return response.data.data;
  },
};
