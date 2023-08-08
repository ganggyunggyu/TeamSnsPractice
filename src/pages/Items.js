import React from "react";
import Post from "../components/Post";
import styles from "./items.module.css";

export default function Items() {
  return (
    <div
      className={`${styles.itemsContiner} w-75 d-flex flex-column justify-content-center align-items-center`}
    >
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
}
