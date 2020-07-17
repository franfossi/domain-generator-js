
let pronoun = ['the','our'];
let adj = ['great', 'big'];
let noun = ['room','site'];
let ext = ['.com','.org'];

pronoun.forEach(ele1 => {
    adj.forEach(ele2 => {
        noun.forEach(ele3 => {
            ext.forEach(ele4 => {
                console.log(ele1 + ele2 + ele3 + ele4);
            });
         });
    });
});

