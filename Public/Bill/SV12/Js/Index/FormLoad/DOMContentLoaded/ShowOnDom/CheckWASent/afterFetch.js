const StartFunc = (data) => {
    jFLocalRemoveClass();
    jFLocalAddClass();
};

let jFLocalRemoveClass = () => {
    let jVarLocalHtmlId = 'SendWAid';
    let jVarLocalSendWaUseFailureId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalSendWaUseFailureId === null === false) {
        jVarLocalSendWaUseFailureId.classList.remove("text-white");
    };
};

let jFLocalAddClass = () => {
    let jVarLocalHtmlId = 'SendWAid';
    let jVarLocalSendWaUseFailureId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalSendWaUseFailureId === null === false) {
        jVarLocalSendWaUseFailureId.classList.remove("text-info");
    };
};

export { StartFunc };