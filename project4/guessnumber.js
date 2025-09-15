
let random =(parseInt(Math.random()*100+1))
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guess-number')
const guessslot=document.querySelector('#guesses')
const remaing=document.querySelector('.lastresult')
const lower=document.querySelector('.lower')
const startover=document.querySelector('.result-paras')

const p = document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true 

submit.addEventListener('click',function(e){
    e.preventDefault();
    let guess=parseInt(userinput.value);
    validateGuess(guess);
})


function validateGuess(guess){
    guess=parseInt(guess)
    console.log("paresd guess:", guess);
    
    if(isNaN(guess)){
        displaymessage('Please enter a valid number ')
    }else if (guess<1){
        displaymessage('please enter a number more than 1 ')
    }else if (guess>100){
        displaymessage('please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayguesss(guess)
            displaymessage(`Game over , random number was ${random}`)
            endgame()
        }else{
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    console.log(guess,random);
    
    if(guess===random){
        displaymessage('you guessed it right ')
        endgame()
    }else if(guess>random){
        displaymessage('number is too high')
    }else if(guess<random){
        displaymessage('number is too low')
    }     
}

function displayguesss(guess){
    userinput.value=''
    guessslot.innerHTML+= `${guess}`
    numGuess++
    remaing.innerHTML=`${11-numGuess} `
}

function displaymessage(message){
    lower.innerHTML=`<h2>${message}</h2>}`
}
function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id=newgame>start new game</h2>`
    startover.appendChild(p)
    playGame=false
    newgame()
}
function newgame(){
   const startbutton= document.querySelector('#newgame')
   if(startbutton){
   startbutton.addEventListener('click',function(e){
     random=(parseInt(Math.random()*100+1))
     prevGuess=[]
     numGuess=1
     guessslot.innerHTML=''
     remaing.innerHTML=`${11-numGuess}`
     userinput.removeAttribute('disabled')
     startover.removeChild(p)
     playGame=true
     })
}
}

