import React from "react";

interface ArtCreditsProps {}

const ArtCredits = (props: ArtCreditsProps) => {
  return (
    <>
      <h2 className="small font-aeonik text-light-70 text-uppercase">Credits</h2>
      <div className="art-credits py-3 my-3">
        <div className="art-credit py-1 my-1">
          <h3 className="small font-aeonik text-light-70">Artist</h3>
          <h4 className="p">Illtopia</h4>
        </div>
        <div className="art-credit py-1 my-1">
          <h3 className="small font-aeonik text-light-70">Label</h3>
          <h4 className="small font-aeonik text-light-70">AR Enchanced</h4>
        </div>
        <div className="art-credit py-1 my-1">
          <h3 className="small font-aeonik text-light-70">Audio</h3>
          <h4 className="p">Dj Phantom</h4>
        </div>
      </div>
    </>
  );
};

export default ArtCredits;
