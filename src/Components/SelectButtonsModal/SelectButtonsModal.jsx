import { useEffect, useRef } from "react";
import "./SelectButtonsModal.css";

export default function SelectedButtonsModal({ selectedButtons, setSelectedButtons, iconSize, roundShaped, setModal }) {
    const modalRef = useRef(null);

    useEffect(() => {
        function closeWhenClickedOutside(e) {
            if (modalRef && modalRef.current && !modalRef.current.contains(e.target)) {
                setModal(false);
            }
        }
        document.addEventListener("mousedown", closeWhenClickedOutside);
        return () => document.removeEventListener("mousedown", closeWhenClickedOutside);
    }, [modalRef, setModal]);

    return (
        <div className="selectButtonsWrapper">
            <div className="selectButtonsContent" ref={modalRef}>
                <div className="actions-wrapper">
                    <button className="btn close-modal-btn" onClick={() => setModal(false)}>
                        <span className="material-icons-outlined">close</span>
                    </button>
                </div>
                <div>
                    {Object.keys(selectedButtons).map((key) => {
                        const {
                            media: [, CurrentIcon],
                            isSelected,
                            id,
                        } = selectedButtons[key];

                        return (
                            <label key={id} className="selectLabel">
                                <CurrentIcon size={iconSize} round={roundShaped} />
                                <input
                                    className="selectInput"
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={(e) =>
                                        setSelectedButtons((prev) => {
                                            return {
                                                ...prev,
                                                [key]: { ...prev[key], isSelected: e.target.checked },
                                            };
                                        })
                                    }
                                />
                            </label>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
