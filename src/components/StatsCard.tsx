
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: LucideIcon;
  gradient?: string;
}

const StatsCard = ({ title, value, change, changeType, icon: Icon, gradient }: StatsCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "p-3 rounded-lg",
          gradient || "bg-gradient-to-r from-blue-500 to-purple-600"
        )}>
          <Icon className="text-white" size={24} />
        </div>
        <div className={cn(
          "px-2 py-1 rounded-full text-xs font-medium",
          changeType === 'increase' 
            ? "bg-green-900/50 text-green-400" 
            : "bg-red-900/50 text-red-400"
        )}>
          {change}
        </div>
      </div>
      
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
        <p className="text-white text-2xl font-bold">{value.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default StatsCard;
