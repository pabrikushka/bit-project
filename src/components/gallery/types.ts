import { Euler, Vector3 } from "@react-three/fiber";

export interface CardData {
    id: number,
    position: Vector3,
    rotation: Euler,
    item: number
}

export type Vector3Numbers = [x: number, y: number, z: number]