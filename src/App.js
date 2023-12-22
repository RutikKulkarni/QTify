import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./Api/Api";

function App() {
  const [searchData, useSearchData] = useState();
  const [data, setdata] = useState({});

  const generatData = (key, source) => {
    source().then((data) => {
      setdata((prevData) => {
        return {
          ...prevData,
          [key]: data,
        };
      });
    });
  };

  useEffect(() => {
    generatData("topAlbums", fetchTopAlbums);
    generatData("newAlbums", fetchNewAlbums);
    generatData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      {/* <Navbar searchData={""}/> 
      <Hero /> */}
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums, ...newAlbums]} />
        <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
