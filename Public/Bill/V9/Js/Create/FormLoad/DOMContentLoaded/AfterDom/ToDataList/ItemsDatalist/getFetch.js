import ConfigJson from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    let jVarLocalFetchUrl = `${jVarLocalStartUrl}/BillsTable/Read/SingleColumn/BuyerName`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

