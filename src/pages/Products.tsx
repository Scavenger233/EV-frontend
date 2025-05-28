
import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

interface ProductStat {
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
}

interface ProductProps {
  _id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  supply: number;
  stat: ProductStat;
}

const ProductCard = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}: ProductProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'clothing':
        return 'bg-blue-600';
      case 'shoes':
        return 'bg-green-600';
      case 'accessories':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
      <CardContent className="p-6">
        <div className={`inline-block px-2 py-1 rounded text-xs font-medium text-white mb-3 ${getCategoryColor(category)}`}>
          {category}
        </div>
        
        <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
        
        <p className="text-2xl font-bold text-green-400 mb-3">
          ${Number(price).toFixed(2)}
        </p>
        
        <div className="flex items-center gap-1 mb-3">
          {renderStars(rating)}
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-600 hover:bg-blue-700 border-blue-600 text-white flex items-center gap-2"
        >
          See More
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </Button>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
            <p className="text-gray-400 text-sm">
              <span className="font-medium">ID:</span> {_id}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium">Supply Left:</span> {supply}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium">Yearly Sales:</span> ${stat.yearlySalesTotal.toLocaleString()}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium">Units Sold This Year:</span> {stat.yearlyTotalSoldUnits.toLocaleString()}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Products = () => {
  // Mock data - replace with actual API call
  const mockProducts: ProductProps[] = [
    {
      _id: "prod_001",
      name: "Premium Running Shoes",
      description: "High-performance running shoes designed for athletes. Features advanced cushioning technology and breathable mesh upper for maximum comfort during long runs.",
      price: 129.99,
      rating: 5,
      category: "Shoes",
      supply: 150,
      stat: { yearlySalesTotal: 45000, yearlyTotalSoldUnits: 347 }
    },
    {
      _id: "prod_002", 
      name: "Cotton T-Shirt",
      description: "Comfortable 100% cotton t-shirt perfect for casual wear. Available in multiple colors with a relaxed fit.",
      price: 24.99,
      rating: 4,
      category: "Clothing",
      supply: 89,
      stat: { yearlySalesTotal: 12500, yearlyTotalSoldUnits: 500 }
    },
    {
      _id: "prod_003",
      name: "Leather Wallet",
      description: "Genuine leather wallet with multiple card slots and bill compartment. Handcrafted with attention to detail.",
      price: 49.99,
      rating: 5,
      category: "Accessories",
      supply: 75,
      stat: { yearlySalesTotal: 8750, yearlyTotalSoldUnits: 175 }
    },
    {
      _id: "prod_004",
      name: "Denim Jeans",
      description: "Classic straight-leg denim jeans made from premium cotton blend. Perfect fit for everyday wear.",
      price: 79.99,
      rating: 4,
      category: "Clothing",
      supply: 120,
      stat: { yearlySalesTotal: 23200, yearlyTotalSoldUnits: 290 }
    },
    {
      _id: "prod_005",
      name: "Sports Watch",
      description: "Digital sports watch with heart rate monitor, GPS tracking, and water resistance up to 50 meters.",
      price: 199.99,
      rating: 5,
      category: "Accessories",
      supply: 45,
      stat: { yearlySalesTotal: 31500, yearlyTotalSoldUnits: 157 }
    },
    {
      _id: "prod_006",
      name: "Casual Sneakers",
      description: "Versatile sneakers perfect for everyday wear. Comfortable cushioned sole with durable construction.",
      price: 89.99,
      rating: 4,
      category: "Shoes",
      supply: 200,
      stat: { yearlySalesTotal: 54000, yearlyTotalSoldUnits: 600 }
    }
  ];

  const isLoading = false; // Replace with actual loading state

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">PRODUCTS</h1>
              <p className="text-gray-400">See your list of products.</p>
            </div>

            {!isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockProducts.map((product) => (
                  <ProductCard key={product._id} {...product} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-400">Loading...</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
