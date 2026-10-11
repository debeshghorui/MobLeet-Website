"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/navbar";

const BANNER_KEY = "mobleet-banner:v1";

export function SiteHeader() {
  const [bannerClosed, setBannerClosed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(BANNER_KEY) === "closed") setBannerClosed(true);
    } catch {
      /* private mode */
    }
  }, []);

  function closeBanner() {
    setBannerClosed(true);
    document.documentElement.setAttribute("data-banner", "closed");
    try {
      localStorage.setItem(BANNER_KEY, "closed");
    } catch {
      /* private mode */
    }
  }

  return (
    <>
      {bannerClosed ? null : (
        <div className="banner">
          <p className="mx-auto max-w-[76rem] px-4 py-2 pr-10">
            Internal testing is open for iOS and Android.{" "}
            <a href="#apply">Apply</a>
          </p>
          <button
            type="button"
            className="banner-close"
            aria-label="Close announcement"
            onClick={closeBanner}
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
      )}
      <Navbar />
    </>
  );
}
