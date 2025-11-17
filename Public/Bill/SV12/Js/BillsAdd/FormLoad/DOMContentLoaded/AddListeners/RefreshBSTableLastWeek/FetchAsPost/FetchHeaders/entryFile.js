import KeysJson from './keys.json' with { type: 'json' };

let StartFunc = () => {
    const dateList = jFLocalGetLastWeekDates();

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

const jFLocalGetLastWeekDates = (today = new Date()) => {
    const lastWeekDates = [];

    // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayOfWeek = today.getDay();

    // Calculate the date of the Monday of the current week
    // If today is Sunday (0), we need to subtract 6 days to get to last Monday.
    // If today is Monday (1), we need to subtract 0 days to get to last Monday.
    // If today is Tuesday (2), we need to subtract 1 day to get to last Monday.
    const daysToSubtractForCurrentMonday = (dayOfWeek === 0) ? 6 : dayOfWeek - 1;

    const currentWeekMonday = new Date(today);
    currentWeekMonday.setDate(today.getDate() - daysToSubtractForCurrentMonday);
    currentWeekMonday.setHours(0, 0, 0, 0); // Set time to beginning of the day

    // Calculate the Monday of the *previous* week
    const lastWeekMonday = new Date(currentWeekMonday);
    lastWeekMonday.setDate(currentWeekMonday.getDate() - 7);

    // Collect all dates for the last week (Monday to Sunday)
    for (let i = 0; i < 7; i++) {
        const date = new Date(lastWeekMonday);
        date.setDate(lastWeekMonday.getDate() + i);
        // lastWeekDates.push(date);

        lastWeekDates.push((new Date(date)).toISOString().substring(0, 10));

    }

    return lastWeekDates;
};

export { StartFunc };
