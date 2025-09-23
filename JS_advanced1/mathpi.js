//console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

//console.log(Math.PI);
//Math.PI=8
//console.log(Math.PI);

const chai ={
    name:"ginger tea",
    price:90,
    isAvailable:true,

    orderchai:function(){
        console.log("chai nhi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"price"));

Object.defineProperty(chai,"price",{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"price"));


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function')
    console.log(`${key}:${value}`);
    
}