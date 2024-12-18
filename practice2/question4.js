let number=444;

if(number%2==0 && number%3==0){
    console.log("The number is divisible by both 2 and 3")
}
else if(number%2==0){
    console.log("The number is only divisible by 2")
}
else if(number%3==0){
    console.log("The number is only divisible by 3")
}
else{
    console.log("The number is not divisible by both 2 and 3")
}