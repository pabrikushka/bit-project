import * as React from "react";
import EventHero from "../components/events/eventHero";
import TransitAnimator from "../shared/TransitAnimator";

const Events = () => {
  return (
    <>
      <main className="overflow-hidden">
        <EventHero />
        <div className="dummy" style={{ height: 2000 }}></div>
      </main>
      <TransitAnimator image={null} />
    </>
  );
};

export default Events;
