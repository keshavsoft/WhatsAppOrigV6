const StartFunc = () => {

    if (window.location.search) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const userName = urlParams.get('UserName');
        const password = urlParams.get('Password');
        jfInput({ inId: "UserNameId", inValue: userName });
        jfInput({ inId: "PasswordId", inValue: password });

        // Log the results to the console
        console.log('User Name:', userName);
        console.log('Password:', password);
    };

};

const jfInput = ({ inId, inValue }) => {
    let jVarLocalInput = document.getElementById(inId);
    jVarLocalInput.value = inValue
};

export { StartFunc };
