import React, { useState, useEffect } from "react";
import './Test.css'
import img1 from '../../images/pic1.png'
import img2 from '../../images/pic2.png'
import img3 from '../../images/pic3.png'
import img4 from '../../images/pic4.png'
import swipe from '../../images/swipe.png'

const Test = () => {
  const [isDragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      setDragging(true);
      setStartX(e.clientX);
      
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      const sensitivity = 0.08;
      setRotateY((prevRotateY) => prevRotateY + deltaX * sensitivity);
      setStartX(e.clientX);
    }
  };

  useEffect(() => {
    const handleDocumentMouseMove = (e) => handleMouseMove(e);
    const handleDocumentMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('mouseup', handleDocumentMouseUp);
    } else {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="wrapper" onMouseDown={handleMouseDown}>
      <div className="container">
        <div
          className="image-cube "
          style={{
            transform: `rotateY(${rotateY}deg)`,
          }}>
            
          {/* image 1 */}
          <div className="front">
            <a target="_blank" href="https://www.facebook.com/"><img src={img1} alt="img1" /></a>
          <img className="swipe" src={swipe} alt="swipe" />
          </div>
          
          {/* image 1 */}
          <div className="right">
           <a target="_blank" href="https://www.facebook.com/"> <img src={img2} alt="img2" /></a>
          </div>

          {/* image 1 */}
          <div className="back">
            <a target="_blank" href="https://www.facebook.com/"><img src={img3} alt="img3" /></a>
          </div>

          {/* image 1 */}
          <div className="left">
            <a target="_blank" href="https://www.facebook.com/">
            <img src={img4} alt="img4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
