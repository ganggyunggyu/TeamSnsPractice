import React from "react";
import "./SignUp.css";

export default function SignUp() {
  // const signUpSubmit = (e) => {
  //   e.preventDefault();
  //   const body = { email, password };
  //   console.log(body);
  //   axios
  //     .post("http://localhost:4000/user", body)
  //     .then((res) => console.log(res))
  //     .catch((err) => {
  //       console.log("err : ", err);
  //     });
  // };
  return (
    <>
      <div className="container p-5">
        <h1 className="text-center">로고123릴1232라</h1>
      </div>
      <div className="container">
        <form className="col-6 m-auto form-min-w">
          <label htmlFor="exampleInputEmail1" className="form-label">
            이메일
          </label>
          <div className="row mb-3">
            <div className="col-9">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary">
                중복확인
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              닉네임
            </label>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              비밀번호
            </label>
            <div className="col-9">
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              비밀번호 확인
            </label>
            <div className="col-9">
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
          </div>
          <button type="submit" className="mb-5 mt-5 col-9 btn btn-primary">
            회원가입
          </button>
        </form>
      </div>
    </>
  );
}
