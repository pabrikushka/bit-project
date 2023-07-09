import React from "react";
import { useNavigate} from "react-router-dom";
import { GET_ART } from "../../services/graphql/artQuery";
import useImperativeQuery from "../../services/graphql/useImperativeQuery";
import { artItemToIArtPiece } from "../art/helpers";


const ArtNavigator = React.forwardRef((props: any, ref: any) => {
    const navigate = useNavigate ();
    const callQuery = useImperativeQuery(GET_ART, {
      variables: {
        id: props.artId,
      },
      errorPolicy: "all"
    });

    const handleClick = async () => {
      // TODO set loading true ???
      
      const artQuery = await callQuery();
      // if(result.data){
      //     // TODO do we need conditional navigation?
      // }
      const initialArt = artItemToIArtPiece(artQuery.data.arts);

      // cache image for next page
      if(initialArt.mainImage){
        const img = new Image();
        img.src = initialArt.mainImage.url;
        props.setAnimationImage(initialArt.mainImage.url);
        await img.decode();
      }

      navigate(`/art/${props.artId}`, { state: initialArt })
    }

    return <div
      ref={ref}
      className="art-card"
      onClick={handleClick}
    >
      {props.children}
    </div>
  });

export default ArtNavigator;