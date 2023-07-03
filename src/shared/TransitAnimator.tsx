import React from "react";
import TransitAnimatorWithImage from "./transitAnimator/TransitAnimatorWithImage";
import TransitAnimatorEmpty from "./transitAnimator/TransitAnimatorEmpty";

interface TransitAnimatorProps {
  image: string | null;
}

const TransitAnimator = (props: TransitAnimatorProps) => {
  const { image } = props;
  
  return (
    <>
      {image ? (
        <TransitAnimatorWithImage image={image} />
      ) : (
        <TransitAnimatorEmpty />
      )}
    </>
  );
};

export default TransitAnimator;
