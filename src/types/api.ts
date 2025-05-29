
// User related types
export interface User {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  occupation: string;
  role: 'user' | 'admin' | 'superadmin';
  createdAt: string;
  updatedAt: string;
}

// Product related types
export interface ProductStat {
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  supply: number;
  stat: ProductStat;
  createdAt: string;
  updatedAt: string;
}

// Transaction related types
export interface Transaction {
  _id: string;
  userId: string;
  createdAt: string;
  products: string[];
  cost: number;
}

// Sales related types
export interface MonthlyData {
  month: string;
  totalSales: number;
  totalUnits: number;
}

export interface SalesByCategory {
  [category: string]: number;
}

export interface SalesData {
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  monthlyData: MonthlyData[];
  salesByCategory: SalesByCategory;
}

// Geography related types
export interface GeographyData {
  id: string;
  value: number;
}

// Performance related types
export interface PerformanceData {
  _id: string;
  userId: string;
  createdAt: string;
  products: string[];
  cost: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// API Error type
export interface ApiError {
  message: string;
  status: number;
  code?: string;
}
