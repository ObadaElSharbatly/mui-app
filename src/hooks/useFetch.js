import { useState } from "react";
import { wait } from "../utils/helpers";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(link) {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error(`Error (${response.status}): ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }

  async function performFetch(link) {
    try {
      setIsLoading(true);
      setError(false);
      await wait(2000);
      const data = await fetchData(link);
      if (data.Response === "False") throw new Error(data.Error);
      return data;
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, performFetch };
};

export default useFetch;
