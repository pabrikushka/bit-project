import React from "react";
import { IArtist } from "./artistModal/types";
import { IArtPiece } from "./types";
import StatsWidget from "./btcStats/StatsWidget";

interface ArtCreditsProps {
  setArtistForModal: any;
  artPiece: IArtPiece | undefined;
  visualArtist: IArtist | null | undefined;
}

const notReleasedArtist = "XXXXX";

const ArtCredits = (props: ArtCreditsProps) => {
  const { setArtistForModal, artPiece, visualArtist } = props;

  console.log(visualArtist);

  return (
    <>
      {/* Main Credit  */}
      <dl className="artist-credit d-flex align-items-center justify-content-between px-2 px-xxl-3 py-2 mb-4 py-xl-3">
        <dt className="fw-400">Artist</dt>
        <dd className="mb-0">
          {artPiece?.artReleased ? (
            <button
              className="nav-link btn-link bg-transparent border-0 p-0 d-flex align-items-center"
              onClick={() => setArtistForModal(visualArtist)}
            >
              <span className="h4 mb-0">{visualArtist?.name}</span>
            </button>
          ) : (
            notReleasedArtist
          )}
        </dd>
      </dl>
      <StatsWidget artPiece={artPiece} />
    </>
  );
};

export default ArtCredits;
