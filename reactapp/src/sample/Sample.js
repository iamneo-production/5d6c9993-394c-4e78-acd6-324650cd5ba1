import React from 'react';
import CardSlider from 'react-card-slider';
import './Sample.css';

const VideoSlider = () => {
  const videos = [
    'https://www.youtube.com/embed/tEqVyJNOroI',
    'https://www.youtube.com/embed/tEqVyJNOroI',
    'ttps://www.youtube.com/embed/tEqVyJNOroI',
  ];

  const renderCard = (video, index) => (
    <div key={index} className="video-card">
      <iframe
        className="video-frame"
        src={video}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={`Embedded video ${index + 1}`}
      />
    </div>
  );

  return (
    <div className="slider-container">
      <CardSlider
        cards={videos.map((video, index) => renderCard(video, index))}
        autoplay={false}
        transitionSpeed={300}
      />
    </div>
  );
};

export default VideoSlider;
