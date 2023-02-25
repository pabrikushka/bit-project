import { AnimationControls } from "framer-motion";
import { IHistoryEvent, IHistoryGroup, IHistoryItem, IMediaAsset } from "./types";
import dummy2 from '../../assets/images/dummy2.jpg';
import honeybadger from '../../assets/images/honeybadger.jpg';
import _ from "lodash";

// TODO del me
const mockHistory = [
    {
        id: '1500',
        year: 2015,
        events: [
            {
                imageSrc: honeybadger  
            },
            {
                imageSrc: honeybadger   
            }
        ]
    },
    {
        id: '16',
        year: 2016,
        events: [
            {
                imageSrc: honeybadger  
            },
            {
                imageSrc: honeybadger   
            }
        ]
    },
    {
        id: '1717',
        year: 2017,
        events: [
            {
                imageSrc: honeybadger  
            },
            {
                imageSrc: honeybadger   
            }
        ]
    },
    {
        id: '18',
        year: 2018,
        events: [
            {
                imageSrc: honeybadger  
            },
            {
                imageSrc: dummy2  
            }
        ]
    }
];

const createDetailsMotion = (isMobile: boolean): any => {
    if (isMobile) return {};

    return {
        rest: {
            opacity: 0,
            y: 10,
            transition: {
                duration: .15,
                type: "tween",
                ease: "easeIn",
                delay: .05,
            }
        },
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                type: "tween",
                ease: "easeOut"
            }
        }
    };
}

const createCTAMotion = (isMobile: boolean): any => {
    if (isMobile) return {};

    return {
        rest: {
            opacity: 0,
            y: 10,
            transition: {
                duration: .15,
                type: "tween",
                ease: "easeIn",
            }
        },
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3,
                type: "tween",
                ease: "easeOut",
                delay: .1,
            }
        }
    };
}

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
            }
        },
        hover: {
            opacity: 1,
            scale: 1.2,
            transition: {
                duration: .3,
                type: "tween",
                ease: "easeOut",
                delay: .1,
            }
        }
    };
}

const createFadeOut = (isMobile: boolean): any => {
    if (isMobile) return {};

    return {
        opacity: 0,
        transition: {
            duration: .3,
            type: "tween",
            ease: "easeInOut"
        }
    };
}

const createCenterArt = (isMobile: boolean, domNode:  React.MutableRefObject<HTMLInputElement> | null = null): any => {
    if (isMobile) return {};

    const coordinates = domNode?.current?.getBoundingClientRect();

    let yOffSet = 0;
    if(coordinates && !isNaN(coordinates.y)){
        // TODO calc 278 dynamicly depend on screen hight or choose one value for all???
        yOffSet = 278 - coordinates.y;
    }

    return {
        x: 0,
        y: yOffSet,
        right: '50%',
        translateX: "50%",
        transition: {
            duration: .3,
            type: "tween",
            ease: "easeInOut"
        }
    };
}

const createResetArt = (isMobile: boolean): any => {
    if (isMobile) return {};

    return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            duration: .3,
            type: "tween",
            ease: "easeInOut"
        }
    };
}

const createHideBorder = (isMobile: boolean): any => {
    if (isMobile) return {};

    return {
        borderColor: "transparent",
        transition: {
            duration: .3,
            type: "tween",
            ease: "easeInOut"
        }
    };
}


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
        isMobile: isMobile
    }
}


const prepareHistoryGroupData = (
    id: string,
    year: number,
    historyEvents: IHistoryEvent[],
    artHolderAnimation: AnimationControls,
    artImgAnimation: AnimationControls,
    isMobile: boolean,
    ): IHistoryGroup =>{
        const groupFadeOut = createFadeOut(isMobile);
        const historyItems = historyEvents.map(
            (historyEvent: IHistoryEvent) => prepareHistoryItemData(
                artHolderAnimation,
                artImgAnimation,
                isMobile,
                historyEvent
            )
        )
        return {
            groupFadeOut,
            historyItems,
            id,
            year
        }  
}

// const artItemToIHistoryData = (artItem: any): IHistoryData =>{
//     return {
//         id: artItem.sys.id,
//         year: 2013,
//         events:[]
//     }
// }

const toMediaAsset = (mediaData: any): IMediaAsset | null  => {
    return  mediaData?
    {
        title: mediaData.title,
        url: mediaData.url
    }: null;
}

const artItemToIHistoryEvent = (artItem: any): IHistoryEvent =>{
    const eventDate = new Date(artItem.eventDate);
    const {title, btcPrice, overview} = artItem;
    return {
        id: artItem.sys.id,
        year: eventDate.getFullYear(),
        title, btcPrice, overview,
        eventDate,
        mainImage: toMediaAsset(artItem.mainImage),
        thumbnail: toMediaAsset(artItem.thumbnail),
        audio: toMediaAsset(artItem.mainImage),
        video: toMediaAsset(artItem.mainImage)
    }
}

const getDataForHistory = (
    queryData: any,
    artHolderAnimation: AnimationControls,
    artImgAnimation: AnimationControls,
    isMobile: boolean,
    ): IHistoryGroup[] =>{
    // if(!queryData) return mockHistory;
    const historyEvents = queryData.artsCollection.items.map(artItemToIHistoryEvent);
    const groupedHistoryEvents = _.groupBy(historyEvents, "year");
    console.log('groupedHistoryEvents', groupedHistoryEvents);
    // const historyGroupData: IHistoryGroup[] = [];

    const historyGroupData = _.toPairs<[string, IHistoryEvent[]][]>(groupedHistoryEvents)
    .map(
        (pair) => { 
            return prepareHistoryGroupData(
                        `gp${pair[0]}`,
                        Number(pair[0]),
                        pair[1] as unknown as IHistoryEvent[],
                        artHolderAnimation,
                        artImgAnimation,
                        isMobile,
                        );
                    }
    );

    return historyGroupData;//[...artItems, ...mockHistory]
}

const yearToShortYear = (year: number): string =>
    year.toString().slice(-2).padStart(2, "0");


export { prepareHistoryGroupData, getDataForHistory, createCenterArt, yearToShortYear };