/*let a = 1
const b = 400           // this called global scope
var c = 78*/

//{} this called scope

let a =300

if (true){
    let a = 1                //and this called block scope and block scope se value bahar
    const b = 400            //nhi anna chahiye
    console.log("INNER:", a);        //agar ham andar console likhe ge to andar ke value aayegi
}


console.log(a);
//console.log(b);           // jo global scope pe value hoge wahi aagyega  if scope ke bahar likhege to
//console.log(c);

 
function one (){
    const username ="saba "

    function two (){
        const website ="youtube"
        console.log(username);
        
    }
    two()
    //console.log(website);
    

}
one()


if (true){
    const username ="shar"
    if(username==="shar"){
        const website = "insta"
        console.log(username   +    website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++++++++++++++ INTERESTING  ++++++++++++++++++++++++++++++++++++++++



console.log(addtwo(9)) 
const addtwo = function (num){        //cannot access addtwo before initialization
    return num +2
}


function addone(num){
    return num +1
}
console.log(addone(8));
