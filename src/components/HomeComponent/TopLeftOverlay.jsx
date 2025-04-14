import React from "react";

export const TopLeftOverlay = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-2/5 -rotate-90 z-0 overflow-hidden">
    <div className="h-full w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] opacity-30" />
  </div>
  );
};
