import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Menu from "./Menu";

function Home() {
  const URL = "http://127.0.0.1:8000/api/menus";
  const [menus, setMenus] = useState([]);
  const [order, setOrder] = useState("-pk");
  const [ascDesc, setAscDesc] = useState("0");

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  useEffect(() => {
    axios({
      url: URL,
      params: {
        order: order,
        ascDesc: ascDesc,
      },
    }).then((res) => {
      setMenus(res.data);
    });
  }, [order, ascDesc]);

  const onChangeAscDesc = (event) => {
    event.preventDefault();
    setAscDesc(event.target.value);
  };

  const onChangeOrder = (event) => {
    event.preventDefault();
    setOrder(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div
          className="row"
          id="filterSection"
          style={{ margin: "2em 0", textAlign: "right" }}
        >
          <form>
            <select
              value={order}
              name="order"
              id="order"
              onChange={onChangeOrder}
            >
              <option value="-pk">최신순</option>
              <option value="title">가나다순</option>
              <option value="-score">평점순</option>
            </select>

            <select value={ascDesc} name="ascDesc" onChange={onChangeAscDesc}>
              <option value="0">오름차순</option>
              <option value="1">내림차순</option>
            </select>
          </form>
        </div>
        <div className="row" id="cardSection">
          {menus.map((menu) => (
            <Menu
              key={menu.id}
              id={menu.id}
              title={menu.title}
              imgSrc={menu.image}
              score={menu.score}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
