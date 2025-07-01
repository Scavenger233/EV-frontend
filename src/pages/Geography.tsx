import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "@/lib/geoData";
import { useGeographyData } from "@/hooks/useGeography";

const countryCodeMap: Record<string, string> = {
  US: "USA",
  CN: "CHN",
  IN: "IND",
  JP: "JPN",
  FR: "FRA",
  DE: "DEU",
  BR: "BRA",
  NG: "NGA",
  RU: "RUS",
  IE: "IRL",
  ID: "IDN",
};

const Geography = () => {
  const { data, loading } = useGeographyData();

  const chartData = data.map((item) => ({
    id: countryCodeMap[item.countryCode] || item.countryCode,
    value: item.count,
  }));

  console.log("🌍 geography data from hook:", data);
  console.log(
    "🌐 geoData country ids sample:",
    geoData.features.slice(0, 5).map((f) => f.id)
  );
  console.log(
    "📌 chartData ids:",
    chartData.map((d) => d.id)
  );

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

          <div
            className="bg-white rounded-lg shadow-sm border p-6"
            style={{ height: "75vh" }}
          >
            {loading ? (
              <p>Loading...</p>
            ) : (
              <ResponsiveChoropleth
                data={chartData}
                features={geoData.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                domain={[0, Math.max(...chartData.map((d) => d.value)) || 100]}
                unknownColor="#eeeeee"
                label="properties.name"
                valueFormat=".0f"
                projectionScale={120}
                projectionTranslation={[0.5, 0.6]}
                projectionRotation={[0, 0, 0]}
                borderWidth={0.5}
                borderColor="#333333"
                legends={[
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 20,
                    translateY: -60,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: "#555",
                    itemOpacity: 0.85,
                    symbolSize: 18,
                  },
                ]}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Geography;
