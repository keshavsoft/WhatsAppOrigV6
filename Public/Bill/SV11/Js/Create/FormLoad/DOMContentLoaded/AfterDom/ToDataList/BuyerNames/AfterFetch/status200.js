const jVarCommonDataListId = "BuyerNameDLId";

const StartFunc = ({ inArrayFromFetch }) => {
    let jVarLocalArray = inArrayFromFetch;
    jFLocalToLocalStorage({ inArrayFromFetch });

    let jVarLocalBuyerNames = jVarLocalArray.map(element => {
        // console.log("aaaaaaaa :", element);

        return element[0];
    });

    const uniqueArray = [...new Set(jVarLocalBuyerNames)];

    uniqueArray.forEach(element => {
        jFLocalAddToItems({ inAddOnService: element });
    });
};

const jFLocalAddToItems = ({ inAddOnService }) => {
    const option = `<option value="${inAddOnService}">${inAddOnService}</option>`
    // var option = $('<option value="' + inItemName + '"></option>');
    $(`#${jVarCommonDataListId}`).append(option);
};

const jFLocalToLocalStorage = ({ inArrayFromFetch }) => {
    localStorage.setItem("BuyerDetails", JSON.stringify(inArrayFromFetch));
};

export { StartFunc };