import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import CreatePage from "./pages/CreatePage";
import Serch from "./pages/Serch";
import Profile from "./pages/Profile";
import UpdatePage from "./pages/UpdatePage";
import useFetch from "./hooks/useFetch";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const navigator = useNavigate();
  const fecthItems = async () => {
    await axios
      .get("http://localhost:4000/item")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fecthItems();
  }, []);

  const createItem = async (title, content, url) => {
    await axios
      .post("http://localhost:4000/item", {
        boardId: 0,
        title: title,
        content: content,
        memberId: 0,
        displayName: "또띠",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("요청실패여긴test");
        console.log(err);
        console.log(title, content);
      });
    navigator(url);
    fecthItems();
  };
  const deleteItem = (id) => {
    axios
      .get("http://localhost:4000/item")
      .then((res) => {
        console.log("delete : ", res.data);
        console.log("성공");
      })
      .catch((err) => {
        console.log(err);
      });
    axios.delete(`http://localhost:4000/item/${id}`);
    fecthItems();
  };
  const updateItem = async (title, content, id, url) => {
    await axios.patch(`http://localhost:4000/item/${id}`, {
      boardId: 0,
      title: title,
      content: content,
      memberId: 0,
      displayName: "또띠",
    });
    navigator(url);
    fecthItems();
  };
  const updateText = (id) => {
    let copyItems = [...items];
    const itemIndex = copyItems.findIndex((el) => {
      return el["id"] === +id;
    });
    return itemIndex;
  };

  return (
    <>
      <Routes>
        <Route
          path="/Login"
          element={
            <>
              <Login></Login>
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <SignUp></SignUp>
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Main
                items={items}
                setItems={setItems}
                deleteItem={deleteItem}
              ></Main>
            </>
          }
        ></Route>
        <Route
          path="/create"
          element={
            <>
              <CreatePage createItem={createItem}></CreatePage>
            </>
          }
        ></Route>
        <Route
          path="/serch"
          element={
            <>
              <Serch></Serch>
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <>
              <Profile></Profile>
            </>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <>
              <UpdatePage
                items={items}
                setItems={setItems}
                updateItem={updateItem}
                updateText={updateText}
              />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
