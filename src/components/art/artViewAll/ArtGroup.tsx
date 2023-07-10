import React, { useEffect, useState } from "react";
import ArtItem from "./ArtItem";
import { Container, Row } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_WHOLE_HISTORY } from "../../../services/graphql/historyQuery";
import { NavLink, useParams } from "react-router-dom";

type Props = {
  setAnimationImage: any;
};

const ArtGroup = (props: Props) => {
  const { artId } = useParams(); // current item ID from query
  const { setAnimationImage } = props;

  // all items
  const { data: queryData } = useQuery(GET_WHOLE_HISTORY, {
    errorPolicy: "all",
  });
  const items = queryData?.artsCollection?.items || [];

  const getNextItems = () => {
    const index = items.findIndex((item) => item.sys.id === artId);

    if (index === -1) {
      return []; // Item with the given ID not found
    }

    const itemsCount = items.length;
    const nextIndex = (index + 1) % itemsCount;
    const secondNextIndex = (index + 2) % itemsCount;

    if (index === itemsCount - 2) {
      return [items[nextIndex], items[0]]; // last and first items
    } else if (index === itemsCount - 1) {
      return [items[0], items[1]]; // first two items
    } else {
      return [items[nextIndex], items[secondNextIndex]]; //next two items
    }
  };

  return (
    <Container className="px-xl-5">
      <section className="art-section-mini pt-5 my-5">
        <div className="d-flex align-items-end justify-content-between">
          <h2 className="mb-0  fw-light">More</h2>
          <NavLink
            to="/history"
            className="nav-link m-0 mb-1 p-0 text-uppercase"
          >
            VIew all
          </NavLink>
        </div>
        <Row className="g-0">
          {items &&
            getNextItems().map((item) => (
              <ArtItem
                itemData={item}
                key={item.sys.id}
                setAnimationImage={setAnimationImage}
              />
            ))}
        </Row>
      </section>
    </Container>
  );
};

export default ArtGroup;
