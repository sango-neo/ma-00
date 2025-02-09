"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="z-50 fixed w-fit gap-4 bottom-4 right-4 md:right-8 bg-white/90 backdrop-blur-sm text-ma_darkBlue p-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-center md:text-left">
        We use essential cookies to ensure this website functions properly.
        <a href="/legal/privacy.html" className="underline ml-1">
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
