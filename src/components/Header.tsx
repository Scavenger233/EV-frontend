
import React from 'react';
import { Search, Download, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search..."
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 border-blue-600 text-white"
          >
            <Download size={16} className="mr-2" />
            Download Report
          </Button>

          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Bell size={18} />
          </Button>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-700">
            <div className="text-right">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Pharmacist</p>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <User size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
