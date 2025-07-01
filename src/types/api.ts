// ========== Product ==========
export interface ProductStat {
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  supply: number;
  stat: ProductStat;
}

// ========== Customer ==========
export interface Customer {
  id: number;
  name: string;
  email: string;
  city: string;
  country: string;
  phoneNumber: string;
  role: string;
}

// ========== Transaction ==========
export interface Transaction {
  id: string;
  userId: string;
  cost: number;
  productIds: string[];
  createdAt: string;
}

// For paginated transaction responses
export interface PaginatedTransactions {
  transactions: Transaction[];
  total: number;
}

// ========== Geography ==========
export type GeographyData = Record<string, number>; // e.g., { "US": 120, "IE": 30 }

export interface CountryGeography {
  countryCode: string;
  count: number;
}


// ========== Admin ==========
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin';
}

// ========== Performance ==========
export interface AdminPerformance {
  id: string;
  sales: {
    productId: string;
    unitsSold: number;
    totalRevenue: number;
  }[];
}

// ========== Dashboard ==========
export interface MonthlySales {
  month: string;
  totalSales: number;
  totalUnits: number;
}

export interface DashboardStats {
  totalCustomers: number;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  monthlyData: MonthlySales[];
}

// ========== Affiliate ==========
export interface AffiliateStat {
  id: string;
  userId: string;
  affiliateSales: string[]; // List of Transaction ID
}
