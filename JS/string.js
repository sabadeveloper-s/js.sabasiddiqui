const name ="saba"
const repCount="2"
//console.log( name + repCount +"value"); // don"t use this 

console.log(`hello my name is  ${name} and my repcount is ${repCount}`);   // use this 
 
const gameName = new String('sharsa')
console.log(gameName[0]);    
console.log(gameName._prototype);   //undefined

 //functions / method 
     console.log(gameName.length);
     console.log(gameName.toUpperCase());
     console.log(gameName.charAt(2));
     console.log(gameName.indexOf('h')) ;

     const newstring =gameName.substring(0,4)
     console.log(newstring);
     const anotherstring=gameName.slice(-8,4)
     console.log(anotherstring);
    
     const newstringone= "              siddiqui        "
     console.log(newstringone.trim());

     const url="https://sabasiddiqui%20s.com"
     console.log(url.replace('%20','-'));

     console.log(url.includes('shar'));
     console.log(gameName.split('-'));

     const str= "abcdefghijklmnopqrstuvwxyz"
     const regxp=/[a-e]/gi;
     console.log(str.match(regxp));    
     /*Imagine you have a long piece of text and you want to find all occurrences of a particular word, 
     or all numbers, or all email addresses.
    The match() method lets you tell the computer exactly what kind of text you're looking for 
    (using a "regular expression" as a detailed description), 
    and then it gives you back all the pieces of the original text that fit that description*/

    

