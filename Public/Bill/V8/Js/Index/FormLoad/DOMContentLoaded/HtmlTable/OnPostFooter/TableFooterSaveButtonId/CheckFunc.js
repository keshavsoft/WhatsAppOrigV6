let StartFunc = () => {
    const jVarLocalItemName = jFLocalHtmlIdItemName();
    console.log("jVarLocalItemName : ", jVarLocalItemName);
    if (jVarLocalItemName === "") {
        let jVarLocalHtmlIdItemName = 'HtmlId-ItemName'
        let jVarLocalHtmlId = document.getElementById(jVarLocalHtmlIdItemName);

        jVarLocalHtmlId.classList.add("is-invalid")

        jVarLocalHtmlId.focus();

        return false
    };

    return true;
};

let jFLocalHtmlIdItemName = () => {
    let jVarLocalHtmlIdItemName = 'HtmlId-ItemName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalHtmlIdItemName);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }