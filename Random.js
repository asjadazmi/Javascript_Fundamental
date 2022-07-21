var random1=Math.floor(100+Math.random()*899);
var random2=Math.floor(100+Math.random()*899);
var random3=Math.floor(100+Math.random()*899);
var random4=Math.floor(100+Math.random()*899);
var random5=Math.floor(100+Math.random()*899);
if(random1>random2&&random1>random3&&random1>random4&&random1>random5){
console.log("random 1 is greater="+random1);
}
else if(random2>random1&&random2>random3&&random2>random4&&random2>random5){
console.log("random 2 is greater="+random2);}
else if(random3>random1&&random3>random2&&random3>random4&&random3>random5){
console.log("random 3 is greater="+random3);}
else if(random4>random1&&random4>random2&&random4>random3&&random4>random5){
console.log("random 4 is greater="+random4);}
else{
    console.log("random 5 is greater="+random5);
}



