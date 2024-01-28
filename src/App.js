import './App.css';
import { motion } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';
import images from './images';

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // Update the width when the component mounts or when images change
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [images]);

  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
