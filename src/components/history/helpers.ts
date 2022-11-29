import { AnimationControls } from "framer-motion";
import { IHistoryData, IHistoryEvent, IHistoryGroup, IHistoryItem } from "./types";
import dummy2 from '../../assets/images/dummy2.jpg';
import honeybadger from '../../assets/images/honeybadger.jpg';


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
    imageSrc: any
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
        imageSrc: imageSrc,
        isMobile: isMobile
    }
}


const prepareHistoryGroupData = (
    id: number,
    year: number,
    historyEvents: IHistoryEvent[],
    artHolderAnimation: AnimationControls,
    artImgAnimation: AnimationControls,
    isMobile: boolean,
    ): IHistoryGroup =>{
        const groupFadeOut = createFadeOut(isMobile);
        const historyItems = historyEvents.map(
            (data: any) => prepareHistoryItemData(
                artHolderAnimation,
                artImgAnimation,
                isMobile,
                data.imageSrc
            )
        )
        return {
            groupFadeOut,
            historyItems,
            id,
            year
        }  
}

const getDataForHistory = (): IHistoryData[] =>{
    return [
        {
            id: 15,
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
            id: 16,
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
            id: 17,
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
            id: 18,
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
    ]
}



export { prepareHistoryGroupData, getDataForHistory, createCenterArt };