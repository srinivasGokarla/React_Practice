import React from 'react';

const VideoSection = () => {
  return (
    <div>
      <h3>Video Section</h3>
      <video controls>
        <source src="http://techslides.com/demos/sample-videos/small.webm" type="video/mp4" />
        {/* Add additional source tags for different video formats */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;