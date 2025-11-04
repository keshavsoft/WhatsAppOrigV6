import ConfigJson from "../../../../../../../../../Config.json" with {type: 'json'};
const jVarCommonFolderName = ConfigJson.PublicFolder.BillFolderName;

let StartFunc = ({ inResponse }) => {
    console.log("inResponse : ", inResponse);
    // 1. Get current URL
    const currentUrl = new URL(window.location.href);

    // 2. Get existing search params
    const params = currentUrl.searchParams;
    console.log("bbbbbbbbbbb : ", params.toString()); // Use this URL or redirect, etc.

    jFLocalAddUrlParams({ inSuccessUrl: `../../Bill/${jVarCommonFolderName}/index.html?${params.toString()}` });
};

const jFLocalAddUrlParams = ({ inSuccessUrl }) => {
    const jVarLocalRedirectUrl = ConfigJson.Protected.RedirectUrl;

    const url = new URL(window.location.href);

    let NewURl = new URL(jVarLocalRedirectUrl, url);

    NewURl.searchParams.append('SuccessUrl', inSuccessUrl);
    console.log("11111111 : ", NewURl.href);

    window.location.href = NewURl.href;
};

// const jFLocalAddUrlParams = ({ inSuccessUrl }) => {
//     const jVarLocalRedirectUrl = ConfigJson.Protected.RedirectUrl;

//     // 1. Get current URL
//     const currentUrl = new URL(window.location.href);

//     // 2. Get existing search params
//     const params = currentUrl.searchParams;
//     console.log("aaaaaaaaaaa : ", params); // Use this URL or redirect, etc.

//     // 3. Add a new search param
//     params.set('SuccessUrl', inSuccessUrl); // Change 'newParam' and 'newValue' as needed

//     // 4. Create new URL with updated params
//     // const newUrl = `${currentUrl.origin}${currentUrl.pathname}?${params.toString()}`;
//     const newUrl = `${jVarLocalRedirectUrl}?${params.toString()}`;

//     console.log(newUrl); // Use this URL or redirect, etc.
//     // window.location.href = newUrl; // Uncomment to navigate to the new URL

// };


export { StartFunc };