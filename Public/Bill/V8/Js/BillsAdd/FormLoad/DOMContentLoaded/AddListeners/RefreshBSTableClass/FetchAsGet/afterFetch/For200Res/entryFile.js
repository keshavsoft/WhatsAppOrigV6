let StartFunc = ({ inResponseAsJson }) => {
    inResponseAsJson.reverse();
    // console.log(inResponseAsJson.reverse());

    var $table = $('#table');
    $table.bootstrapTable("load", inResponseAsJson);
};

export { StartFunc };