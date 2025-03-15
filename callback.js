console.log("start");

function a(callback){
    setTimeout(()=>{
        let sum=0;
        for(let i=0;i<10;i++){
            sum+=i;
        }
        console.log(sum);
        callback();
    },20);
}
a(()=>{
    console.log("End");
});