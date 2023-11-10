"use client";
function ServiceWorker() {
  if (typeof window !== "undefined") {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then((registration) => {
        console.log("Service Worker registration successful:", registration);
      });
    }
  }

  return <></>;
}

export default ServiceWorker;
