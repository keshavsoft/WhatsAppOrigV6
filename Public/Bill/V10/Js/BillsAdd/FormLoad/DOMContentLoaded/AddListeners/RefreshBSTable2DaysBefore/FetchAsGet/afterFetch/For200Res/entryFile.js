import OptionsJson from '../../../options.json' with {type: 'json'};

let StartFunc = ({ inResponseAsJson }) => {
    inResponseAsJson.reverse();
    // console.log(inResponseAsJson.reverse());
    const jVarLocalHtmlId = OptionsJson.HtmlIds.BSTable;

    var $table = $(`#${jVarLocalHtmlId}`);
    $table.bootstrapTable("load", inResponseAsJson);
};

export { StartFunc };