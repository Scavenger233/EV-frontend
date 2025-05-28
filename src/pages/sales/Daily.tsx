
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const DailyChart = ({ startDate, endDate }: { startDate: Date | undefined, endDate: Date | undefined }) => {
  return (
    <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg mt-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Sales Chart</h3>
        <p className="text-gray-600 mb-4">
          Line chart showing daily sales data between selected dates.
        </p>
        <div className="bg-green-50 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-sm text-green-800">
            Date Range: {startDate ? format(startDate, "MMM dd, yyyy") : "Not selected"} - {endDate ? format(endDate, "MMM dd, yyyy") : "Not selected"}
          </p>
        </div>
      </div>
    </div>
  );
};

const Daily = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date("2021-03-01"));

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">DAILY SALES</h1>
            <p className="text-gray-600">Chart of daily sales</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6" style={{ height: '75vh' }}>
            <div className="flex justify-end gap-4 mb-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-48 justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-48 justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "End date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    disabled={(date) => startDate ? date < startDate : false}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <DailyChart startDate={startDate} endDate={endDate} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Daily;
