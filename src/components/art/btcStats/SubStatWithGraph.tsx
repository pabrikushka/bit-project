import React from "react";
import { IMediaAsset } from "../../../shared/types";
import { notNullOrUndefined } from "../../../shared/artHelpers";


interface SubStatWithGraphProps {
  priceChangeName: string;
  priceChange: number | null | undefined;
  priceChangeColourIsGreen: boolean | null | undefined;
  priceChangeGraph: IMediaAsset | null | undefined;
}

const SubStatWithGraph = (props: SubStatWithGraphProps) => {
  const { priceChangeName, priceChange, priceChangeColourIsGreen, priceChangeGraph } = props;
  const valueClassName = `small font-aeonik fw-400 text-light-70 mb-0 ${priceChangeColourIsGreen ? "text-green" : "text-red"} d-flex align-items-center`;
  const shouldBeShow =
    priceChangeGraph && notNullOrUndefined(priceChangeColourIsGreen) && notNullOrUndefined(priceChange);
    
  return shouldBeShow ? (
    <>
      {/* Subs With Graphs and Dynamic Text Color */}
      <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
        <dt className="small font-aeonik fw-400 text-light-100">{priceChangeName}</dt>
        <dd className={valueClassName}>
          <img src={priceChangeGraph.url} className="art-stat-img me-2"/>
          {priceChange}%
        </dd>
      </dl>
    </>
  ) : null;
};

export default SubStatWithGraph;
