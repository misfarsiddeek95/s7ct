import {AiOutlineClose} from "react-icons/ai";

export const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-slate-900 dark:text-white"
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  )
};