import UrlJson from './url.json' with {type: 'json'};

const StartFunc = ({ inRowPk, inBody }) => {
    // console.log("-------inRowPk : ", inRowPk);
    let LocalUserName = inBody.UserName;
    let LocalPassword = inBody.Password;
    
    localStorage.setItem("UserName", LocalUserName)
    localStorage.setItem("Password", LocalPassword)
    jFLocalAddUrlParams();
};

const jFLocalAddUrlParams = () => {
    const params = new URLSearchParams(window.location.search);
    const jVarLocalToUrl = params.get('SuccessUrl'); // Output: "Jane"
    // console.log("aaaaaaaa : ", jVarLocalToUrl);

    if (jVarLocalToUrl === null) {
        // window.location.href = "../../Bill/SV1/billsAdd.html";
        window.location.href = UrlJson.RedirectToUrl;
    } else {
        window.location.href = jVarLocalToUrl;
    };

    // window.location.href = jVarLocalToUrl;
};

export { StartFunc };