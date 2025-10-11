import { StartFunc as StartFuncRefreshBSTableClass } from "./RefreshBSTableClass/entryFile.js";
import { StartFunc as StartFuncFromRefreshBSTableYesterdayClass } from "./RefreshBSTableYesterdayClass/entryFile.js";
import { StartFunc as StartFuncFromRefreshBSTable2DaysBefore } from "./RefreshBSTable2DaysBefore/entryFile.js";

let StartFunc = () => {
  StartFuncRefreshBSTableClass();
  StartFuncFromRefreshBSTableYesterdayClass();
  StartFuncFromRefreshBSTable2DaysBefore();
};

export { StartFunc };
