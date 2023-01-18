async function vivek()  { 
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("temperature of banglore is 27 degree") 
    }, 1000)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("temperature of jaipur is 30 degree") 
    }, 5000 )
})
p1.then(alert)
p2.then(alert)



}


console.log("welcome to weather control room!!")
vivek();   