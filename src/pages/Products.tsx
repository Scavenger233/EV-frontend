import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useProducts } from "@/hooks/useProducts";

// Define the shape of the product stat info
interface ProductStat {
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
}

// Define the expected product data structure
interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  supply: number;
  stat: ProductStat;
}

// Single product card UI with expandable section
const ProductCard = ({
  id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}: ProductProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Renders 1 to 5 stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-400"
        }`}
      />
    ));
  };

  // Set background color by category type
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "clothing":
        return "bg-blue-600";
      case "shoes":
        return "bg-green-600";
      case "accessories":
        return "bg-purple-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
      <CardContent className="p-6">
        <div
          className={`inline-block px-2 py-1 rounded text-xs font-medium text-white mb-3 ${getCategoryColor(
            category
          )}`}
        >
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
              <span className="font-medium">ID:</span> {id}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium">Supply Left:</span> {supply}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium">Yearly Sales:</span> $
              {stat.yearlySalesTotal.toLocaleString()}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-medium">Units Sold This Year:</span>{" "}
              {stat.yearlyTotalSoldUnits.toLocaleString()}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const { products, loading, error } = useProducts();

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

            {/* ✅ Show error if loading failed */}
            {error ? (
              <p className="text-red-400">Error loading products</p>
            ) : loading ? (
              // ✅ Show loading message
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-400">Loading...</p>
              </div>
            ) : (
              // ✅ Display cards once loaded
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
