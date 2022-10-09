import React, { useEffect, useState } from 'react'
import "../scss/Slider.scss";

export default function Slider({ imageList, name }) {
  
  const container = document.getElementById("slider-image-container");
  const [focusedImage, setFocusedImage] = useState(0);

  useEffect(() => {
    if (container && imageList) {

      let maxWidth = container.clientWidth;

      for (let index = 0; index < imageList.length; index++) {
        if (focusedImage === index) {
          container.children[index].children[0].classList.add("focused");
        } else {
          container.children[index].children[0].classList.remove("focused");
        }

        const element = container.children[index].children[0];
        element.style.transform =`translateX(-${focusedImage * maxWidth}px)`;
      }
    }

  }, [container, focusedImage, imageList]);

  function move(indexToFocus) {
    if (indexToFocus === container.children.length) {
      setFocusedImage(0)
    } else if (indexToFocus === -1) {
      setFocusedImage(container.children.length - 1);

    } else {
      setFocusedImage(indexToFocus);
    }
  }

  return (
    <div className="card">
      {name && <h1>{name}</h1>}
      <div id="slider-image-container">
        {
          imageList ?
            imageList.map((el, index) =>
              <div key={`img-slider-id-${index}`} className="imageHolder">
                <img src={el} alt={el} />
              </div>) :
            <div className="loading">Loading images...</div>
        }
      </div>
      <div className="buttonsContainer">
        <button onClick={() => move(focusedImage - 1)}>left</button>
        <button onClick={() => move(focusedImage + 1)}>right</button>
      </div>
    </div>
  )
}
