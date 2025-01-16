type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};
  
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <button className="float-right text-gray-600" onClick={onClose}>
            ✖
            </button>
            <p className="whitespace-pre-line">
                {children}
            </p>
        </div>
        </div>
    );
};

export default Modal;