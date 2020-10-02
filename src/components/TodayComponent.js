import React from "react";
import { StockCard } from "./StockCardComponent";
import DayGain from "./DayGainComponent";

class Today extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Today</h1>
        <div className="today-container">
          <div className="gain-loss-block">
            <h3>Gain/Loss</h3>
            <DayGain />
          </div>
          <div>
            <h3>Top Movers</h3>
            <StockCard />
            <h3 className="bottom-block">Top Losers</h3>
            <StockCard />
          </div>
        </div>
        <div>{/* News */}</div>
      </React.Fragment>
    );
  }
}

export default Today;
