import KeysJson from './keys.json' with { type: 'json' };

let StartFunc = ({ inDataAsArray }) => {
    const jVarLocalPKArray = inDataAsArray.map(element => {
        return element.pk.toString();
    });

    KeysJson.body.inValue = jVarLocalPKArray;

    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

export { StartFunc };
