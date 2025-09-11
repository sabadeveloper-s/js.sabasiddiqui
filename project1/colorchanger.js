const button =document.querySelectorAll('.button')
//console.log(button);
const bodys=document.querySelector('body')
//console.log(bodys);
 const nav =document.querySelector('nav')
 const canvas= document.querySelector('.canvas')
button.forEach(function(btn){
    console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='grey')
           bodys.style.backgroundColor=e.target.id
           nav.style.backgroundColor=e.target.id
           canvas.style.backgroundColor=e.target.id
       
        if(e.target.id==='white')
           bodys.style.backgroundColor=e.target.id
           nav.style.backgroundColor=e.target.id
           canvas.style.backgroundColor=e.target.id

        if(e.target.id==='blue')
           bodys.style.backgroundColor=e.target.id
           nav.style.backgroundColor=e.target.id
           canvas.style.backgroundColor=e.target.id

        if(e.target.id==='orange')
            bodys.style.backgroundColor=e.target.id
            nav.style.backgroundColor=e.target.id
           canvas.style.backgroundColor=e.target.id
        
    })
    

})

