import { useEffect, useState } from "react";
import axios from "axios";

import { Santa } from "./components/santa";
import { Deer } from "./components/deer";
import { Elk } from "./components/elk";
import { Snowflakes } from "./components/snowflakes";
import { Balls } from "./components/balls";

import "./App.css";

const defaultUrl = "https://www.youtube.com/watch?v=kjte2Oe1n1U";

function App() {
  const [query, SetQuery] = useState<null | string>(null);

  const getUrl = async () => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (!to) {
      const url = prompt("Введите ссылку на подарок", defaultUrl) ?? defaultUrl;
      const response = await axios.get("https://clck.ru/--", { params: { url } });
      if (response.status === 200) return (window.location.href = `${window.location.href}?to=${response.data}`);
      return (window.location.href = `${window.location.href}?to=${url}`);
    }
    SetQuery(params.get("to"));
  };

  useEffect(() => {
    getUrl();
  }, []);

  return (
    <>
      <Balls />
      <Santa link={query ?? defaultUrl} />
      <Deer />
      <Elk />
      <Snowflakes />
      <h1 className="title">
        Happy New Year
        <br />
        <span className="sub-title">Click Santa</span>
      </h1>
    </>
  );
}

export default App;
