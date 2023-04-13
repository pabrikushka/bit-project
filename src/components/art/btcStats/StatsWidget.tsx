import React from "react";
import { IArtPiece } from "../types";
import { formatEventDate, notNullOrUndefined } from "../../../shared/artHelpers";
import SubStatWithGraph from "./SubStatWithGraph";
import SubStat from "./SubStat";
import SubStatWithColor from "./SubStatWithColor";

interface StatsWidgetProps {
  artPiece: IArtPiece | undefined;
}

const StatsWidget = (props: StatsWidgetProps) => {
  const { artPiece } = props;
  return (
    <>
      {/* Stats  */}
      <div className="mb-5">
        {/* Main  */}
        <dl className="art-stat art-stat-main d-flex align-items-center justify-content-between py-2 mb-4 px-2 px-xxl-3">
          <dt className="small fw-400 font-aeonik text-light-70 text-uppercase">BTC On this day</dt>
          <dd className="small fw-400 font-aeonik text-light-70 text-uppercase mb-0">MAY 24, 2020</dd>
        </dl>
        <SubStat name="Circulating Supply" value={artPiece?.circulatingSupply} />
        <SubStat name="Market Cap" value={notNullOrUndefined(artPiece?.marketCap) ? `$${artPiece?.marketCap?.toLocaleString()}` : null} />
        <SubStat name="Number of Addresses" value={artPiece?.numberOfAddresses} />
        <SubStat name="Block Number" value={artPiece?.blockNumber} />
        <SubStat name="Block Size" value={artPiece?.blockHeight} />
        <SubStat name="Hash Rate" value={notNullOrUndefined(artPiece?.marketCap) ? `${artPiece?.hashRate?.toLocaleString()} MH/s` : null} />
        <SubStatWithGraph
          priceChangeName="Price Change (1M)"
          priceChange={artPiece?.priceChange1Month}
          priceChangeColourIsGreen={artPiece?.priceChange1MonthColour}
          priceChangeGraph={artPiece?.priceChange1MonthGraph}
        />
        <SubStatWithGraph
          priceChangeName="Price Change (3M)"
          priceChange={artPiece?.priceChange3Month}
          priceChangeColourIsGreen={artPiece?.priceChange3MonthColour}
          priceChangeGraph={artPiece?.priceChange3MonthGraph}
        />
        <SubStatWithGraph
          priceChangeName="Price Change (1Y)"
          priceChange={artPiece?.priceChange1Year}
          priceChangeColourIsGreen={artPiece?.priceChange1YearColour}
          priceChangeGraph={artPiece?.priceChange1YearGraph}
        />
        <SubStatWithColor
          name="Return Since Event"
          value={notNullOrUndefined(artPiece?.returnSinceEvent) ? `${artPiece?.returnSinceEvent}%` : null}
          valueColourIsGreen={artPiece?.returnSinceEventColour}
        />
      </div>
    </>
  );
};

export default StatsWidget;
