import { AnimationControls } from "framer-motion";
import { IHistoryEvent, IHistoryGroup, IHistoryItem } from "./types";
import _ from "lodash";
import { artItemToIArtBase } from "../../services/graphql/mappingHelpers";

const createDetailsMotion = (isMobile: boolean): any => {
  if (isMobile) return {};

  return {
    rest: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.15,
        type: "tween",
        ease: "easeIn",
        delay: 0.05,
      },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
};

const createCTAMotion = (isMobile: boolean): any => {
  if (isMobile) return {};

  return {
    rest: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.15,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };
};

const createArtHolderMotion = (isMobile: boolean): any => {
  if (isMobile) return {};

  return {
    rest: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 0,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };
};

const createFadeOut = (isMobile: boolean): any => {
  if (isMobile) return {};

  return {
    opacity: 0,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeInOut",
    },
  };
};

const createCenterArt = (isMobile: boolean, domNode: React.MutableRefObject<HTMLInputElement> | null = null): any => {
  if (isMobile) return {};

  const coordinates = domNode?.current?.getBoundingClientRect();

  let yOffSet = 0;
  if (coordinates && !isNaN(coordinates.y)) {
    // TODO calc 278 dynamicly depend on screen hight or choose one value for all???
    yOffSet = 278 - coordinates.y;
  }

  return {
    x: 0,
    y: yOffSet,
    right: "50%",
    translateX: "50%",
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeInOut",
    },
  };
};

const createResetArt = (isMobile: boolean): any => {
  if (isMobile) return {};

  return {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeInOut",
    },
  };
};

const createHideBorder = (isMobile: boolean): any => {
  if (isMobile) return {};

  return {
    borderColor: "transparent",
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeInOut",
    },
  };
};

const yearToShortYear = (year: number): string => year.toString().slice(-2).padStart(2, "0");

const prepareHistoryItemData = (
  artHolderAnimation: AnimationControls,
  artImgAnimation: AnimationControls,
  isMobile: boolean,
  historyEvent: IHistoryEvent
): IHistoryItem => {
  return {
    fadeOut: createFadeOut(isMobile),
    centerArt: createCenterArt(isMobile),
    resetArt: createResetArt(isMobile),
    artHolderAnimation: artHolderAnimation,
    artImgAnimation: artImgAnimation,
    detailsMotion: createDetailsMotion(isMobile),
    artHolderMotion: createArtHolderMotion(isMobile),
    ctaMotion: createCTAMotion(isMobile),
    hideBorder: createHideBorder(isMobile),
    historyEvent: historyEvent,
    isMobile: isMobile,
  };
};

const artItemToIHistoryEvent = (artItem: any): IHistoryEvent => {
  return {
    ...artItemToIArtBase(artItem)
  };
};

const prepareHistoryGroupData = (
    id: string,
    year: number,
    historyEvents: IHistoryEvent[],
    artHolderAnimation: AnimationControls,
    artImgAnimation: AnimationControls,
    isMobile: boolean
  ): IHistoryGroup => {
    const groupFadeOut = createFadeOut(isMobile);
    const historyItems = historyEvents.map((historyEvent: IHistoryEvent) =>
      prepareHistoryItemData(artHolderAnimation, artImgAnimation, isMobile, historyEvent)
    );
    return {
      groupFadeOut,
      historyItems,
      id,
      year,
    };
  };
  

const createHistoryGroups = (
  queryData: any,
  artHolderAnimation: AnimationControls,
  artImgAnimation: AnimationControls,
  isMobile: boolean
): IHistoryGroup[] => {
  const historyEvents = queryData.artsCollection.items.map(artItemToIHistoryEvent);
  const groupedHistoryEvents = _.groupBy(historyEvents, "year");

  const historyGroups = _.toPairs<[string, IHistoryEvent[]][]>(groupedHistoryEvents).map((pair) => {
    return prepareHistoryGroupData(
      `gr${pair[0]}`,
      Number(pair[0]),
      pair[1] as unknown as IHistoryEvent[],
      artHolderAnimation,
      artImgAnimation,
      isMobile
    );
  });

  return historyGroups;
};

export { createHistoryGroups, createCenterArt, yearToShortYear };
