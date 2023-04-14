import * as React from "react"
import {useState} from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useAnimation } from "framer-motion";
import { motion, MotionCanvas, } from "framer-motion-3d"

interface ModelProps {
    modelPath: string;
    position?: [number, number, number];
    scale?: [number, number, number];
    rotation?: {
        x: number;
        y: number;
        z: number;
    };
    motionConfig?: {
        [key: string]: any;
    };
}

export default function Model(props: ModelProps) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    
    // update the rotation of the model based on the mouse position
    useFrame(({ mouse }) => {
      setRotation({
        x: (mouse.y * Math.PI) / 4,
        y: (mouse.x * Math.PI) / 4,
      });
    });
    
    const gltf = useLoader(GLTFLoader, props.modelPath);
  
    return (
      <group
        // position={props.position}
        // scale={props.scale}
        // rotation={[props.rotation.x + rotation.x, props.rotation.y + rotation.y, props.rotation.z]}
      >
        <primitive object={gltf.scene} />
      </group>
    );
  }