//for of loop

const arr =["saba","sharjeel","wahid"]


for (const names of arr) {
   // console.log(names);
}

const greeting  = "hello world " 
for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
}

//maps       //map only get unique value 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america ")
map.set('FA', "France" )

//console.log(map);

for (const key of map) {
   // console.log(key);
}


for (const [key ,value ]of map) {
   // console.log(key, ':-' ,value);
}


const obj={
    'Game1': "PUBG",
    'Game2': "FREE FIRE",
    'Game3': "CANDY CRUSH"       //we can"t do obj bcoz obj is not iterable  we have to make them iterable 
}

for (const [key,value] of obj) {
   //console.log(key , value );
}


