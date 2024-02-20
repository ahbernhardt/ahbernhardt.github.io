import React from "react";
import Layout from "/projects/statement/components/layout";
import Video from "/projects/statement/components/video";
// import useFetchAllData from "/utils/useFetchAllData";
import TheDetails from "/projects/statement/sections/TheDetails/TheDetails";
import TheMerch from "/projects/statement/sections/TheMerch/TheMerch";
import TheHero from "/projects/statement/sections/TheHero/TheHero";
import TheLook from "/projects/statement/sections/TheLook/TheLook";
import TheGames from "/projects/statement/sections/TheGames/TheGames";

const IndexPage = () => {
//   const { allHomeGames } = useFetchAllData();
//   console.log(allHomeGames);
  return (
    <Layout className="text-wolvesWhite">
      <div className="fadeIn">
        <Video />
        <TheHero />
        <TheDetails />
        <TheMerch />
        <TheGames />
        <TheLook />
      </div>
    </Layout>
  );
};

export default IndexPage;