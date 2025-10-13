// import UrlJson from './url.json' with { type: 'json' };

const StartFunc = ({ inHeadArray, inRowPk }) => {
    console.log("------- : ", inRowPk);

    const jVarLocalNewHeadArray = jFLocalClubArrays({ inHeadArray, inItemsArray: inRowPk });

    var $table = $('#table');
    $table.bootstrapTable("load", jVarLocalNewHeadArray);

    // window.location.href = `${UrlJson.RedirectToUrl}?pk=${inRowPk}`;
};


const jFLocalClubArrays = ({ inHeadArray, inItemsArray }) => {
    // console.log("aaaaaaaaaaaaa : ", inHeadArray, inItemsArray);


    const result = Object.groupBy(inItemsArray, ({ FK }) => FK);
    // console.log("aaaaaaaaaaaaa : ", result, inHeadArray, inItemsArray);

    const jVarLocalNewHeadArray = inHeadArray.map(element => {
        const LoopInsideItems = result[element.pk];

        const jVarLocalAmountArray = LoopInsideItems.map(element => {
            return element.Amount;
        });

        const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        return {
            ...element,
            Amount: sum
        }
    });

    console.log("aaaaaaaaaaaaa : ", result, jVarLocalNewHeadArray, inItemsArray);
    return jVarLocalNewHeadArray;
};


export { StartFunc };
