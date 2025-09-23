function saba (email,password){
    this._email=email,
    this._password=password

    Object.defineProperty(this,'email',{
         get:function(){
            return this._email.toUpperCase()
         },
         set:function(value){
            this._email=value
         }
    })
}

const user = new saba("saba@gmail.com","6789")
console.log(user.email);
