
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/earth-orbit.mp4";
const POSTER_SRC = "/images/earth-orbit-poster.jpg";
const TRANSITION_DURATION = 1300;

export default function HeroVideo() {
  const videoARef = useRef<HTMLVideoElement | null>(null);
  const videoBRef = useRef<HTMLVideoElement | null>(null);

  const activeVideoRef = useRef<"a" | "b">("a");
  const switchingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeVideo, setActiveVideo] = useState<"a" | "b">("a");
  const [videoReady, setVideoReady] = useState(false);

  const switchVideo = useCallback(async (current: "a" | "b") => {
    if (switchingRef.current) return;

    const videoA = videoARef.current;
    const videoB = videoBRef.current;

    if (!videoA || !videoB) return;

    const outgoing = current === "a" ? videoA : videoB;
    const incoming = current === "a" ? videoB : videoA;
    const next: "a" | "b" = current === "a" ? "b" : "a";

    switchingRef.current = true;

    try {
      // Prepare the same clip at its beginning before revealing it.
      incoming.currentTime = 0;
      await incoming.play();

      activeVideoRef.current = next;
      setActiveVideo(next);
      setVideoReady(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        outgoing.pause();
        outgoing.currentTime = 0;
        switchingRef.current = false;
        timeoutRef.current = null;
      }, TRANSITION_DURATION);
    } catch {
      // If the incoming video isn't ready, keep the current one visible.
      switchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    const videoA = videoARef.current;
    const videoB = videoBRef.current;

    if (!videoA || !videoB) return;

    const handleReady = () => setVideoReady(true);

    const handleTimeUpdateA = () => {
      const remaining = videoA.duration - videoA.currentTime;

      if (
        activeVideoRef.current === "a" &&
        Number.isFinite(remaining) &&
        remaining <= TRANSITION_DURATION / 1000
      ) {
        void switchVideo("a");
      }
    };

    const handleTimeUpdateB = () => {
      const remaining = videoB.duration - videoB.currentTime;

      if (
        activeVideoRef.current === "b" &&
        Number.isFinite(remaining) &&
        remaining <= TRANSITION_DURATION / 1000
      ) {
        void switchVideo("b");
      }
    };

    videoA.addEventListener("loadeddata", handleReady);
    videoB.addEventListener("loadeddata", handleReady);
    videoA.addEventListener("timeupdate", handleTimeUpdateA);
    videoB.addEventListener("timeupdate", handleTimeUpdateB);

    // Start the first clip. The poster remains visible until video data arrives.
    void videoA.play().catch(() => {
      // Keep the poster visible if autoplay is blocked.
    });

    return () => {
      videoA.removeEventListener("loadeddata", handleReady);
      videoB.removeEventListener("loadeddata", handleReady);
      videoA.removeEventListener("timeupdate", handleTimeUpdateA);
      videoB.removeEventListener("timeupdate", handleTimeUpdateB);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [switchVideo]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020817]">
      {/* Loading fallback: use a still frame from the same video. */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url("${POSTER_SRC}")` }}
        aria-hidden="true"
      />

      <video
        ref={videoARef}
        className={`hero-video-layer ${
          activeVideo === "a"
            ? "hero-video-visible"
            : "hero-video-hidden"
        }`}
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <video
        ref={videoBRef}
        className={`hero-video-layer ${
          activeVideo === "b"
            ? "hero-video-visible"
            : "hero-video-hidden"
        }`}
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}
