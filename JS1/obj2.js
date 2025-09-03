//const tinderuser= new Object()    //object declaration 
const tinderuser ={}                //also a object declaration


tinderuser.id="1234"
tinderuser.name="wahid"
tinderuser.isloggedIn=false
//console.log(tinderuser);

const hingeuser = {
    email:"wahid@google.com",
    fullname :{
        userfullname:{
            firstname:"wahid",
            lastname:"sayyed"
        }
    }

}

console.log(hingeuser.fullname.userfullname.firstname);


//how to combine obj

const obj1={1:"a" ,2: "b"}
const obj2={3:"c",4:"d"}

//const obj3= {obj1,obj2}
//console.log(obj3);             //same as a array problem

//const obj3=Object.assign(obj1,obj2)
//console.log(obj3);

//const obj3=Object.assign({},obj1,obj2)     //if don't use {} empty error all value will goes to obj1
//console.log(obj3);                         //that why we used empty array

const obj3={...obj1,...obj2}
//console.log(obj3);                       //spread method

const user=[
    {
        name:"saba",
        location:"mumbai",
        email:"saba@gmail.com"
    },
    {
        name:"wahid",
        location:"delhi",
        email:"wahid@gmail.com"
    }
]

user[1].email
//console.log(user[1].email);

console.log(Object.keys(tinderuser));  //its show datatype
console.log(Object.values(tinderuser));  //its show values
console.log(Object.entries(tinderuser)); // its show key snd value

console.log(tinderuser.hasOwnProperty('isloggedIn'));  //to check property is thrre or not 



