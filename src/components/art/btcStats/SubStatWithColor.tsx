import React from "react";
import { notNullOrUndefined } from "../../../shared/artHelpers";

interface SubStatWithColorProps {
  name: string;
  value: number | string | null | undefined;
  valueColourIsGreen: boolean | null | undefined;
}

const SubStatWithColor = (props: SubStatWithColorProps) => {
  const { name, value, valueColourIsGreen } = props;

  const shouldBeShow = notNullOrUndefined(value);
  const formatedValue = shouldBeShow && typeof value === "number" ? value.toLocaleString(): value;
  const valueClassName = `small font-aeonik fw-400 text-light-70 mb-0 ${valueColourIsGreen ? "text-green" : "text-red"} d-flex align-items-center`;

  return shouldBeShow ? (
    <>
      <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
        <dt className="small font-aeonik fw-400 text-light-100">{name}</dt>
        <dd className={valueClassName}>{formatedValue}</dd>
      </dl>
    </>
  ) : null;
};

export default SubStatWithColor;
