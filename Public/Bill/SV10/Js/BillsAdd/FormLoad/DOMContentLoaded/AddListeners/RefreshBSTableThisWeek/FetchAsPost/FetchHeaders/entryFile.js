import KeysJson from './keys.json' with { type: 'json' };

let StartFunc = () => {
    const dateList = getDatesFromTodayToLastMonday();

    const jVarLocalKeysJson = { ...KeysJson };

    jVarLocalKeysJson.body.inValue = dateList;

    jVarLocalKeysJson.body = JSON.stringify(jVarLocalKeysJson.body);

    return jVarLocalKeysJson;
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
};

export { StartFunc };
