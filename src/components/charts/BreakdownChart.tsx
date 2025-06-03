import React, { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface BreakdownChartProps {
  data: { [key: string]: number };
  isDashboard?: boolean;
}

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7300",
  "#a78bfa",
  "#34d399",
];

const BreakdownChart = ({ data, isDashboard = false }: BreakdownChartProps) => {
  const chartData = useMemo(() => {
    return Object.entries(data).map(([key, value], index) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value,
      color: COLORS[index % COLORS.length],
    }));
  }, [data]);

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={`relative ${isDashboard ? "h-96" : "h-full"} w-full`}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={isDashboard ? 60 : 80}
            outerRadius={isDashboard ? 100 : 120}
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [
              `$${Number(value).toLocaleString()}`,
              "Sales",
            ]}
          />
          {!isDashboard && (
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          )}
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-600">
            {!isDashboard && "Total: "}${total.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreakdownChart;
