
let pronouns = ['the','our'];
let adjs = ['great', 'big'];
let nouns = ['room','site'];
let exts = ['.com','.org'];

pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
        nouns.forEach(noun => {
            exts.forEach(ext => {
                console.log(pronoun + adj + noun + ext);
            });
         });
    });
});

