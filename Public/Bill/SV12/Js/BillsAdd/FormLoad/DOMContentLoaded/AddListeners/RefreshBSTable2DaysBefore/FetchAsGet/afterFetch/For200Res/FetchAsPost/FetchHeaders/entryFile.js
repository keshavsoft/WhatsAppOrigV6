import KeysJson from './keys.json' with { type: 'json' };

let StartFunc = ({ inDataAsArray }) => {
    const jVarLocalPKArray = inDataAsArray.map(element => {
        return element.pk.toString();
    });

    const jVarLocalKeysJson = { ...KeysJson };

    jVarLocalKeysJson.body.inValue = jVarLocalPKArray;

    jVarLocalKeysJson.body = JSON.stringify(jVarLocalKeysJson.body);

    return jVarLocalKeysJson;
};

export { StartFunc };
