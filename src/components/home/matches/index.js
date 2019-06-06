import React from "react";
import { Tag } from "../../ui/misc";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bck="#0e1713" size="50px" color="#fff">
          Matches
        </Tag>{" "}
        BLOCKS
        <Tag bck="#fff" size="22px" color="#0e1713" link linkto="/the_team">
          See more matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;