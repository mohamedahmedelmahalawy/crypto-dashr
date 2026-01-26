import { useEffect, useState, type ChangeEvent } from "react";
import "./App.css";
import CoinCard from "./components/coin-card/CoinCard";
import LimitSelector from "./components/limit-selector/LimitSelector";

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

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`,
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
  return (
    <>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      <LimitSelector limit={limit} onLimitChange={onLimitChange} />
      {!loading && !error && (
        <main className="card-container">
          {coins.map((coin) => {
            return <CoinCard key={coin.id} {...coin} />;
          })}
        </main>
      )}
    </>
  );
}

export default App;
