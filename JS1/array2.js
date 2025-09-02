const marvel_heros =["thor","ironman" ,"spiderman"]
const dc_heros =["batman","flash","superman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);  // don't showing proper 


//marvel_heros.concat(dc_heros)
//console.log(marvel_heros);     //need new array 


const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);                              // its showing proper 

//spread operator

const newallheros= [...marvel_heros,...dc_heros]
console.log(newallheros);                             //prefer this

const number=[1,2,3[1,4,5[4,5,6]]]
const new_realnumber = number.flat(Infinity)
console.log(new_realnumber);

console.log(Array.isArray("sharsa"));
console.log(Array.from("sharsa"));

console.log(Array.from({name:"sharsa"}));     //interesting question

let score=100
let score1=200
let score2=300

console.log(Array.of(score,score1,score2));       



