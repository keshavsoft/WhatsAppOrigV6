import KeysJson from './keys.json' with { type: 'json' };

let StartFunc = () => {
    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

export { StartFunc };
