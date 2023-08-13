import axios from "axios";
import React, { useState } from "react";

export default function Login({ setIsLogined, setUserInfo }) {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const inputChange = (e, setValue) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    axios
      .get("http://localhost:4000/user")
      .then((res) => console.log(res))
      .catch((err) => {
        console.log("err : ", err);
      });
  };

  return (
    <div>
      <div className="container p-5">
        <h1 className="text-center">로고</h1>
      </div>
      <div className="container">
        <form className="col-6 m-auto" onSubmit={loginSubmit}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            이메일
          </label>
          <div className="row mb-3">
            <div className="col-12">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  inputChange(e, setEmail);
                }}
              ></input>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              비밀번호
            </label>
            <div className="col-12">
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                value={password}
                aria-describedby="emailHelp"
                onChange={(e) => {
                  inputChange(e, password, setPassWord);
                }}
              ></input>
            </div>
          </div>
          <button type="submit" className="mb-5 mt-5 col-12 btn btn-primary">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
