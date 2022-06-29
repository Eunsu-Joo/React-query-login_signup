import React from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { QUERY_KEY } from "../config";
import fetcher from "../fetcher";
import Login from "./Login";
import Welcome from "./Welcome";
const Home = () => {
  const queryClient: QueryClient = useQueryClient();
  const jwt: any = queryClient.getQueryData(QUERY_KEY);
  const { data, isLoading } = useQuery(QUERY_KEY, () =>
    fetcher({
      method: "GET",
      path: "/api/users/me",
      token: jwt ?? ""
    })
  );
  console.log(jwt);

  return <>{jwt.data ? <Welcome /> : <Login />}</>;
};
export default Home;
