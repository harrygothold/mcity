import React, { Component } from "react";
import CircularProgress from "@material-ui/core";

import { firebaseMatches } from "../../firebase";
import { firebaseLooper, reverseArray } from "../ui/misc";
import LeagueTable from "./table";
import MatchesList from "./MatchesList";

class TheMatches extends Component {
  state = {
    loading: true,
    matches: [],
    filteredMatches: [],
    playedFilter: "All",
    resultFilter: "All"
  };

  componentDidMount() {
    firebaseMatches.once("value").then(snapshot => {
      const matches = firebaseLooper(snapshot);
      this.setState({
        loading: false,
        matches: reverseArray(matches),
        filteredMatches: reverseArray(matches)
      });
    });
  }

  showPlayed = played => {
    const { matches } = this.state;
    const list = matches.filter(match => {
      return match.final === played;
    });
    this.setState({
      filteredMatches: played === "All" ? matches : list,
      playedFilter: played,
      resultFilter: "All"
    });
  };

  showResult = result => {
    const { matches } = this.state;
    const list = matches.filter(match => {
      return match.result === result;
    });
    this.setState({
      filteredMatches: result === "All" ? matches : list,
      playedFilter: "All",
      resultFilter: result
    });
  };

  render() {
    const { loading, filteredMatches, playedFilter, resultFilter } = this.state;
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">
              <div className="match_filters_box">
                <div className="tag">Show Match</div>
                <div className="cont">
                  <div
                    className={`option ${
                      playedFilter === "All" ? "active" : ""
                    }`}
                    onClick={() => this.showPlayed("All")}
                  >
                    All
                  </div>
                  <div
                    className={`option ${
                      playedFilter === "Yes" ? "active" : ""
                    }`}
                    onClick={() => this.showPlayed("Yes")}
                  >
                    Played
                  </div>
                  <div
                    className={`option ${
                      playedFilter === "No" ? "active" : ""
                    }`}
                    onClick={() => this.showPlayed("No")}
                  >
                    Not Played
                  </div>
                </div>
              </div>
              <div className="match_filters_box">
                <div className="tag">Game Result</div>
                <div className="cont">
                  <div
                    className={`option ${
                      resultFilter === "All" ? "active" : ""
                    }`}
                    onClick={() => this.showResult("All")}
                  >
                    All
                  </div>
                  <div
                    className={`option ${resultFilter === "W" ? "active" : ""}`}
                    onClick={() => this.showResult("W")}
                  >
                    W
                  </div>
                  <div
                    className={`option ${resultFilter === "L" ? "active" : ""}`}
                    onClick={() => this.showResult("L")}
                  >
                    L
                  </div>
                  <div
                    className={`option ${resultFilter === "D" ? "active" : ""}`}
                    onClick={() => this.showResult("D")}
                  >
                    D
                  </div>
                </div>
              </div>
            </div>
            <MatchesList matches={filteredMatches} />
          </div>
          <div className="right">
            <LeagueTable />
          </div>
        </div>
      </div>
    );
  }
}

export default TheMatches;
