import "./App.css";
import { useState } from "react";
import { obj } from "./Data/Data";
import { ButtonsPill, CustomIconPill, SelectedButtonsModal } from "./Components";

const url = "https://the-canary.netlify.app/";
let iconSize = 40;
let roundShaped = true;

function filterButtons(obj) {
    return Object.keys(obj).filter((key) => obj[key].isSelected);
}
function App() {
    const [selectedButtons, setSelectedButtons] = useState(obj);
    const [showModal, setModal] = useState(false);
    const [triggerEvent, setTrigger] = useState(false);

    function onWindowCloseHandler() {
        setTrigger(true);

        setTimeout(() => {
            setTrigger(false);
        }, 2000);
    }
    return (
        <div className="App">
            <h3>Pill</h3>
            <ButtonsPill
                setModal={setModal}
                filterButtons={filterButtons}
                url={url}
                iconSize={iconSize}
                roundShaped={roundShaped}
                selectedButtons={selectedButtons}
                onWindowCloseHandler={onWindowCloseHandler}
                setSelectedButtons={setSelectedButtons}
            />
            <h3>With Custom Icons</h3>
            <CustomIconPill
                filterButtons={filterButtons}
                url={url}
                iconSize={iconSize}
                roundShaped={roundShaped}
                selectedButtons={selectedButtons}
                onWindowCloseHandler={onWindowCloseHandler}
            />
            {showModal ? (
                <SelectedButtonsModal
                    setModal={setModal}
                    selectedButtons={selectedButtons}
                    setSelectedButtons={setSelectedButtons}
                    iconSize={iconSize}
                    roundShaped={roundShaped}
                />
            ) : null}
            <h4>An event will be shown once share modal is closed.</h4>
            <hr />
            {triggerEvent ? <h2>Share Event was Triggered</h2> : null}
        </div>
    );
}

export default App;
