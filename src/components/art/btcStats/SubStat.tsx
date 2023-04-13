import React from "react";
import { notNullOrUndefined } from "../../../shared/artHelpers";

interface SubStatProps {
  name: string,
  value: number | string | null | undefined
}

const SubStat = (props: SubStatProps) => {
  const { name,  value} = props;

  const shouldBeShow = notNullOrUndefined(value);
  const formatedValue = shouldBeShow && typeof value === "number" ? value.toLocaleString(): value;

  return shouldBeShow ? (
    <>
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            {name}
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0">
            {formatedValue}
          </dd>
        </dl>
       
    </>
  ): null;
};

export default SubStat;
