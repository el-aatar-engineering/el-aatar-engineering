"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/earth-orbit.mp4";

export default function HeroVideo() {
  const videoARef = useRef<HTMLVideoElement | null>(null);
  const videoBRef = useRef<HTMLVideoElement | null>(null);

  const [activeVideo, setActiveVideo] = useState<"a" | "b">("a");

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;

    if (!videoA || !videoB) return;

    let switching = false;

    const switchVideo = async () => {
      if (switching) return;

      switching = true;

      const nextVideo = activeVideo === "a" ? videoB : videoA;

      try {
        nextVideo.currentTime = 0;
        await nextVideo.play();

        setActiveVideo(activeVideo === "a" ? "b" : "a");

        setTimeout(() => {
          const oldVideo = activeVideo === "a" ? videoA : videoB;
          oldVideo.pause();
          switching = false;
        }, 1300);
      } catch {
        switching = false;
      }
    };

    const handleTimeUpdate = () => {
      const remaining = videoA.duration - videoA.currentTime;

      if (
        activeVideo === "a" &&
        Number.isFinite(remaining) &&
        remaining <= 1.3
      ) {
        switchVideo();
      }
    };

    const handleTimeUpdateB = () => {
      const remaining = videoB.duration - videoB.currentTime;

      if (
        activeVideo === "b" &&
        Number.isFinite(remaining) &&
        remaining <= 1.3
      ) {
        switchVideo();
      }
    };

    videoA.addEventListener("timeupdate", handleTimeUpdate);
    videoB.addEventListener("timeupdate", handleTimeUpdateB);

    return () => {
      videoA.removeEventListener("timeupdate", handleTimeUpdate);
      videoB.removeEventListener("timeupdate", handleTimeUpdateB);
    };
  }, [activeVideo]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoARef}
        className={`hero-video-layer ${
          activeVideo === "a"
            ? "hero-video-visible"
            : "hero-video-hidden"
        }`}
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
      />

      <video
        ref={videoBRef}
        className={`hero-video-layer ${
          activeVideo === "b"
            ? "hero-video-visible"
            : "hero-video-hidden"
        }`}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}