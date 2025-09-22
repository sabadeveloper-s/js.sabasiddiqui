class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username${this.username}`);
        
    }
     static createid(){
        return `123`
    }
}
const saba = new user("saab")
//console.log(saba.createid());
