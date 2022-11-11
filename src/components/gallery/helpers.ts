import { Object3DNode, Vector3 } from "@react-three/fiber";
import { Euler } from "three";
import ListCards from "./data/listCards.json";
import { CardData, Vector3Numbers } from "./types";

const cardsInRow = 9;
const cardsInTotal = 63;

const minX = -10;
const stepX = 2.5;

const minY = -4.5;
const stepY = 1.5;

const calcXForId = (idInRow: number) => minX + (idInRow - 1) * stepX;
const calcYForId = (rowIndex: number) => minY + rowIndex * stepY;

const calcPositionFromId = (id: number): Vector3 | null => {
  const x = calcXForId(id % cardsInRow == 0 ? cardsInRow : id % cardsInRow);
  const y = calcYForId(Math.trunc((id - 1) / cardsInRow));
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
        item: 1,
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
    const initRorationX = -0.5;
    if(scrollY === null){
        return {
          position: [0, 1, 0],
          rotation: [initRorationX, 0, 0],
        }
    }
    return {
      position: [0, 1, 0],
      rotation: [initRorationX + scrollY, 0, 0],
    }
}

export { getListCards, hoverCard, prepareCameraConfig };
