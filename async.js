console.log("strat")
async function a() {
    await new Promise(()=>{
        setTimeout(()=>{
            let sum=0
            for(i=0;i<10000000;i++){
                sum=sum+i
            }
            console.log(sum);

        },20);
    })
}
a()
console.log("End")