import { Link } from "react-router";

export interface CoinCardProps {
  id: string;
  symbol: string;
  name: string;
  image: string;
  market_data: { current_price: number; price_change_24h: number };
  market_cap: number;
}
function CoinCard({
  id,
  image,
  name,
  symbol,
  market_data,
  market_cap: marketCap,
}: CoinCardProps) {
  return (
    <Link to={`/coin/${id}`}>
      <div className="coin-card">
        <div className="flex items-center gap-2 mb-4">
          <figure className="w-10 h-10">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </figure>
          <div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-gray-400 text-sm">{symbol.toUpperCase()}</p>
          </div>
        </div>
        <p>Price: ${market_data.current_price.toLocaleString()}</p>
        <p
          className={`${market_data.price_change_24h < 0 ? "text-red-400" : "text-green-400"}`}
        >
          {market_data.price_change_24h?.toFixed(2)}%
        </p>
        <p>Market Cap: ${marketCap?.toLocaleString()}</p>
      </div>
    </Link>
  );
}

export default CoinCard;
