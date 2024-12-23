/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";

const useDelete = (endpoint: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const deleteData = useCallback(
    async (body: any, endpoint: any) => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${localStorage.getItem("token") || ""}`,
            },
            body: JSON.stringify(body),
          },
        );
        const result = await response.json();
        setData(result);
        return result;
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

  return { data, error, loading, remove: deleteData };
};

export default useDelete;
