"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  src?: string;
}

export default function BlogMusicPlayer({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (!src) return;

    const audio = new Audio(src);

    audio.loop = true;
    audio.volume = 0.35;

    audioRef.current = audio;

    const musicDisabled =
      localStorage.getItem("blog-music-disabled") === "true";

    if (!musicDisabled) {
      audio
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          setPlaying(false);
        });
    }

    const seenHint = localStorage.getItem("music-hint-seen");

    if (!seenHint) {
      setTimeout(() => {
        setShowHint(true);

        setTimeout(() => {
          setShowHint(false);
        }, 5000);
      }, 1200);

      localStorage.setItem("music-hint-seen", "true");
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();

      localStorage.setItem("blog-music-disabled", "true");

      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();

        localStorage.setItem("blog-music-disabled", "false");

        setPlaying(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!src) return null;

  return (
    <>
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[100] group"
      >
        <div className="relative flex items-center gap-2 rounded-full border border-accent-green/30 bg-[#020617]/80 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-accent-green/60 hover:bg-[#04130a]">
          <span
            className={`text-sm ${
              playing
                ? "animate-pulse text-accent-green"
                : "text-text-muted"
            }`}
          >
            ♫
          </span>

          <span className="font-mono text-xs text-text-muted group-hover:text-accent-green transition-colors">
            {playing ? "soundtrack on" : "soundtrack off"}
          </span>
        </div>

        {showHint && (
          <div className="absolute bottom-14 right-0 w-56 rounded-xl border border-accent-green/20 bg-[#04130a]/95 p-3 text-left shadow-2xl backdrop-blur-xl animate-fade-in">
            <p className="text-xs leading-relaxed text-text-muted">
              you can turn me off/on here... {"<3"}
            </p>
          </div>
        )}
      </button>
    </>
  );
}