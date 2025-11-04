import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonTableName from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const formattedDate = jFLocalGetYesterday();

    let jVarLocalCommonTable = CommonTableName.TableName;
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint;
    let jVarLocalFetchUrl = `${jVarLocalCommonTable}/${jVarLocalGetEndPoint}`;

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

const jFLocalGetYesterday = () => {
    const yesterday = new Date();

    // Subtract one day. The setDate() method automatically handles date roll-over.
    yesterday.setDate(yesterday.getDate() - 2);

    // Extract the components and ensure they are padded with a leading zero.
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(yesterday.getDate()).padStart(2, '0');

    // Combine into the YYYY-MM-DD format.
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
};

export { StartFunc };

