let jVarLocalHtmlIdItemName = 'HtmlId-Rate'

let StartFunc = () => {
    const jVarLocalItemName = jFLocalHtmlIdItemName();
    // console.log("jVarLocalItemName : ", jVarLocalItemName);
    let jVarLocalHtmlId = document.getElementById(jVarLocalHtmlIdItemName);

    if (jVarLocalItemName === "") {
        jVarLocalHtmlId.classList.add("is-invalid")

        jVarLocalHtmlId.focus();

        return false
    } else {
        jVarLocalHtmlId.classList.remove("is-invalid");
        jVarLocalHtmlId.classList.add("is-valid");
    };

    return true;
};

let jFLocalHtmlIdItemName = () => {
    let jVarLocalHtmlId = document.getElementById(jVarLocalHtmlIdItemName);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }