import React from "react";
import { IArtist } from "./artistModal/types";
import { IArtPiece } from "./types";
import StatsWidget from "./btcStats/StatsWidget";

interface ArtCreditsProps {
  setArtistForModalModal: any;
  artPiece: IArtPiece | undefined;
  visualArtist: IArtist | null | undefined;
}

const ArtCredits = (props: ArtCreditsProps) => {
  const { setArtistForModalModal, artPiece, visualArtist } = props;
  return (
    <>
      {/* Main Credit  */}
      <dl className="artist-credit d-flex align-items-center justify-content-between px-2 px-xxl-3 py-2 mb-4 py-xl-3">
        <dt className="fw-400">Artist</dt>
        <dd className="mb-0">
          <button className="nav-link btn-link bg-transparent border-0 p-0 d-flex align-items-center" onClick={() => setArtistForModalModal(visualArtist)}>
            <span className="h4 mb-0">{visualArtist?.name}</span>
          </button>
        </dd>
      </dl>

     <StatsWidget artPiece={artPiece} />

    </>
  );
};

export default ArtCredits;
