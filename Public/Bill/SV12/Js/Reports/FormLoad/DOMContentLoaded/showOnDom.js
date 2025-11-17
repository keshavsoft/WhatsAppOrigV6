let StartFunc = () => {

    jFFromInput({ inPutId: "HtmlId-FromDate", inValue: jFLocalGetDate(1) });
    jFFromInput({ inPutId: "HtmlId-ToDate", inValue: jFLocalGetDate() });

    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableClass`);
    jVarLocalRefreshBSTableId.click();
};

const jFFromInput = ({ inPutId, inValue }) => {
    const inputElement = document.getElementById(inPutId);

    if (!inputElement) {
        console.warn(`Input element with id "${inPutId}" not found.`);
        return false;
    }

    inputElement.value = inValue;
    return true;
};


const jFLocalGetDate = (DaysBefore = 0) => {
    const d = new Date();
    d.setDate(d.getDate() - DaysBefore);
    return d.toISOString().split("T")[0]; // yyyy-mm-dd
};

export { StartFunc };