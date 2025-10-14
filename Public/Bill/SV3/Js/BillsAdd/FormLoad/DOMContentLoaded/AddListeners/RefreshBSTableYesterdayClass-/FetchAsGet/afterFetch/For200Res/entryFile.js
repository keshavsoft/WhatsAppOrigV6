let StartFunc = ({ inResponseAsJson }) => {
    inResponseAsJson.reverse();
    // console.log(inResponseAsJson.reverse());

    var $table = $('#tableYesterday');
    $table.bootstrapTable("load", inResponseAsJson);
};

export { StartFunc };