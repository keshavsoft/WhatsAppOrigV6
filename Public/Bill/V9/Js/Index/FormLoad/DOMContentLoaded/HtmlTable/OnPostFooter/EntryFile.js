import { StartFunc as StartFuncFromForDefaultValue } from "./forDefaultValue.js";
import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = (inData, inOptions) => {
    StartFuncTableFooterSaveButtonId();

    // const k1 = inOptions.$tableFooter[0].querySelectorAll("th")[1].querySelector("input");
    // const jVarLocalColumns = inOptions.columns;
    // console.log("jVarLocalColumns", jVarLocalColumns);
    const jVarLocalFooterCells = inOptions.$tableFooter[0].querySelectorAll("th");

    // today changed the footer to 2 rows
    // console.log("inOptions.$tableFooter : ", inOptions.$header[0].querySelectorAll("tr th[data-field='Amount']"));
    // const jVarLocalHeader = inOptions.$header[0].querySelector("tr th[data-field='Amount'] div.th-inner");
    // console.log("inOptions.$tableFooter : ", inData, k2, jVarLocalHeader.innerHTML = "111111111");
    // const jVarLocalFooterCells = inOptions.$tableFooter[1].querySelectorAll("th");

    // console.log("pppppppppppp : ", inData);

    StartFuncFromForDefaultValue({
        inColumns: inOptions.columns,
        inFooterCells: jVarLocalFooterCells
    });

    LocalFuncSetFocus();
};

const LocalFuncSetFocus = () => {
    let $autoFocusInput = $("#table tfoot").find("input[autofocus], select[autofocus], textarea[autofocus]");

    if ($autoFocusInput.length > 0) {
        $autoFocusInput[0].focus();
    };
};

export { StartFunc };