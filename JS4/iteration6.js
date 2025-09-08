//const Language = ["java","Cpp","python","javascript"]


//const values = Language.forEach((item)=>{
    //console.log(item);
  //  return item
//})
//console.log(values);

//const mynum =[1,2,3,4,5,6,7,8,9,10]

//const newnum =   mynum.filter((item)=>item < 5)
//console.log(newnum);

//const mynum =[1,2,3,4,5,6,7,8,9,10]

//const newnum =   mynum.filter((item)=>{
//     item < 5})
//console.log(newnum);


//const mynum =[1,2,3,4,5,6,7,8,9,10]

//const newnum =   mynum.filter((item)=>{
//     return item < 5})
//console.log(newnum);

// in filter we can get value but in for each we can"t 

// actually we can nut we have used a logic 
//const newnums =[]

//mynum.forEach((num)=>{
//    if(num>4){
//        newnums.push(num)
//    }
//})
//console.log(newnums);



const books = [
    {
        title:"book1",genre:"fiction ",published : "1998",
        edition :"2004"
    },
    {
        title:"book2",genre:"fiction ",published : "1998",
        edition :"2004"
    },
    {
        title:"book3",genre:"fiction ",published : "1998",
        edition :"2004"
    },
    {
        title:"book4",genre:"non-fiction ",published : "1998",
        edition :"2004"
    },
    {
        title:"book5",genre:"history",published : "1998",
        edition :"2004"
    },
    {
        title:"book6",genre:"vintage ",published : "1998",
        edition :"2004"
    },
    {
        title:"book7",genre:"vintage ",published : "1998",
        edition :"2004"
    },
    {
        title:"book8",genre:"history",published : "1998",
        edition :"2004"
    },
    {
        title:"book9",genre:"non-fiction ",published : "1998",
        edition :"2004"
    }
]

const userbooks=books.filter((bk)=> {return bk.genre ==="history"} )

console.log(userbooks);


