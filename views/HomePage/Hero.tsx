'use client';
import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import { images } from 'utils/imageKeepHere';

export default function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const changeSlide = (direction: number) => {
    setPrevIndex(currentIndex);
    let next = currentIndex + direction;
    if (next < 0) next = images.length - 1;
    if (next >= images.length) next = 0;
    setCurrentIndex(next);
    setFade(true);
    setTimeout(() => setFade(false), 800);
  };

  const nextSlide = () => changeSlide(1);
  const prevSlide = () => changeSlide(-1);

  return (
    <div style={containerStyle}>
      {/* Previous image */}
      <div
        style={{
          ...bgImageStyle,
          backgroundImage: `url(${images[prevIndex]})`,
          opacity: fade ? 1 : 0,
          zIndex: 1,
        }}
      />
      {/* Current image */}
      <div
        style={{
          ...bgImageStyle,
          backgroundImage: `url(${images[currentIndex]})`,
          opacity: 1,
          zIndex: 2,
        }}
      />

      {/* Left Arrow */}
      <button onClick={prevSlide} style={{ ...arrowBtnStyle, left: '20px' }}>
        &#10094;
      </button>

      {/* Right Arrow */}
      <button onClick={nextSlide} style={{ ...arrowBtnStyle, right: '20px' }}>
        &#10095;
      </button>
    </div>
  );
}

const containerStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
};

const bgImageStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '90%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'opacity 0.8s ease-in-out',
};

const arrowBtnStyle: CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(0,0,0,0.5)',
  color: '#fff',
  border: 'none',
  padding: '12px 16px',
  cursor: 'pointer',
  fontSize: '20px',
  borderRadius: '50%',
  transition: 'background 0.3s',
  zIndex: 3,
};
