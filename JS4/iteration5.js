const Language = ["java","Cpp","python","javascript"]

Language.forEach((i)=>{
    //console.log(i);
    
})

function coding(a){
    //console.log(a);
}
Language.forEach(coding)

Language.forEach(function(code ){
    //console.log(code);
    

})

Language.forEach((item, index, arr)=>{
    //console.log(item , index ,arr);
})


const Mycoding=[
    {
        lang: "javascript",
        filename :"js "
    },
    {
        lang:"python",
        filename : "py"
    },
    {
        lang:"java",
        filename:"java "
    }
]

Mycoding.forEach((item)=>{
    console.log(item.filename);
})