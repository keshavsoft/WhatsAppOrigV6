import ConfigJson from '../../../../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;
    // GET http://localhost:9008/V6/BillItemsTable/Read/SingleColumn/ItemName
    let jVarLocalFetchUrl = `${jVarLocalStartUrl}/BillItemsTable/Read/SingleColumn/ItemName`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

