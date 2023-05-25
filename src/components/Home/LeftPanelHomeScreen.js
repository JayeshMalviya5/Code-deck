import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";

function LeftPanelHomeScreen() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="border-2 w-[100%] border-[black] h-screen bg-[black] flex justify-end">
      <div className="mx-auto w-[100%] flex flex-col items-center justify-center gap-3">
        <img
          src={require("./Visual_Studio_Code_1.35_icon.svg.png")}
          alt="Logo"
          width={"200px"}
          height={"auto"}
        />
        <h3 className="font-semibold text-white text-green-600">Code Deck</h3>
        <h3 className="font-semibold text-white">
          Code... Compile... Debug...
        </h3>

        <button
          className=" p-4 w-[60%] font-semibold bg-white shadow-lg rounded-lg drop-shadow-2xl"
          onClick={() =>{

            console.log("button clicked")
            openModal({
              show: true,
              modalType: 3,
              identifiers: {
                folderId: "",
                cardID: "",
              },
              
            })
          }
          }
        >
          + Create New Playground
        </button>
      </div>
    </div>
  );
}

export default LeftPanelHomeScreen;