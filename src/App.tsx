import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import NotFound from "./pages/not-found/NotFound";
import CoinDetails from "./pages/coin-details/CoinDetails";

const API_URL: string = import.meta.env.VITE_COINS_API_URL;

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: { large: string; small: string; thumb: string };
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    high_24h: { usd: number };
    low_24h: { usd: number };
    price_change_24h: number;
    price_change_percentage_24h: number;
    total_supply: number;
    ath_date: { usd: Date };
    ath: { usd: string };
    atl_date: { usd: string };
    atl: { usd: string };
  };

  links: { homepage: string };
  description: { en: string };
  current_price: number;
  market_cap: { usd: number };
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;

  high_24h: number;
  low_24h: number;

  price_change_24h: number;
  price_change_percentage_24h: number;

  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;

  circulating_supply: number;
  total_supply: number;
  max_supply: number;

  ath: number;
  ath_change_percentage: number;
  ath_date: string;

  atl: number;
  atl_change_percentage: number;
  atl_date: string;

  roi: any;

  last_updated: Date;
}

function App() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState<number>(10);
  const [filter, setFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("market_cap_desc");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=$market_cap_desc&per_page=${limit}&page=1&sparkline=false`,
        );
        if (!res.ok) throw new Error("Faild to fetch data");
        const data = await res.json();

        setCoins(data);
        // console.log(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown Error occured");
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  const onLimitChange = (value: number) => {
    setLimit(Number(value));
  };
  const onFilterChange = (value: string) => {
    setFilter(value);
  };
  const onSortChange = (value: string) => {
    setSortBy(value);
  };

  const homeProps = {
    coins,
    filter,
    onFilterChange,
    sortBy,
    onSortChange,
    limit,
    onLimitChange,
    loading,
    error,
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home {...homeProps} />} />
        <Route path="/about" element={<About />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
