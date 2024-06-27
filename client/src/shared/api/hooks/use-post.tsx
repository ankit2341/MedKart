/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react';

const usePost = (endpoint: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const postData = useCallback(async (body: any) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }
      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { data, error, loading, post: postData };
};

export default usePost;
