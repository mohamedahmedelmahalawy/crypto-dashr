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
    <div key={id} className="coin-card">
      <figure className="w-10 h-10">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </figure>
      <div>
        <h2>{name}</h2>
        <p>{symbol.toUpperCase()}</p>
      </div>
      <p>Price: {currenPrice.toLocaleString()}</p>
      <p>{priceChange24.toFixed(2)}%</p>
      <p>Market Cap: {marketCap.toLocaleString()}</p>
    </div>
  );
}

export default CoinCard;
