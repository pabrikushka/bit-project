import React from "react";
import { IArtist } from "./artistModal/types";

interface ArtCreditsProps {
  setArtistForModalModal: any;
  arEnhanced: boolean | null | undefined;
  audioArtist: IArtist | null | undefined;
  visualArtist: IArtist | null | undefined;
}

const ArtCredits = (props: ArtCreditsProps) => {
  const { setArtistForModalModal, arEnhanced, audioArtist, visualArtist } = props;
  return (
    <>
      <h2 className="small font-aeonik text-light-70 text-uppercase">Credits</h2>
      <div className="art-credits py-3 my-3">
        <div className="art-credit py-1 my-1">
          <h3 className="small font-aeonik text-light-70">Artist</h3>
          <button className="nav-link btn-link bg-transparent border-0 p-0" onClick={() => setArtistForModalModal(visualArtist)}>
            <span className="h4">{visualArtist?.name}</span>
          </button>
        </div>
        <div className="art-credit py-1 my-1">
          <h3 className="small font-aeonik text-light-70">Label</h3>
          <h4 className="small font-aeonik text-light-70">{arEnhanced ? "AR Enchanced" : ""}</h4>
        </div>
        <div className="art-credit py-1 my-1">
          <h3 className="small font-aeonik text-light-70">Audio</h3>
          <h4 className="p"></h4>
          <button className="nav-link btn-link bg-transparent border-0 p-0" onClick={() => setArtistForModalModal(audioArtist)}>
            <span className="h4">{audioArtist?.name}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ArtCredits;
