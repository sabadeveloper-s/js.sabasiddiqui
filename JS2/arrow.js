

const user = {
    username :"sabasiddiqui",
    price :"990",
    
    sentamessage :function(){
        console.log(`${this.username}, welcome to website`); 
        //console.log(this);      //when we do in body its give piece of code 
        
    }
}
 //this keyword is refer to a context like function of body supposed to run 
//user.sentamessage()
//user.username="sam"
//user.sentamessage()

//console.log(this); //when we console "this "out of  any body its empty 
//console.log(this); //but in browser its show global window 


function chai (){
    console.log(this);  //when we use this keyword in function in node environment its give globsl value 
}
//chai()                    

//function chai (){
//     username:"saba"
//    console.log(this.username);    //in function , we can't use this keyword 
//}
//chai()                       


//const chai = function(){
//    username:"saba "
//    console.log(this.username);
//}
//chai()

//const chai = ()=>{
//    username:"saba"
//  console.log(this.username);     //arrow function don't own "this"
//}                                   //arrow inherit  this from the surrounding scope  
//chai()                               //arrow fn can"t be used as constructor 


/*const addtwo=(num1,num2)=>{
    return num1 + num2
}
console.log(addtwo(5,6));*/

//const addtwo=(num1,num2)=>{return num1 +num2}
//console.log(addtwo(6,7));


//const addtwo=(num1,num2)=>num1+num2      //we can also write like this - (num1+num2)
//console.log(addtwo(6,7))

const addtwo= (num1 ,num2)=>({username:"shar"})    // when we use object use parenthes 
console.log(addtwo());


//when we use curly braces we have to write retuen 
//if not don't write return 