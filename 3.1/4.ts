type O<T> = Record<string,T>

function mapObject<In,Out>(obj: O<In>,transformer: (a: In) => Out) {
    let res: O<Out> = {};
    let objKeys = Object.keys(obj);
    objKeys.forEach(element => {
        res[element] = transformer(obj[element])
    });
    return res;
}

console.log(mapObject({ "roma" : 5, "vasya": 2 }, (x) => x > 2)) //{ "roma": true, "vasya": false }