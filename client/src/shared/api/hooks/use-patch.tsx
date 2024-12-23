/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";

const usePatch = (endpoint: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const patchData = useCallback(
    async (body: any, newEndPoint?: any) => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}${newEndPoint ? newEndPoint : endpoint}`,
          {
            method: "PATCH",
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

  return { data, error, loading, patch: patchData };
};

export default usePatch;
