import { useParams } from "react-router";
import useFetch from "../../custom/fetch/useFetch";
import Spinner from "../../components/spinner/Spinner";
import CointChart from "../../components/coin-chart/CointChart";

function CoinDetails() {
  const { id } = useParams();
  const { coin, loading, error } = useFetch(id ?? "");

  const {
    name,
    symbol,
    image,
    description,
    market_cap_rank: marketCapRank,
    market_data: marketData,
    last_updated: lastUpdated,
    links,
  } = coin ?? {};
  return (
    <>
      <h1 className="font-bold text-4xl mb-6 mt-4 mx-auto">
        {coin ? `${name} (${symbol?.toUpperCase()})` : `Coin Details`}
      </h1>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {error && <p className="text-red-400">{error}</p>}
      {!loading && !error && coin && (
        <main className="coin-card translate-0 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <figure className="w-24 h-24">
              <img
                src={image?.large}
                alt={name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold">{name}</h2>
              <p className="text-gray-400">Rank #{marketCapRank}</p>
            </div>
          </div>

          <p className="text-gray-400 leading-7 mb-6">
            {description?.en.split(". ").slice(0, 2).join(". ") + "."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0e1117] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Current Price</p>
              <p className="text-2xl font-bold">
                ${marketData?.current_price.usd.toLocaleString()}
              </p>
            </div>
            <div className="bg-[#0e1117] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">24h Change</p>
              <p
                className={`text-2xl font-bold ${marketData?.price_change_percentage_24h && marketData.price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}
              >
                {marketData?.price_change_percentage_24h?.toFixed(2)}%
              </p>
            </div>
            <div className="bg-[#0e1117] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Market Cap</p>
              <p className="text-lg font-semibold">
                ${marketData?.market_cap.usd.toLocaleString()}
              </p>
            </div>
            <div className="bg-[#0e1117] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">24h High / Low</p>
              <p className="text-lg font-semibold">
                ${marketData?.high_24h.usd.toLocaleString()} / $
                {marketData?.low_24h.usd.toLocaleString()}
              </p>
            </div>
            <div className="bg-[#0e1117] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Total Supply</p>
              <p className="text-lg font-semibold">
                {marketData?.total_supply?.toLocaleString() || "N/A"}
              </p>
            </div>
            <div className="bg-[#0e1117] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">All-Time High</p>
              <p className="text-lg font-semibold">
                ${marketData?.ath.usd.toLocaleString()}
              </p>
              <p className="text-gray-500 text-xs">
                {new Date(marketData?.ath_date.usd ?? "").toLocaleDateString()}
              </p>
            </div>
            <div className="bg-[#0e1117] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">All-Time Low</p>
              <p className="text-lg font-semibold">
                ${marketData?.atl.usd.toLocaleString()}
              </p>
              <p className="text-gray-500 text-xs">
                {new Date(marketData?.atl_date.usd ?? "").toLocaleDateString()}
              </p>
            </div>
            <div className="bg-[#0e1117] p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Last Updated</p>
              <p className="text-lg font-semibold">
                {new Date(lastUpdated ?? "").toLocaleDateString()}
              </p>
            </div>
            <div className="bg-[#0e1117] p-4 rounded-lg col-span-full">
              <CointChart coinId={id!} />
            </div>
          </div>

          {links?.homepage && links.homepage[0] && (
            <a
              href={links.homepage[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-green-400 hover:bg-red-300 rounded-lg transition-colors w-full text-center text-[#111231] font-extrabold"
            >
              Visit Website
            </a>
          )}
        </main>
      )}
    </>
  );
}

export default CoinDetails;
