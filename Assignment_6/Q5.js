function countDigits(){
    let a=9748;
    let sum=0;
    while(a>0){
        sum++;
        a=Math.floor(a/10)
    }
    console.log(sum)
}
countDigits()