// import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = ({ inResponse }) => {
   // StartFuncFromFetchAsGet();
   LocalFuncFetchForSubTable();

   Object.entries(inResponse).forEach(([key, value]) => {
      let inputElement = document.getElementById(`HtmlId-${key}`);
      if (inputElement !== null) {
         inputElement.value = value;
      }
   });
};

const LocalFuncFetchForSubTable = () => {
   let jVarLocalRefreshBSTableId = document.querySelector(`.RefreshBSTableOnlyClass`);

   jVarLocalRefreshBSTableId.click();
};

export { StartFunc };
