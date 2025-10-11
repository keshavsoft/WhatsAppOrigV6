let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableClass`);
    jVarLocalRefreshBSTableId.click();

    // jFLocalRunYesterday();
    // jFLocalRun2DaysBefore();
};

const jFLocalRunYesterday = () => {
    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableYesterdayClass`);
    jVarLocalRefreshBSTableId.click();
};

const jFLocalRun2DaysBefore = () => {
    let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTable2DaysBefore`);
    jVarLocalRefreshBSTableId.click();
};

export { StartFunc };