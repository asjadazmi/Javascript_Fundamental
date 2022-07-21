// var year1=window.prompt("Enter the year you want to check:");
var year=2024;
if(year%4==0&&year%100!=0||year%400==0){
    console.log("year is leap year="+year)

}else{
    console.log("this is not leap year")
}