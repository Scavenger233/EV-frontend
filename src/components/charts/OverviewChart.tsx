import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useOverviewData } from "@/hooks/useOverviewData";

interface OverviewChartProps {
  view: string; // 'sales' or 'units'
}

const OverviewChart = ({ view }: OverviewChartProps) => {
  const { data, loading, error } = useOverviewData();

  const chartData = useMemo(() => {
    if (loading || error || !data.length) return [];

    let cumulativeSales = 0;
    let cumulativeUnits = 0;

    return data.map((monthData, index) => {
      cumulativeSales += monthData.totalSales;
      cumulativeUnits += monthData.totalUnits;

      return {
        month: monthData.month,
        totalSales: cumulativeSales,
        totalUnits: cumulativeUnits,
      };
    });
  }, [data, loading, error]);

  const dataKey = view === "sales" ? "totalSales" : "totalUnits";
  const yAxisLabel = view === "sales" ? "Total Revenue ($)" : "Total Units";

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            right: 50,
            left: 70,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
          <YAxis
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            label={{
              value: yAxisLabel,
              angle: -90,
              position: "insideLeft",
              style: { textAnchor: "middle" },
            }}
          />
          <Tooltip
            formatter={(value) => [
              view === "sales"
                ? `$${value.toLocaleString()}`
                : value.toLocaleString(),
              view === "sales" ? "Revenue" : "Units",
            ]}
            labelStyle={{ color: "#374151" }}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewChart;
