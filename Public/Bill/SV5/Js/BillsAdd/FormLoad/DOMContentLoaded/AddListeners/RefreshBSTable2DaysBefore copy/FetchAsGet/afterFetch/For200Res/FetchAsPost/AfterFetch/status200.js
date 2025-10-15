import OptionsJson from './../../../../../options.json' with { type: 'json' };
const jVarCommonHtmlId = OptionsJson.HtmlIds.BSTable;

const StartFunc = ({ inHeadArray, inRowPk }) => {
    const jVarLocalNewHeadArray = jFLocalClubArrays({ inHeadArray, inItemsArray: inRowPk });

    var $table = $(`#${jVarCommonHtmlId}`);
    $table.bootstrapTable("load", jVarLocalNewHeadArray);
};


const jFLocalClubArrays = ({ inHeadArray, inItemsArray }) => {
    const result = Object.groupBy(inItemsArray, ({ FK }) => FK);

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
