import { useState } from "react";

export default function ButtonsPill({
    selectedButtons,
    url,
    iconSize,
    roundShaped,
    onWindowCloseHandler,
    setModal,
    filterButtons,
}) {
    const [showMoreIcons, setShowIcons] = useState(false);
    const allButtons = showMoreIcons ? filterButtons(selectedButtons) : filterButtons(selectedButtons).slice(0, 1);

    return (
        <div className="pill-wrapper primary">
            {allButtons.map((key) => {
                const {
                    media: [CurrentButton, CurrentIcon],
                    id,
                } = selectedButtons[key];
                return (
                    <div key={id}>
                        <CurrentButton url={url} onShareWindowClose={onWindowCloseHandler}>
                            <CurrentIcon size={iconSize} round={roundShaped} />
                        </CurrentButton>
                    </div>
                );
            })}
            <button className="btn" onClick={() => setShowIcons((prev) => !prev)}>
                <span className="material-icons-outlined">{showMoreIcons ? "close" : "share"}</span>
            </button>
            <button className="btn edit-btn" onClick={() => setModal(true)}>
                <span className="material-icons-outlined">edit</span>
            </button>
        </div>
    );
}
