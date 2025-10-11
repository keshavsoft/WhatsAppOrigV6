import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = () => {
    StartFuncFromFetchAsGet();
    // window.open(`./print.html${window.location.search}`, '_blank');
};

export { StartFunc };