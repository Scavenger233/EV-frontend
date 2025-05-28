
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Geography = () => {
  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">GEOGRAPHY</h1>
            <p className="text-gray-600">Find where your users are located.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive World Map</h3>
                <p className="text-gray-600 mb-4">
                  This will display a geographic visualization of user locations with color-coded regions.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 max-w-md mx-auto">
                  <h4 className="font-medium text-blue-900 mb-2">Map Features:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Color scale legend (0.0 to 60)</li>
                    <li>• Countries shaded by user volume</li>
                    <li>• Interactive tooltips</li>
                    <li>• Responsive zoom controls</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="mt-6 flex justify-end">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">User Density</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-600">0</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-4 h-4 rounded-sm"
                        style={{ 
                          backgroundColor: `rgba(59, 130, 246, ${0.2 + (i * 0.2)})` 
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">60+</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Geography;
