import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWordCheck, setPassWordCheck] = useState("");
  const [displayName, setDisplayName] = useState("");
  let emailRegCheck = false;
  let emailOverlapCheck = true;

  const [emailCheck, setEmailCheck] = useState(false);

  const inputChange = (e, setValue) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const signUpSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/user`, {
        email: "emailTest",
        passWord: "passWordTest",
        displayName: "닉네임",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //정규식에 안맞는 상황
  //중복되는 상황
  //모두 해당이 안되는 상황
  const emailCheckResult = (result) => {
    console.log(emailCheck);
    if (result === 1) {
      alert("이메일 형식을 확인하세요");
    }
    if (result === 2) {
      alert("이메일이 중복됩니다");
    }
    if (emailRegCheck && emailOverlapCheck) {
      setEmailCheck(true);
      alert("사용 가능 한 이메일입니다");
    }
  };

  const inputEmailRegTest = () => {
    const emailReg = new RegExp(
      "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );
    if (!emailReg.test(email)) {
      return emailCheckResult(1);
    } else {
      emailRegCheck = true;
    }
  };

  const getEmailOverlapCheck = () => {
    axios
      .get(`http://localhost:4000/user`)
      .then((res) => {
        const emailList = [...res.data];
        for (const el of emailList) {
          const dbEmail = el["email"];
          if (dbEmail === email) {
            emailOverlapCheck = false;
            emailCheckResult(2);
            break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const emailOverlapCheckSubmit = (e) => {
    e.preventDefault();
    inputEmailRegTest();
    getEmailOverlapCheck();
  };

  return (
    <>
      <div className="container p-5">
        <h1 className="text-center">로고123릴1232라</h1>
      </div>
      <div className="container">
        <form className="col-6 m-auto form-min-w" onSubmit={signUpSubmit}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            이메일
          </label>
          <div className="row mb-3 col-10 p-0">
            <div className="col-10">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  inputChange(e, setEmail);
                }}
              ></input>
            </div>
            <div className="col-2 p-0">
              <button
                type="submit"
                className="btn btn-primary w-100 h-100"
                onClick={emailOverlapCheckSubmit}
              >
                중복확인
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              닉네임
            </label>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  inputChange(e, setDisplayName);
                }}
              ></input>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              비밀번호
            </label>
            <div className="col-10">
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  inputChange(e, setPassWord);
                }}
              ></input>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              비밀번호 확인
            </label>
            <div className="col-10">
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => {
                  inputChange(e, setPassWordCheck);
                }}
              ></input>
            </div>
          </div>
          <button type="submit" className="mb-5 mt-5 col-2 btn btn-primary">
            회원가입
          </button>
        </form>
      </div>
    </>
  );
}
