const randomColor = function(){
    const hex ='0123456789ABCDEF';
    let color = '#';
    for(i=0;i<6;i++){
     color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let interval
const startChangingcolor =function(){
    if(!interval){
     interval =setInterval(changebgcolor,1000);
    } 
    function changebgcolor(){
        let color = randomColor();
    document.body.style.backgroundColor=color
    document.querySelector('nav').style.backgroundColor=color
    }
}
 function stopchangingcolor(){
    clearInterval(interval);
    interval=null;
 }
document.querySelector('#start').addEventListener('click',startChangingcolor)

document.querySelector('#Stop').addEventListener('click',stopchangingcolor)