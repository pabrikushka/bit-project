import * as React from 'react';
import { useRef } from 'react';
import BookIMG from "../assets/images/book.jpg";
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { ReactDOM } from 'react';
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useTransform } from "framer-motion";
import Model from './model';


const Book = () => {

    return (
        <section className='book-section'>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Model
                    modelPath="/watch.glb"
                    position={[0, -2.5, 0]}
                    scale={[1.5, 1.5, 1.5]}
                    rotation={{ x: 0, y: 0, z: 0 }}
                    motionConfig={{
                        rotateY: [0, 360],
                        transition: { duration: 2 },
                        repeat: Infinity,
                    }}
                />
            </Canvas>
        </section>
    );
}

export default Book;