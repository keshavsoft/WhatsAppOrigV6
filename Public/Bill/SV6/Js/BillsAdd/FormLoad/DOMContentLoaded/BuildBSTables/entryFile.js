import { StartFunc as StartFuncFromHtmlTable } from "./HtmlTable/EntryFile.js";
import { StartFunc as StartFuncFromHtmlTableForYesterday } from "./HtmlTableForYesterday/EntryFile.js";
import { StartFunc as StartFuncFromHtmlTableFor2DaysBefore } from "./HtmlTableFor2DaysBefore/EntryFile.js";
import { StartFunc as StartFuncFromHtmlTableForThisWeek } from "./HtmlTableForThisWeek/entryFile.js";

const StartFunc = () => {
    StartFuncFromHtmlTable();
    StartFuncFromHtmlTableForYesterday();
    StartFuncFromHtmlTableFor2DaysBefore();
    StartFuncFromHtmlTableForThisWeek();
};

export { StartFunc };
