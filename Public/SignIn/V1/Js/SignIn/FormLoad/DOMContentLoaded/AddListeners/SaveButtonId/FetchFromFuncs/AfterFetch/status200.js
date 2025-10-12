const StartFunc = ({ inRowPk }) => {
    // console.log("-------inRowPk : ", inRowPk);
    jFLocalAddUrlParams();
};

const jFLocalAddUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    const jVarLocalToUrl = params.get('SuccessUrl'); // Output: "Jane"
    console.log("aaaaaaaa : ", jVarLocalToUrl);

    if (jVarLocalToUrl === null) {
        window.location.href = "../../Bill/SV1/billsAdd.html";
    } else {
        window.location.href = jVarLocalToUrl;
    };

    // window.location.href = jVarLocalToUrl;
};

export { StartFunc };