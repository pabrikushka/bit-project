import {useLottie, useLottieInteractivity} from "lottie-react";
import book from "../assets/lottie/box-animation.json";
import { Container } from "react-bootstrap";


const options = {
    animationData: book,
  };

const Lottie = () => {
    const lottieObj = useLottie(options);
    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
          {
            visibility: [0.2, 0.6],
            type: "seek",
            frames: [0, 80],
          },
        ],
      });
    
      return Animation;
}

const Book = () => {

    return (
        <section className='book-section'>

            <div className="book-lottie">
                <Container>
                    <Lottie />
                </Container>
            </div>
        </section>
    );
}

export default Book;