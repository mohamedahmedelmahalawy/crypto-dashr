export interface CoinCardProps {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_24h: number;
  market_cap: number;
}
function CoinCard({
  id,
  image,
  name,
  symbol,
  current_price: currenPrice,
  price_change_24h: priceChange24,
  market_cap: marketCap,
}: CoinCardProps) {
  return (
    <div className="coin-card">
      <div className="flex items-center gap-2 mb-4">
        <figure className="w-10 h-10">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </figure>
        <div>
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-gray-400 text-sm">{symbol.toUpperCase()}</p>
        </div>
      </div>
      <p>Price: ${currenPrice.toLocaleString()}</p>
      <p className={`${priceChange24 < 0 ? "text-red-400" : "text-green-400"}`}>
        {priceChange24?.toFixed(2)}%
      </p>
      <p>Market Cap: {marketCap.toLocaleString()}</p>
    </div>
  );
}

export default CoinCard;
