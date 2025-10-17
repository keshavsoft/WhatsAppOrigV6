const jVarCommonDataListId = "ItemNameDLId";

const StartFunc = (data) => {
    // console.log("data : ", data);
    const uniqueArray = [...new Set(data)];
    // console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

    uniqueArray.forEach(element => {
        jFLocalAddToItems({ inAddOnService: element });
    });
};

const jFLocalAddToItems = ({ inAddOnService }) => {
    const option = `<option value="${inAddOnService}">${inAddOnService}</option>`
    // var option = $('<option value="' + inItemName + '"></option>');
    $(`#${jVarCommonDataListId}`).append(option);
};

export { StartFunc };