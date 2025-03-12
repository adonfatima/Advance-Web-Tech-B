console.log("start")
const a=new Promise((resolve,reject)=>{
    let success =true
    if( success){
        resolve("Done")
    }
    else {
        reject("Not Done")
    }
})
a
.then ((message)=>console.log(message))
.catch((error)=>console.log(error))
console.log("End")