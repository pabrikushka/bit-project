import { Vector3 } from "@react-three/fiber";
import { Euler } from "three";
import ListCards from "./data/listCards.json";
import { CardData, Vector3Numbers } from "./types";

const cardsInRow = 9;
const cardsInTotal = 81;

const minX = -10;
const stepX = 2.1;

const minY = -4.5;
const stepY = 1.1;

const calcXForId = (idInRow: number) => minX + (idInRow - 1) * stepX;
const calcYForId = (rowIndex: number) => minY + rowIndex * stepY;

const calcPositionFromId = (id: number): Vector3 | null => {
  const rowIndex = Math.trunc((id - 1) / cardsInRow);
  const y = calcYForId(rowIndex);

  const oddXOffset = rowIndex % 2 * stepX/2;

  const x = calcXForId(id % cardsInRow == 0 ? cardsInRow : id % cardsInRow) + oddXOffset; 
  return [x, y, 3];
};

// generates block of cards and trying to use data from json if id matched
const getListCards = (): CardData[] => {
  const listCardData = [...ListCards];
  const listCards = [];

  for (let index = 0; index < cardsInTotal; index++) {
    const defRotation = new Euler();
    const id = index + 1;
    const foundCardData = listCardData.find((c: any) => c.id === id);

    const position = foundCardData && foundCardData.position ? (foundCardData.position as Vector3) : calcPositionFromId(id);
    const rotation = foundCardData && foundCardData.rotation ? (foundCardData.rotation as any) : defRotation;

    if (position) {
      listCards.push({
        id,
        position,
        rotation,
        item: 1 
      });
    }
  }
  return listCards;
};

const hoverCard = (cardData: CardData): CardData => {
  const numPosition = cardData.position as Vector3Numbers;
  const position: Vector3 = [numPosition[0], numPosition[1] + 0.1, numPosition[2] + 0.2];
  const rotation = new Euler(-0.1, 0, 0);
  return {
    ...cardData,
    position,
    rotation,
  };
};

const prepareCameraConfig = (scrollY: number| null): any =>{
    const initPositionX = 2; 
    const initPositionY = -2; 
    const initPositionZ = -0.4; 

    const initRorationX = -0.7;
    const initRorationY = 0;
    if(scrollY === null){
        return {
          position: [0, 0, 0],
          rotation: [initRorationX, 0, 0],
        }
    }
    return {
      position: [initPositionX + scrollY*5, initPositionY + scrollY*2, initPositionZ - scrollY/3],
      rotation: [initRorationX + scrollY, initRorationY - scrollY/4, initRorationY - scrollY/4],
    }
}

export { getListCards, hoverCard, prepareCameraConfig };
