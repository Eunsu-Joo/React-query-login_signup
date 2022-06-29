import React, { FormEvent } from "react";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY } from "../config";
import fetcher from "../fetcher";
import useInputs from "../hooks/useInputs";

const Login = () => {
  const queryClient = useQueryClient();
  const { inputs, onChange } = useInputs(["identifier", "password"]);
  const loginMutation = useMutation(
    (fileds: { identifier: string; password: string } | {}) =>
      fetcher({
        method: "POST",
        path: "/api/auth/local",
        body: fileds
      }),
    {
      onSuccess: (data) => {
        if (data.jwt) {
          alert("로그인 성공!");
          queryClient.invalidateQueries(QUERY_KEY);
          queryClient.setQueryData(QUERY_KEY, { data: data.jwt });
        } else {
          alert("비밀번호 혹은 아이디가 일치하지 않습니다.");
        }
      }
    }
  );
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmptyField = !inputs["identifier"] || !inputs["password"];
    if (isEmptyField) {
      alert("빈칸을 모두 채워주세요");
    } else {
      loginMutation.mutate(inputs);
    }
  };
  return (
    <section>
      <h1>LOGIN</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            id="userEmail"
            name="identifier"
            value={inputs["identifier"]}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="userPw">Password</label>
          <input
            type="password"
            id="userPw"
            name="password"
            value={inputs["password"]}
            onChange={onChange}
          />
        </div>
        <button>LOGIN</button>
      </form>
    </section>
  );
};
export default Login;
