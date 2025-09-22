//let myname ="saba       "
//let mychannel="sabacodess"
//console.log(myname.trim().length);

//console.log(myname.trim().length);

let student =["tabassum","saba","zoya"]

let studentpower={
    tabassum:"eat anytime in class ",
    saba:"use phone anytime ",

    getpower:function(){
        console.log(`saba power is ${this.saba}`);
        
    }
}

Object.prototype.shar=function(){
    console.log('shar is present in everywhwere');
    
}
//studentpower.shar()
//student.shar()



const teacher = {
    makinvideo:true,
}
const  teachingSupport ={
    isavailabe:true
}

const TAsupport={
    makeassignment:"js assignment",
    fulltime:true,
    __proto__:teachingSupport   //to linked

}

teacher.__proto__=TAsupport

//modern syntax

//Object.setPrototypeOf(teachingSupport,teacher)


let anothername="saba     "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.anothername}`);
    console.log(`true length is ${this.trim().length}`);
}

anothername.truelength()
