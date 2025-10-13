import { StartFunc as StartFuncFromFetchAsPost } from "./FetchAsPost/entryFile.js";

let StartFunc = ({ inResponseAsJson }) => {
    inResponseAsJson.reverse();
    StartFuncFromFetchAsPost({ inResponseAsJson })
    // console.log(inResponseAsJson.reverse());

    // var $table = $('#table');
    // $table.bootstrapTable("load", inResponseAsJson);
};

export { StartFunc };