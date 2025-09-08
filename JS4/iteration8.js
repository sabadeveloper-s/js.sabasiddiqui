const mynums=[1,2,3,4]

//const totalnum=mynums.reduce(function (acc,currval){
//    console.log(`acc:${acc}, currval:${currval}`);
//    return acc+currval},0)
//console.log(totalnum);


//const totalnum = mynums.reduce((acc,currval)=>acc+currval,0)
//console.log(totalnum);

const shoppingcart=[
    {
        item:"bag",
        price :999
    },
    {
      item:"dress",
      price :1200
    },
    {
      item:"accesories",
      price :1000
    },
    {
      item:"footwear",
      price :19000
    }
]

const payment=shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(payment);
