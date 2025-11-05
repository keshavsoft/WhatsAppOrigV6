import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonTableName from '../../../../../../../Config.json' with {type: 'json'};
import OptionsJson from '../options.json' with {type: 'json'};
const CommonDaysBefore = OptionsJson.Filters.DaysBefore;

let StartFunc = async () => {
    // const today = new Date();
    const jVarFromDate = jFFromInput({ inPutId: "HtmlId-FromDate" });
    const jVarToDate = jFFromInput({ inPutId: "HtmlId-ToDate" });

    let jVarLocalCommonTable = CommonTableName.TableName;
    let jVarLocalGetUrl = getUrlJson.GetEndPoint.replace("${fromDate}", jVarFromDate);
    let jVarLocalGetEndPoint = jVarLocalGetUrl.replace("${toDate}", jVarToDate);
    let jVarLocalFetchUrl = `${jVarLocalCommonTable}/${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};
const jFFromInput = ({ inPutId }) => {
    const inputElement = document.getElementById(inPutId);

    if (!inputElement) {
        console.warn(`Input element with id "${inPutId}" not found.`);
        return false;
    }

    return inputElement.value;
};

export { StartFunc };

