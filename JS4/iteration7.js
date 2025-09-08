const num = [1,2,3,4,5,6,7,8]

const mynum =num
         .map((num1)=>{return num1 * 10 })
         .map((num1)=>{return num1+1})
         .filter((num1)=>{ return num1>40})

 console.log(mynum);
    
