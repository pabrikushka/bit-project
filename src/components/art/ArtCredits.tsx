import React from "react";

interface ArtCreditsProps {
  isModal: boolean;
  setIsModal: any;
}

const ArtCredits = (props: ArtCreditsProps) => {
  const { isModal, setIsModal } = props;
  return (
    <>
      <h2 className="small font-aeonik text-light-70 text-uppercase">Credits</h2>
      <div className="art-credits py-3 my-3">
        <div className="art-credit py-1 my-1">
          <h3 className="small font-aeonik text-light-70">Artist</h3>
          <button className="nav-link btn-link bg-transparent border-0 p-0" 
          onClick={() => setIsModal(!isModal)}>
            <span className="h4">
              Illtopia
            </span>
          </button>
        </div>
        <div className="art-credit py-1 my-1">
          <h3 className="small font-aeonik text-light-70">Label</h3>
          <h4 className="small font-aeonik text-light-70">AR Enchanced</h4>
        </div>
        <div className="art-credit py-1 my-1">
          <h3 className="small font-aeonik text-light-70">Audio</h3>
          <h4 className="p"></h4>
          <button className="nav-link btn-link bg-transparent border-0 p-0" 
          onClick={() => setIsModal(!isModal)}>
            <span className="h4">
              Dj Phantom
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ArtCredits;
