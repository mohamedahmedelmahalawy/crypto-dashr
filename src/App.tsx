import { useEffect, useState } from "react";
import "./App.css";
import CoinCard from "./components/coin-card/CoinCard";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

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

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(API_URL);
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
  }, []);
  return (
    <>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <main className=" grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 ">
          {coins.map((coin) => {
            return <CoinCard {...coin} />;
          })}
        </main>
      )}
    </>
  );
}

export default App;
