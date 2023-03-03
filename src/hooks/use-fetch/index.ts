import { useCallback, useEffect, useState } from 'react';

type UseFetch<T> = {
  loading: boolean;
  data: T | null;
  error: Error | null;
};

export const useFetch = <T>(
  url: string
): UseFetch<T> & { refetch: () => void } => {
  const [state, setState] = useState<UseFetch<T>>({
    loading: false,
    error: null,
    data: null,
  });

  const [refetchIndex, setRefetchIndex] = useState<number>(0);

  const refetch = useCallback(() => setRefetchIndex((prev) => prev + 1), []);

  useEffect(() => {
    const getData = async () => {
      setState({ loading: true, error: null, data: null });
      try {
        const response = await fetch(url);
        const data = (await response.json()) as T;
        setState({ loading: false, error: null, data });
      } catch (error) {
        setState({ loading: false, error: error as Error, data: null });
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchIndex]);

  return { ...state, refetch };
};

export default useFetch;
