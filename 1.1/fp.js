const example = `44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в этом файле три строки-коммента :)`

describer = function (example) {
    processed = example
        .split('\n')
        .filter(s => s && s[0]!='#')
        .map(s => {
            res = Object.create(null);
            s = s.split('#').join('').split(',');
            res.x = s[0];
            res.y = s[1];
            res.city = s[2];
            res.population = s[3];
            return res;
        })
        .sort((a,b) => a.population - b.population)
        .slice(0,9)
        .reduce((o, s, i) => {
            o[s.city] = {
                rating: ++i, 
                population: s.population,
            };
            return o;
        }, {});
        console.log(processed)

    return function(text) {
        let result = text;
        Object.keys(processed).forEach(city => {
            result = result.split(city).join(`${city} (${processed[city].rating} место в ТОП-10 самых крупных городов Украины, население ${processed[city].population} человек)`)
        })
        return result;
    }
}(example)

console.log(describer(' ljlk Бердянськ 9087tyh j08--0Вінниця Джанкой Алушта'))
