import { useEffect, useState } from 'react';

export const useHttp = (fn, param) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fn(param);
        setData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [fn, param]);

  return [data, setData, loading, isError];
};
