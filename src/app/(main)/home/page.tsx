import React from "react";

function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="absolute border-r left-0 border-[#9999] bg-card h-screen w-48">
        l
      </div>
      <div className="min-h-screen w-48">l</div>
      <div className="min-h-screen flex-1">m</div>
      <div className="absolute border-l border-[#9999]  right-0 bg-card h-screen w-72">
        r
      </div>
      <div className="min-h-screen w-72">r</div>
    </div>
  );
}

export default Home;
