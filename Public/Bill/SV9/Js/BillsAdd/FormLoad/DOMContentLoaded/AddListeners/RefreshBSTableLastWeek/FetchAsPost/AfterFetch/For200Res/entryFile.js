import { StartFunc as StartFuncFromFetchAsPost } from "./FetchAsPost/entryFile.js";

let StartFunc = ({ inResponseAsJson }) => {
    StartFuncFromFetchAsPost({ inResponseAsJson })
};

export { StartFunc };