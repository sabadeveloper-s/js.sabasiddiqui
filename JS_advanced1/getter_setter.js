class saba{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get email(){
            return this._email.toUpperCase()

        }
        set email(value){
            this._email=value

        }
        get password(){
            return this._password
        }
        set password(value){
            this._password=value
        }
}

const user =new saba("saba@gmail.com","saba2004")
console.log(user.password);
console.log(user.email);
