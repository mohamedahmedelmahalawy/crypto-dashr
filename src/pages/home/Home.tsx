import type { CoinData } from "../../App";
import CoinCard from "../../components/coin-card/CoinCard";
import FilterInput from "../../components/filter-input/FilterInput";
import LimitSelector from "../../components/limit-selector/LimitSelector";
import SortSelector from "../../components/sort-selector/SortSelector";
import Spinner from "../../components/spinner/Spinner";

interface HomeProps {
  coins: CoinData[];
  filter: string;
  onFilterChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  limit: number;
  onLimitChange: (value: number) => void;
  loading: boolean;
  error: string | null;
}

function Home({
  coins,
  filter,
  onFilterChange,
  sortBy,
  onSortChange,
  limit,
  onLimitChange,
  loading,
  error,
}: HomeProps) {
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
          return b.market_cap.usd - a.market_cap.usd;
        case "market_cap_asc":
          return a.market_cap.usd - b.market_cap.usd;
        case "price_desc":
          return b.current_price - a.current_price;
        case "price_asc":
          return a.current_price - b.current_price;
        case "change_desc":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case "change_asc":
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        default:
          return 0;
      }
    });
  return (
    <>
      <h1 className="font-bold text-4xl mb-6">Crypto Dashr</h1>

      <div className="flex flex-col justify-between items-center mb-4 gap-4 sm:flex-row">
        <FilterInput filter={filter} onFilterChange={onFilterChange} />
        <LimitSelector limit={limit} onLimitChange={onLimitChange} />
        <SortSelector sortBy={sortBy} onSortChange={onSortChange} />
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <main className="card-container">
          {filteredCoins.length > 0 &&
            filteredCoins.map((coin) => {
              return (
                <CoinCard
                  key={coin.id}
                  id={coin.id}
                  symbol={coin.symbol}
                  name={coin.name}
                  image={coin.image.thumb}
                  market_data={{
                    current_price: coin.current_price,
                    price_change_24h: coin.price_change_percentage_24h,
                  }}
                  market_cap={coin.market_cap.usd}
                />
              );
            })}
          {filteredCoins.length === 0 && <p>No Match Found</p>}
        </main>
      )}
    </>
  );
}

export default Home;
