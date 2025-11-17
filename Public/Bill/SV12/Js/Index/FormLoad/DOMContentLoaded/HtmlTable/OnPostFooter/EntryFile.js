import { StartFunc as StartFuncFromForDefaultValue } from "./forDefaultValue.js";
import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";

let StartFunc = (inData, inOptions) => {
    StartFuncTableFooterSaveButtonId();

    const jVarLocalFooterCells = inOptions.$tableFooter[0].querySelectorAll("th");

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