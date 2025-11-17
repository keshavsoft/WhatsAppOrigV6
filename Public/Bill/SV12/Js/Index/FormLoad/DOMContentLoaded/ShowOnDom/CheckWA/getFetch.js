let StartFunc = async () => {
    let jVarLocalFetchUrl = `/WA/Check`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

