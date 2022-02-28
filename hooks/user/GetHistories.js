import axios from "axios";
import useSWR from "swr";
import { axiosConfig } from "utils/helper";

export default function GetHistories() {
  const mainAPI = process.env.REACT_APP_API_URL;
  const fetcher = (url) =>
    axios.get(url, axiosConfig()).then((res) => res.data);
  const { data, mutate, error } = useSWR(
    `${mainAPI}/api/v1/histories/list`,
    fetcher
  );

  return { data, mutate, error };
}
