import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
);

const API_URL = import.meta.env.VITE_COIN_API_URL;

interface CointChartProps {
  coinId: string;
}
interface PricePoint {
  x: number;
  y: number;
}
interface DatasetType {
  label: string;
  data: PricePoint[];
  fill: boolean;
  borderColor: string;
  backgroundColor: string;
  pointRadius: number;
  tension: number;
}

interface ChartDataType {
  datasets: DatasetType[];
}

function CointChart({ coinId }: CointChartProps) {
  const [chartData, setChartData] = useState<ChartDataType>({ datasets: [] });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch(
        `${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`,
      );
      const data = await res.json();
      console.log(data);
      const prices: PricePoint[] = data.prices.map(
        (price: [number, number]) => ({
          x: price[0],
          y: price[1],
        }),
      );
      console.log(prices);
      setChartData({
        datasets: [
          {
            label: `Price (USD)`,
            data: prices,
            fill: true,
            borderColor: "#007bff",
            backgroundColor: `rgba(0,123,255,0.1)`,
            pointRadius: 0,
            tension: 0.3,
          },
        ],
      });
      setLoading(false);
    };
    fetchPrices();
  }, [coinId]);

  if (loading) return <p className="text-green-400">Loading Chart...</p>;

  return (
    <div className="mt-8 ">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: { mode: "index", intersect: false },
          },
          scales: {
            x: {
              type: "time",
              time: { unit: "day" },
              ticks: { autoSkip: true, maxTicksLimit: 7 },
            },
            y: {
              ticks: { callback: (value) => `$${value.toLocaleString()}` },
            },
          },
        }}
      />
    </div>
  );
}

export default CointChart;
