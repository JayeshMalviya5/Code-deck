import React from "react";

function LeftPanelHomeScreen() {
  return (
    <div className="border-2 w-[100%] border-[#222121] h-screen bg-[#222121] flex justify-end">
      <div className="mx-auto w-[100%] flex flex-col items-center justify-center gap-3">
        <img
          src="./code-logo.png"
          alt="Logo"
          width={"200px"}
          height={"auto"}
        />
        <h3 className="font-semibold text-white">Code Deck</h3>
        <h3 className="font-semibold text-white">Code. Compile. Debug</h3>
      </div>
    </div>
  );
}

export default LeftPanelHomeScreen;
