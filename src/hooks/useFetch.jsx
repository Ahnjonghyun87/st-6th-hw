// TODO: 이곳에 커스텀훅 작성하세요.
import { useCallback, useEffect, useState } from "react";

const useFetch = (url, setTitle) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network 오류");
      }
      const result = await response.json();
      setTitle(result.title);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, setTitle]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, error };
};

export default useFetch;
