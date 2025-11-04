const StartFunc = (data) => {
    jFLocalDisplayNoneSendWaUseFailureId();
    jFLocalDisplayShowSendWaUseSuccessId();
};

let jFLocalDisplayNoneSendWaUseFailureId = () => {
    let jVarLocalHtmlId = 'SendWaUseFailureId';
    let jVarLocalSendWaUseFailureId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalSendWaUseFailureId === null === false) {
        jVarLocalSendWaUseFailureId.style.display = 'none';
    };
};

let jFLocalDisplayShowSendWaUseSuccessId = () => {
    let jVarLocalHtmlId = 'SendWaUseSuccessId';
    let jVarLocalSendWaUseSuccessId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalSendWaUseSuccessId === null === false) {
        jVarLocalSendWaUseSuccessId.style.display = '';
    };
};

export { StartFunc };