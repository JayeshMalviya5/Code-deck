import { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import {
  NewFolder,
  EditFolder,
  EditPlaygroundTitle,
  Loading,
  NewPlayGround,
  NewPlayGroundAndFolder,
} from "../ModalTypes";
function Modal() {
  const { isOpenModal } = useContext(ModalContext);
  const { modalType } = isOpenModal;
//   modaltypes
// 1: NewFolder
// 2: NewPlayground
// 3: NewPlayGroundAndFolder
// 4: EditFolder
//5: EditPlaygroundTitle
//6: Loading
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
  <div
    className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity"
    onClick={(e) => {
      e.stopPropagation();
    }}
  ></div>
  <div className="relative w-auto my-6 mx-auto max-w-3xl">
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[30rem] bg-white focus:outline-none">
      {modalType === 1 && <NewFolder />}
      {modalType === 2 && <NewPlayGround />}
      {modalType === 3 && <NewPlayGroundAndFolder />}
      {modalType === 4 && <EditFolder />}
      {modalType === 5 && <EditPlaygroundTitle />}
      {modalType === 6 && <Loading />}
    </div>
  </div>
</div>

  );
}

export default Modal;