import React, { FormEvent } from "react";
import useInputs from "../hooks/useInputs";
const Signup = () => {
  const { inputs, onChange } = useInputs(["username", "email", "password"]);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const pwRegExp = /(?=.*[a-z])(?=.*[A-Z]).{6,15}/;
    event.preventDefault();
    const isEmptyField =
      !inputs["username"] || !inputs["email"] || !inputs["password"];
    const isRegExp = !pwRegExp.test(inputs["password"]);
    if (isEmptyField) return alert("빈칸을 모두 채워주세요");
    if (isRegExp) return alert("비밀번호는 대문자 1개이상이 들어가야 합니다.");
  };
  return (
    <section>
      <h1>SIGNUP</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input
            id="username"
            name="username"
            value={inputs["username"]}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            id="userEmail"
            name="email"
            value={inputs["email"]}
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
        <button>SIGNUP</button>
      </form>
    </section>
  );
};
export default Signup;
