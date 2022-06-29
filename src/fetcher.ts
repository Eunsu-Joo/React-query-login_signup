import { API_URL } from "./config";

type ParamObj = {
  [key: string]: any;
};
type FetcherType = {
  method: "GET" | "POST" | "DELETE" | "PUT";
  path: string;
  body?: ParamObj;
  token?: string;
};

const fetcher = async ({ method, path, body, token }: FetcherType) => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    },
    body: JSON.stringify(body)
  };
  const res = await fetch(`${API_URL}${path}`, options);

  const data = await res.json();
  return data;
};
export default fetcher;
