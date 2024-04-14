import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

export const StaffImage = styled(({ src, videoSrc, ...rest }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowVideo(true)}
      onMouseLeave={() => setShowVideo(false)}
      {...rest}
    >
      <Image src={src} alt="" layout="fill" style={{ objectFit: "cover" }} />
      {videoSrc && (showVideo || videoReady) && (
        <video
          style={{ opacity: showVideo && videoReady ? 1 : 0 }}
          autoPlay
          loop
          muted
          playsInline
          src={videoSrc}
          onCanPlay={() => setVideoReady(true)}
          onTransitionEnd={() => !showVideo && setVideoReady(false)}
        />
      )}
    </div>
  );
})`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0); /* for safari */
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.2s ease-in-out;
  }
`;
