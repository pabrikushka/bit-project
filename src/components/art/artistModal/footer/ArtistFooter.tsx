import React from "react";
import { IArtist } from "../types";
import SocialsFooter from "./SocialsFooter";
import MarketplaceFooter from "./MarketplaceFooter";

interface ArtistFooterProps {
  artist: IArtist;
}

const ArtistFooter = (props: ArtistFooterProps) => {
  const { artist } = props;

  console.log(artist.twitter);
  const showSocials = artist.discord || artist.instagram || artist.youTube || artist.mastodon ? true : false;
  const showMarketplace = artist.openSea || artist.foundation || artist.superRare || artist.rairable ? true : false;
  return (
    <div className="mt-3  pt-3">
      <div className="separator mt-5 mb-3"></div>
      <div className="d-flex flex-md-column">
        {showSocials ? <SocialsFooter artist={artist} /> : null}
        {showMarketplace ? <MarketplaceFooter artist={artist} /> : null}
      </div>
    </div>
  );
};

export default ArtistFooter;
