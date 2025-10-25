import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonTableName from '../../../../../../../Config.json' with {type: 'json'};
import OptionsJson from '../options.json' with {type: 'json'};
const CommonDaysBefore = OptionsJson.Filters.DaysBefore;

let StartFunc = async () => {
    // const today = new Date();
    const formattedDate = jFLocalGetYesterday();

    const dateList = getDatesFromTodayToLastMonday();
    console.log(dateList);

    let jVarLocalCommonTable = CommonTableName.TableName;
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint.replace("${Date}", formattedDate);
    let jVarLocalFetchUrl = `${jVarLocalCommonTable}/${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

const jFLocalGetYesterday = () => {
    const yesterday = new Date();

    // Subtract one day. The setDate() method automatically handles date roll-over.
    yesterday.setDate(yesterday.getDate() - CommonDaysBefore);

    // Extract the components and ensure they are padded with a leading zero.
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(yesterday.getDate()).padStart(2, '0');

    // Combine into the YYYY-MM-DD format.
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
};

function getDatesFromTodayToLastMonday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of day

    const dates = [];

    // Find last Monday
    const lastMonday = new Date(today);
    const dayOfWeek = lastMonday.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const daysSinceMonday = (dayOfWeek === 0) ? 6 : dayOfWeek - 1; // Adjust for Sunday
    lastMonday.setDate(today.getDate() - daysSinceMonday);

    // Collect dates from last Monday to today
    let currentDate = new Date(lastMonday);
    while (currentDate <= today) {
        dates.push((new Date(currentDate)).toISOString().substring(0, 10));

        // today.toISOString().substring(0, 10);

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}

export { StartFunc };

