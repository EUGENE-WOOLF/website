'use client';
import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';

export default function BackgroundSlideshow() {
  const images = ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'];
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
    setTimeout(() => setFade(false), 800); // match fade duration
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

      {/* Arrows */}
      <div style={arrowsStyle}>
        <button onClick={prevSlide} style={arrowBtnStyle}>
          &#10094;
        </button>
        <button onClick={nextSlide} style={arrowBtnStyle}>
          &#10095;
        </button>
      </div>
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

const arrowsStyle: CSSProperties = {
  position: 'absolute',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  gap: '10px',
  zIndex: 3,
};

const arrowBtnStyle: CSSProperties = {
  background: 'rgba(0,0,0,0.5)',
  color: '#fff',
  border: 'none',
  padding: '10px 14px',
  cursor: 'pointer',
  fontSize: '18px',
  borderRadius: '50%',
  transition: 'background 0.3s',
};
