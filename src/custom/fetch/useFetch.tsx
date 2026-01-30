import { useEffect, useState } from "react";
import type { CoinData } from "../../App";

const API_URL = import.meta.env.VITE_COIN_API_URL;

function useFetch(id: string) {
  const [coin, setCoin] = useState<CoinData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error(`faild to fetch ${id} info.`);
        const data = await res.json();
        setCoin(data);
        // console.log(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown Error occured");
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);
  return { coin, error, loading };
}

export default useFetch;
