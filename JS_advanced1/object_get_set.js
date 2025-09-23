const user={
    _email:"saba@gmail.com",
    _password:"sgu6789",

    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password=value
    }
}
const saba = Object.create(user)
console.log(saba.password);
