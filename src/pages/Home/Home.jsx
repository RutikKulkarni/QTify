import React from "react";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";

function Home({}) {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        {/* <Section title="Songs" data={songs} type="song" /> */}
      </div>
    </>
  );
}

export default Home;
