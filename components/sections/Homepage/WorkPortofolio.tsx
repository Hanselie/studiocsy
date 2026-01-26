"use client";

import { useState, useEffect, useRef } from "react";

const TABS = ["VSL Creatives", "AI UGC", "UGC", "Images"] as const;
type Tab = (typeof TABS)[number];

const DATA: Record<Tab, string[]> = {
  "VSL Creatives": [
    "/portofolio/vsl/vsl-01.mp4",
    "/portofolio/vsl/vsl-02.mp4",
    "/portofolio/vsl/vsl-03.mp4",
  ],
  "AI UGC": [
    "/portofolio/ai-ugc/ai-01.mp4",
    "/portofolio/ai-ugc/ai-02.mp4",
    "/portofolio/ai-ugc/ai-03.mp4",
  ],
  "UGC": [
    "/portofolio/ugc/ugc-01.mp4",
    "/portofolio/ugc/ugc-02.mp4",
    "/portofolio/ugc/ugc-03.mp4",
  ],
  "Images": [
    "/portofolio/images/img-01.png",
    "/portofolio/images/img-02.png",
    "/portofolio/images/img-03.png",
    "/portofolio/images/img-04.png",
    "/portofolio/images/img-05.png",
    "/portofolio/images/img-06.png",
    "/portofolio/images/img-07.png",
    "/portofolio/images/img-08.png",
    "/portofolio/images/img-09.png",
    "/portofolio/images/img-10.png",
    "/portofolio/images/img-11.png",
    "/portofolio/images/img-12.png",
    "/portofolio/images/img-13.png",
    "/portofolio/images/img-14.png",
  ],
};

