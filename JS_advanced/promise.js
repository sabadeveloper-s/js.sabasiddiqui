const promiseOne = new Promise(function(resolve,reject){
    //Do any sync task 
    //DB calls , cryptography,network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed ");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("saba");
        resolve()
    },1000)
    
}).then(function(){
    console.log('promise consumed');  
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"saba",email:"saba@example.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username :"ssaba",email: "saba@gmail.com"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promisefour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("promis is either rejected or accepted");
})



const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username :"ssaba",email: "saba@gmail.com"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})


async function consumedpromisefive() {
    try {
        const response =await promisefive
        console.log(response);  
    } catch (error) {
        console.log(error); 
    }
     
}
consumedpromisefive()


async function getallusers(){
    try {
        const data=  await fetch('https://randomuser.me/api/')
        const response1= await data.json()
        console.log(response1);  
    } catch (error) {
        console.log("E:",error);
    }
}
getallusers()

fetch('https://randomuser.me/api/')
.then(function(data){
    return data.json()
}).then(function(response1){
    console.log(response1);
    
}).catch(function(error){
    console.log(error);
})