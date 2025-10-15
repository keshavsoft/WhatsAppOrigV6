import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonTableName from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);


    let jVarLocalCommonTable = CommonTableName.TableName;
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint.replace("${Date}", formattedDate);
    let jVarLocalFetchUrl = `${jVarLocalCommonTable}/${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

