import { useEffect, useState } from "react";
import "./App.css";
import CoinCard from "./components/coin-card/CoinCard";
import LimitSelector from "./components/limit-selector/LimitSelector";
import FilterInput from "./components/filter-input/FilterInput";
import SortSelector from "./components/sort-selector/SortSelector";

const API_URL = import.meta.env.VITE_API_URL;

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;

  current_price: number;
  market_cap: number;
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

  last_updated: string;
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
        console.log(data);
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

  const filteredCoins = coins
    .filter(
      (coin) =>
        coin.name.toLocaleLowerCase().includes(filter) ||
        coin.symbol.toLocaleLowerCase().includes(filter),
    )
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "market_cap_desc":
          return b.market_cap - a.market_cap;
        case "market_cap_asc":
          return a.market_cap - b.market_cap;
        case "price_desc":
          return b.current_price - a.current_price;
        case "price_asc":
          return a.current_price - b.current_price;
        case "change_desc":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case "change_asc":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        default:
          return 0;
      }
    });
  return (
    <>
      <h1 className="font-bold text-4xl mb-6">Crypto Dashr</h1>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}

      <div className="flex flex-col justify-between items-center mb-4 gap-4 sm:flex-row">
        <FilterInput filter={filter} onFilterChange={onFilterChange} />
        <LimitSelector limit={limit} onLimitChange={onLimitChange} />
        <SortSelector sortBy={sortBy} onSortChange={onSortChange} />
      </div>
      {!loading && !error && (
        <main className="card-container">
          {filteredCoins.length > 0 &&
            filteredCoins.map((coin) => {
              return <CoinCard key={coin.id} {...coin} />;
            })}
          {filteredCoins.length === 0 && <p>No Match Found</p>}
        </main>
      )}
    </>
  );
}

export default App;
