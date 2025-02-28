"use client";

import { useState, useEffect, useRef } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const headerLoaded = useRef(false);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent")) return;

    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setShowBanner(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    let timer: NodeJS.Timeout;

    // Check if header has loaded
    const header = document.getElementById("home-header-section");
    if (header) {
      headerLoaded.current = true;
      timer = setTimeout(() => setShowBanner(true), 5000);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="z-50 fixed bottom-10 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-fit md:translate-x-0 md:left-auto md:bottom-14 md:right-8 gap-4 bg-white/90 backdrop-blur-sm text-ma_darkBlue p-4 rounded-lg shadow-large shadow-ma_darkBlue/10 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-center md:text-left">
        We use essential cookies to ensure this website functions properly.
        <a target="_blank" href="/legal/privacy.html" className="underline ml-1">
          Learn more
        </a>
      </p>
      <button
        onClick={acceptCookies}
        className="mt-2 md:mt-0 bg-ma_darkBlue hover:bg-ma_darkBlue/80 text-sm text-white font-medium py-2 px-4 rounded-md transition"
      >
        Okay
      </button>
    </div>
  );
}
