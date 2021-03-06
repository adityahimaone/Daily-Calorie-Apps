import { useState, useEffect } from "react";

export default function useFetch({
  api,
  method,
  url,
  data = null,
  config = null,
}) {
  const [response, setResponse] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    api[method](url, JSON.parse(config), JSON.parse(data))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [api, method, url, data, config]);

  return { response, error, isLoading };
}
