class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }

    addcourse(){
        console.log(`course added by ${this.username}`);
    }
}

const ksil = new teacher("saba","saab@gamil.com","345")
ksil.addcourse()

const rset = new  user("siddiqui")
rset.logMe()

console.log(rset instanceof user);
