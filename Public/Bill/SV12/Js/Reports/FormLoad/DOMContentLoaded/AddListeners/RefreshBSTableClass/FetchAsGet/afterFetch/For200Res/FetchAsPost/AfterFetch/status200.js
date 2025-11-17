import OptionsJson from '../../../../../options.json' with {type: 'json'};
const CommonTableName = `${OptionsJson.HtmlIds.BSTable}`;

let result;

const StartFunc = ({ inHeadArray, inRowPk }) => {
    const jVarLocalNewHeadArray = jFLocalClubArrays({ inHeadArray, inItemsArray: inRowPk });

    jVarLocalNewHeadArray.reverse();

    var $table = $(`#${CommonTableName}`);

    $table.bootstrapTable("load", jFLocalAddGst({ inDataAsArray: jVarLocalNewHeadArray }));
};

const jFLocalForMap = element => {
    const LoopInsideItems = result[element.pk];
    // console.log("LoopInsideItems : ", LoopInsideItems);
    let jVarLocalAmountArray = [];
    let jVarLocalQtyArray = [];

    if (LoopInsideItems === undefined === false) {
        jVarLocalAmountArray = LoopInsideItems.map(element => {
            return element.Amount;
        });

        jVarLocalQtyArray = LoopInsideItems.map(element => {
            return element.Qty;
        });
    };

    const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const jVarLocalTotalQty = jVarLocalQtyArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return {
        ...element,
        Lines: jVarLocalAmountArray.length,
        TQty: jVarLocalTotalQty,
        Amount: sum
    };
};

const jFLocalClubArrays = ({ inHeadArray, inItemsArray }) => {
    result = Object.groupBy(inItemsArray, ({ FK }) => FK);

    const jVarLocalNewHeadArray = inHeadArray.map(jFLocalForMap);

    return jVarLocalNewHeadArray;
};

const jFLocalAddGst = ({ inDataAsArray }) => {
    const jVarLocalArrayWithGstColumns = inDataAsArray.map(element => {
        const jVarLocalTaxableValue = element.Amount * 100 / 118;

        return {
            ...element,
            Cgst: ((element.Amount - jVarLocalTaxableValue) / 2).toFixed(2),
            Sgst: ((element.Amount - jVarLocalTaxableValue) / 2).toFixed(2),
        };
    });

    return jVarLocalArrayWithGstColumns;
};

export { StartFunc };
