import { useParams } from "react-router";
import useFetch from "../../custom/fetch/useFetch";

function CoinDetails() {
  const { id } = useParams();
  const { coin, loading, error } = useFetch(id ?? "");

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {coin?.symbol}
    </div>
  );
}

export default CoinDetails;
