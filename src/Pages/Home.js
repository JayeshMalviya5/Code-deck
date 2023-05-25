import React, { useContext } from "react";
import Modal from "../components/Card/Modal";
import LeftPanelHomeScreen from "../components/Home/LeftPanelHomeScreen";
import RightPanelHomeScreen from "../components/Home/RightPanelHomeScreen";
import { ModalContext } from "../Context/ModalContext";
function Home() {
  const {isOpenModal} = useContext(ModalContext);
  return (
    <div className="flex flex-row w-[100%]">
      <div className="w-[30%]">
        <LeftPanelHomeScreen />
      </div>
      <div className="w-[70%]">
        <RightPanelHomeScreen />
      </div>
      {isOpenModal.show && <Modal />}
    </div>
  );
}

export default Home;





