/* eslint-disable no-console */
let pronombres = ['the', 'our'];
let adjetivos = ['great', 'big'];
let sustantivos = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io'];


/*

for (let p in pronoun) {
    for (let a in adj) {
         for (let n in noun) {
         // console.log(pronoun[p]+adj[a]+noun[n]+extension[Math.floor(Math.random() * 3) + 1]);
        }
    }
}
*/


for (let p = 0; p < p.length; p++) {
    for (let a = 0; a < a.length; a++) {
        for (let n = 0; n < n.length; n++) {
            console.log(pronombres[p]+adjetivos[a]+sustantivos[n]+extension[Math.floor(Math.random() * 3) + 1]);
        }
    }
}
