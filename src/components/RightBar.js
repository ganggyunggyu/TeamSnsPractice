import React from "react";
import styles from "./RightBar.module.css";
import { useNavigate } from "react-router-dom";

export default function RightBar() {
  const navigator = useNavigate();
  return (
    <div
      className={`${styles.rightBarContainer} row col-lg-2 col-3 d-none d-md-flex`}
    >
      <div
        className={`${styles.profileContainer} w-md-100 d-flex flex-column mt-3 mt-lg-5`}
      >
        <div className={`${styles.profileText}fs-5 col-12 text-center`}>
          <p>반가워요 침착맨님!</p>
        </div>
        <div
          className="mt-lg-5 col-12 d-flex justify-content-center align-items-center"
          onClick={() => {
            navigator("/profile");
          }}
        >
          <div className="profile-img-box">
            <img
              className="rounded-circle w-100 h-100"
              src="https://m.segye.com/content/image/2022/12/28/20221228504589.jpg"
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center mt-1 mt-lg-5">
          <button
            type="button"
            className="main-back-color fs-5"
            onClick={() => {
              navigator("/login");
            }}
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}
