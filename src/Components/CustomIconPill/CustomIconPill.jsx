export default function CustomIconPill({
    filterButtons,
    selectedButtons,
    onWindowCloseHandler,
    url,
    iconSize,
    roundShaped,
}) {
    return (
        <div className="pill-wrapper">
            {filterButtons(selectedButtons)
                .filter((key) => selectedButtons[key].customIconUrl)
                .map((key) => {
                    const {
                        media: [CurrentButton],
                        customIconUrl,
                    } = selectedButtons[key];
                    return (
                        <div key={key}>
                            <CurrentButton url={url} onShareWindowClose={onWindowCloseHandler}>
                                <img
                                    src={customIconUrl}
                                    alt={key}
                                    width={iconSize + "px"}
                                    className={roundShaped ? "round" : ""}
                                />
                            </CurrentButton>
                        </div>
                    );
                })}
        </div>
    );
}
