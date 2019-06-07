import React from "react";
import Featured from "./featured";
import MatchesHome from "./matches";
import MeetPlayers from "./MeetPlayers/Cards";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MatchesHome />
      <MeetPlayers />
    </div>
  );
};

export default Home;
