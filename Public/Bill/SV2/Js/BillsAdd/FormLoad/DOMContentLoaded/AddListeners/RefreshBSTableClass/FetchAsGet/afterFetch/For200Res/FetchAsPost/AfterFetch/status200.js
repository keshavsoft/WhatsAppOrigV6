import OptionsJson from '../../../../../options.json' with {type: 'json'};
const CommonTableName = `${OptionsJson.HtmlIds.BSTable}`;

let result;

const StartFunc = ({ inHeadArray, inRowPk }) => {
    const jVarLocalNewHeadArray = jFLocalClubArrays({ inHeadArray, inItemsArray: inRowPk });
    jVarLocalNewHeadArray.reverse();

    var $table = $(`#${CommonTableName}`);
    
    $table.bootstrapTable("load", jVarLocalNewHeadArray);
};

const jFLocalForMap = element => {
    const LoopInsideItems = result[element.pk];
    // console.log("LoopInsideItems : ", LoopInsideItems);
    let jVarLocalAmountArray = [];

    if (LoopInsideItems === undefined === false) {
        jVarLocalAmountArray = LoopInsideItems.map(element => {
            return element.Amount;
        });
    };

    const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return {
        ...element,
        Amount: sum
    };
};

const jFLocalClubArrays = ({ inHeadArray, inItemsArray }) => {
    result = Object.groupBy(inItemsArray, ({ FK }) => FK);

    const jVarLocalNewHeadArray = inHeadArray.map(jFLocalForMap);

    return jVarLocalNewHeadArray;
};

export { StartFunc };
