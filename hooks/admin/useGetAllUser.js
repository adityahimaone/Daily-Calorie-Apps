import axios from "axios";
import useSWR from "swr";
import { axiosConfigAdmin } from "utils/helper";

export default function useGetAllUser() {
  const mainAPI = process.env.REACT_APP_API_URL;
  const fetcher = (url) =>
    axios.get(url, axiosConfigAdmin()).then((res) => res.data);
  const { data, error } = useSWR(`${mainAPI}/api/v1/admin/users/`, fetcher);

  const loading = !data && !error;
  return { data, error, loading };
}