import React, { useState, useEffect } from "react";
import api from "../../../api";
import Header from "../../organisms/header/Header";
import Hero from "../../organisms/hero/Hero";
import Search from "../../molecules/search/Search";
import MainContent from "./MainContent";
import { GamesProvider } from "./Provider";
import MainTemplate from "../../templates/pageTemplate/PageTemplate";
import "./main.scss";

const Main = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    const getGameList = async () => {
      const response = await api.get(`/games`);

      setdata(response.data);
    };
    getGameList();
  }, []);

  return (
    <GamesProvider games={data}>
      <MainTemplate
        header={<Header />}
        hero={
          <Hero
            title="Lorem ipsum dolor sit amet consectetur"
            highLight="With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!"
          >
            <Search></Search>
          </Hero>
        }
      >
        <MainContent></MainContent>
      </MainTemplate>
    </GamesProvider>
  );
};
export default Main;
