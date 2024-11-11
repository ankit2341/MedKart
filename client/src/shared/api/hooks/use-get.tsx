/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";

const useGet = (initialEndpoint: string, immediate: boolean = true) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [endpoint, setEndpoint] = useState<string>(initialEndpoint);

  const fetchData = useCallback(
    async (newEndpoint?: string) => {
      setLoading(true);
      const finalEndpoint = newEndpoint || endpoint;
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}${finalEndpoint}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("token") || ""}`,
            },
          },
        );
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message || "Something went wrong");
        }
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    },
    [endpoint],
  );

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  const refetch = useCallback(
    (newEndpoint?: string) => {
      if (newEndpoint) {
        setEndpoint(newEndpoint);
      }
      fetchData(newEndpoint);
    },
    [fetchData],
  );

  return { data, error, loading, refetch };
};

export default useGet;
