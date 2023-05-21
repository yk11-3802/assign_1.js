const prompt=require("prompt-sync")({sigint:true});
let num1 = parseInt(prompt("Enter number 1 :"))
let num2 = parseInt(prompt("Enter number 2 :"))
result = num1+num2
console.log("Sum of ",num1," and ",num2," is : ",result)