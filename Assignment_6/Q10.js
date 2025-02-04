function an(){
    let n=153;
    let m=n;
    let sum=0;
    while(m>0){
        sum+=Math.pow(m%10,3)
        m=Math.floor(m/10)
    }
    if(sum==n){
        console.log("YEs")
    }else{
        console.log("No")
    }
}