export default function WorkPortfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("VSL Creatives");
  const [position, setPosition] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const cleanupRefs = useRef<Map<string, () => void>>(new Map());
  const [dragOffset, setDragOffset] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const wheelAccumulator = useRef(0);
  const lastWheelTime = useRef(0);

  const items = DATA[activeTab];
  const totalSlides =
    activeTab === "Images"
      ? Math.ceil(items.length / 2)
      : items.length;

  // Fungsi untuk toggle play/pause
  const togglePlayPause = () => {
    const currentVideoKey = `${activeTab}-${position}-video`;
    const currentVideo = videoRefs.current.get(currentVideoKey);

    if (currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play().catch(e => {
          console.log("Play gagal:", e);
        });
      } else {
        currentVideo.pause();
      }
    }
  };

  // Fungsi untuk mengatur semua video saat tab/position berubah
  const manageVideos = () => {
    // Matikan semua video terlebih dahulu
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.pause();
      }
    });

    // Set video state in current position (jika tab bukan Images)
    if (activeTab !== "Images") {
      const currentVideoKey = `${activeTab}-${position}-video`;
      const currentVideo = videoRefs.current.get(currentVideoKey);

      if (currentVideo) {
        currentVideo.muted = false;
        // Don't autoplay - let user click to play
        setIsPlaying(false);
        currentVideo.pause();
      }
    }
  };

  // Effect untuk mengatur video saat tab atau posisi berubah
  useEffect(() => {
    manageVideos();
  }, [activeTab, position]);

  // Effect untuk membersihkan refs saat unmount
  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.muted = true;
        }
      });
      videoRefs.current.clear();

      cleanupRefs.current.forEach((cleanup) => cleanup());
      cleanupRefs.current.clear();
    };
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
      isDragging.current = true;
      setDragOffset(0);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const diff = e.touches[0].clientX - startX.current;
      setDragOffset(diff);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const diff = e.changedTouches[0].clientX - startX.current;

      // Hitung lompatan posisi (tiap 240px = 1 posisi)
      const moveThreshold = 50;
      if (Math.abs(diff) > moveThreshold) {
        const jump = Math.round(Math.abs(diff) / 240) || 1;
        if (diff < 0) { // Swipe left -> Next
          setPosition((p) => Math.min(p + jump, totalSlides));
        } else { // Swipe right -> Prev
          setPosition((p) => Math.max(p - jump, 1));
        }
      }

      isDragging.current = false;
      setDragOffset(0);
    };

    const handleMouseDown = (e: MouseEvent) => {
      startX.current = e.clientX;
      isDragging.current = true;
      setDragOffset(0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setDragOffset(e.clientX - startX.current);
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const diff = e.clientX - startX.current;

      const moveThreshold = 50;
      if (Math.abs(diff) > moveThreshold) {
        const jump = Math.round(Math.abs(diff) / 240) || 1;
        if (diff < 0) {
          setPosition((p) => Math.min(p + jump, totalSlides));
        } else {
          setPosition((p) => Math.max(p - jump, 1));
        }
      }

      isDragging.current = false;
      setDragOffset(0);
    };

    const handleWheel = (e: WheelEvent) => {
      // Prioritaskan horizontal scroll (deltaX)
      // Trackpad biasanya mengirim deltaX untuk horizontal swipe
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();

        const now = Date.now();
        if (now - lastWheelTime.current < 400) return; // Cooldown 400ms

        wheelAccumulator.current += e.deltaX;

        const threshold = 30;
        if (Math.abs(wheelAccumulator.current) > threshold) {
          if (wheelAccumulator.current > 0) { // Swipe right (scroll right) -> Next
            setPosition((p) => Math.min(p + 1, totalSlides));
          } else { // Swipe left (scroll left) -> Prev
            setPosition((p) => Math.max(p - 1, 1));
          }
          wheelAccumulator.current = 0;
          lastWheelTime.current = now;
        }
      }
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd);
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [position, totalSlides]);


  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setPosition(1);
  };

  const handlePositionChange = (newPosition: number) => {
    setPosition(newPosition);
  };

  // Fungsi untuk menyimpan ref ke video
  const setVideoRef = (key: string, element: HTMLVideoElement | null) => {
    if (element) {
      videoRefs.current.set(key, element);

      // Hanya setup event listeners sekali saja
      if (!cleanupRefs.current.has(key)) {
        const handlePlay = () => {
          if (key === `${activeTab}-${position}-video`) {
            setIsPlaying(true);
          }
        };

        const handlePause = () => {
          if (key === `${activeTab}-${position}-video`) {
            setIsPlaying(false);
          }
        };

        element.addEventListener('play', handlePlay);
        element.addEventListener('pause', handlePause);

        // Simpan cleanup function
        const cleanup = () => {
          element.removeEventListener('play', handlePlay);
          element.removeEventListener('pause', handlePause);
        };

        cleanupRefs.current.set(key, cleanup);
      }

      // Setel volume dan play/pause berdasarkan posisi
      if (key === `${activeTab}-${position}-video`) {
        element.muted = false;
        // Jangan otomatis play di sini, biarkan manageVideos() yang menangani
      } else {
        element.muted = true;
        element.pause();
      }
    } else {
      // Cleanup jika element di-unmount
      const cleanup = cleanupRefs.current.get(key);
      if (cleanup) {
        cleanup();
        cleanupRefs.current.delete(key);
      }
      videoRefs.current.delete(key);
    }
  };

  // Cek status video saat ini
  useEffect(() => {
    const currentVideoKey = `${activeTab}-${position}-video`;
    const currentVideo = videoRefs.current.get(currentVideoKey);

    if (currentVideo) {
      setIsPlaying(!currentVideo.paused);
    }
  }, [activeTab, position]);

  return (
    <section className="bg-[#0b0e14] py-24 overflow-hidden text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center font-heading text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-white leading-tight tracking-tight">
          Our Work{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent italic pr-[0.5em] -mr-[0.5em] clip-fix inline-block">
            Portfolio
          </span>
        </h2>
        <p className="mt-6 text-center font-body text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          Browse through our collection of high-converting video creatives
        </p>

        {/* TABS */}
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-bold font-ui
                transition-all duration-300
                ${activeTab === tab
                  ? "text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
            >
              {/* LIQUID FILL */}
              <span
                className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600
                  transition-transform duration-500 ease-out
                  ${activeTab === tab
                    ? "scale-y-100"
                    : "scale-y-0"
                  }
                `}
                style={{
                  transformOrigin: "bottom",
                }}
              />

              {/* BUTTON TEXT */}
              <span className="relative z-10">
                {tab}
              </span>
            </button>

          ))}
        </div>

        {/* CAROUSEL */}
        <div
          className="relative mt-12 h-[420px] flex items-center justify-center"
          style={{
            perspective: "700px",
          }}
        >
          <div
            ref={carouselRef}
            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{
              transformStyle: "preserve-3d",
              "--items": items.length,
              "--position": position - (dragOffset / 240),
            } as React.CSSProperties}
          >

            {activeTab === "Images"
              ? Array.from({ length: Math.ceil(items.length / 2) }).map((_, i) => {
                const first = items[i * 2];
                const second = items[i * 2 + 1];
                const offset = i + 1;
                const isCurrentPosition = offset === position;

                return (
                  <div
                    key={`${activeTab}-${offset}`}
                    className="absolute transition-all duration-300"
                    style={{
                      width: "220px",
                      height: "360px",
                      "--offset": offset,
                      transform: `
                          rotateY(calc(-12deg * (var(--position) - var(--offset))))
                          translateX(calc(-240px * (var(--position) - var(--offset))))
                        `,
                      zIndex: 100 - Math.abs(position - offset),
                    } as React.CSSProperties}
                  >
                    {/* GLOW EFFECT */}
                    <div className={`absolute -inset-1 rounded-xl blur-md transition-all duration-300 ${isCurrentPosition
                      ? 'bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-blue-500/40 opacity-70'
                      : 'bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 opacity-30'
                      }`} />

                    <div className="relative flex h-full w-full flex-col gap-3 rounded-xl bg-gradient-to-br from-black to-gray-900 p-2 shadow-xl">
                      {/* INNER GLOW */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

                      {first && (
                        <img
                          key={`${activeTab}-${offset}-first`}
                          src={first}
                          className="h-1/2 w-full rounded-lg object-cover"
                          alt=""
                        />
                      )}
                      {second && (
                        <img
                          key={`${activeTab}-${offset}-second`}
                          src={second}
                          className="h-1/2 w-full rounded-lg object-cover"
                          alt=""
                        />
                      )}

                      {/* CORNER ACCENTS */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-400/30 pointer-events-none" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-400/30 pointer-events-none" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-400/30 pointer-events-none" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-400/30 pointer-events-none" />
                    </div>
                  </div>
                );
              })
              : items.map((src, i) => {
                const offset = i + 1;
                const isVideo = src.endsWith(".mp4");
                const videoKey = `${activeTab}-${offset}-video`;
                const isCurrentPosition = offset === position;

                return (
                  <div
                    key={`${activeTab}-${offset}`}
                    className="absolute transition-all duration-300"
                    style={{
                      width: "220px",
                      height: "360px",
                      "--offset": offset,
                      transform: `
                          rotateY(calc(-12deg * (var(--position) - var(--offset))))
                          translateX(calc(-240px * (var(--position) - var(--offset))))
                        `,
                      zIndex: 100 - Math.abs(position - offset),
                    } as React.CSSProperties}
                  >
                    {/* GLOW EFFECT */}
                    <div className={`absolute -inset-1 rounded-xl blur-md transition-all duration-300 ${isCurrentPosition
                      ? 'bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-blue-500/40 opacity-70'
                      : 'bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 opacity-30'
                      }`} />

                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-black to-gray-900 shadow-xl">
                      {/* INNER GLOW */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-indigo-500/5 pointer-events-none z-10" />

                      {isVideo ? (
                        <>
                          <video
                            key={videoKey}
                            ref={(el) => setVideoRef(videoKey, el)}
                            loop
                            playsInline
                            className="h-full w-full object-cover cursor-pointer relative z-0"
                            onClick={isCurrentPosition ? togglePlayPause : undefined}
                          >
                            <source src={src} type="video/mp4" />
                          </video>

                          {/* Overlay dengan tombol play/pause hanya untuk video di posisi saat ini */}
                          {isCurrentPosition && (
                            <div
                              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
                              onClick={togglePlayPause}
                            >
                              <div className="w-14 h-14 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                                {isPlaying ? (
                                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                  </svg>
                                ) : (
                                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                )}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <img
                          key={`${activeTab}-${offset}-image`}
                          src={src}
                          className="h-full w-full object-cover"
                          alt=""
                        />
                      )}

                      {/* CORNER ACCENTS */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-blue-400/30 pointer-events-none z-30" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-blue-400/30 pointer-events-none z-30" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-blue-400/30 pointer-events-none z-30" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-blue-400/30 pointer-events-none z-30" />
                    </div>
                  </div>
                );
              })}

          </div>
        </div>

        {/* RADIO CONTROLS */}
        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <input
              key={i}
              type="radio"
              name="position"
              checked={position === i + 1}
              onChange={() => handlePositionChange(i + 1)}
              className="
                h-3 w-3 cursor-pointer
                accent-white
                opacity-60
                transition
                hover:opacity-100
                checked:opacity-100
              "
            />
          ))}
        </div>

      </div>
    </section>
  );
}