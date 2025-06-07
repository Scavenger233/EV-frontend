import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import OverviewChart from "@/components/charts/OverviewChart";
import { Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Overview = () => {
  const [view, setView] = useState("sales"); // Default view is sales

  // Modify this function to accept a string (the view value)
  const handleToggleView = (view: string) => {
    setView(view); // Set the view to sales or units
  };

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Overview of General Revenue and Profit
            </h1>
            <p className="text-gray-600">View your overall sales and units</p>
          </div>

          <div className="flex justify-between mb-6">
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary">
                {view === "sales" ? "Sales" : "Units"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Update the onClick event to pass a string directly */}
                <Dropdown.Item onClick={() => handleToggleView("sales")}>
                  Sales
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleToggleView("units")}>
                  Units
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div
            className="bg-white rounded-lg shadow-sm border p-6"
            style={{ height: "75vh" }}
          >
            <OverviewChart view={view} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
