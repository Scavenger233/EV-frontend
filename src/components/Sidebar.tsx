
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  CreditCard, 
  Globe,
  BarChart3,
  Calendar,
  TrendingUp,
  PieChart,
  Settings,
  UserCog,
  ChevronDown,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['client-facing', 'sales']);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/',
      type: 'single'
    },
    {
      id: 'client-facing',
      label: 'Client Facing',
      type: 'section',
      items: [
        { id: 'products', label: 'Products', icon: Package, href: '/products' },
        { id: 'customers', label: 'Customers', icon: Users, href: '/customers' },
        { id: 'transactions', label: 'Transactions', icon: CreditCard, href: '/transactions' },
        { id: 'geography', label: 'Geography', icon: Globe, href: '/geography' }
      ]
    },
    {
      id: 'sales',
      label: 'Sales',
      type: 'section',
      items: [
        { id: 'overview', label: 'Overview', icon: BarChart3, href: '/sales/overview' },
        { id: 'daily', label: 'Daily', icon: Calendar, href: '/sales/daily' },
        { id: 'monthly', label: 'Monthly', icon: TrendingUp, href: '/sales/monthly' },
        { id: 'breakdown', label: 'Breakdown', icon: PieChart, href: '/sales/breakdown' }
      ]
    },
    {
      id: 'management',
      label: 'Management',
      type: 'section',
      items: [
        { id: 'admin', label: 'Admin', icon: UserCog, href: '/admin' },
        { id: 'performance', label: 'Performance', icon: Settings, href: '/performance' }
      ]
    }
  ];

  return (
    <div className={cn(
      "bg-gray-900 text-white h-screen transition-all duration-300 border-r border-gray-800",
      isCollapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!isCollapsed && (
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ECOMVISION
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-2 space-y-1">
        {menuItems.map((item) => {
          if (item.type === 'single') {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                )}
              >
                <item.icon size={20} className={cn(
                  "transition-colors",
                  isActive ? "text-white" : "text-gray-400 group-hover:text-blue-400"
                )} />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          }

          const isExpanded = expandedSections.includes(item.id);

          return (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => !isCollapsed && toggleSection(item.id)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <span className={cn(
                  "font-medium text-gray-300 group-hover:text-white",
                  isCollapsed && "sr-only"
                )}>
                  {item.label}
                </span>
                {!isCollapsed && (
                  <span className="text-gray-400 group-hover:text-white">
                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </span>
                )}
              </button>
              
              {!isCollapsed && isExpanded && item.items && (
                <div className="ml-4 space-y-1">
                  {item.items.map((subItem) => {
                    const isActive = location.pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.id}
                        to={subItem.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors group",
                          isActive ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                        )}
                      >
                        <subItem.icon size={16} className={cn(
                          "transition-colors",
                          isActive ? "text-white" : "text-gray-400 group-hover:text-blue-400"
                        )} />
                        <span className={cn(
                          "text-sm transition-colors",
                          isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                        )}>{subItem.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
