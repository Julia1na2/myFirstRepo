let name= 'Juliana';
console.log('Hello' + ' ' + name);
let num1=Number(prompt('Input the first number'));
document.write(num1);
let num2= Number(prompt('Input the second number'));
sum = num1 + num2;
console.log('The sum of the 2 numbers is' + ' '+ sum);
difference= num1-num2;
console.log('The difference among the 2 numbers is'+ ' '+ difference);
product= num1*num2;
console.log('The product of the 2 numbers is'+' '+ product);
quotient=num1/num2;
console.log('The quotient of the 2 numbers is'+' '+ quotient)
if(num1<num2){
    console.log('The largest number is '+ ' '+ num1); 
}
else if(num2<num1) {
    console.log('The largest number is'+ ' '+ num1);
}
else {
    console.log('The numbers are equal')
}
d= new Date()
console.log('The date of today and time is'+' '+d);
let temp=Number(prompt('Enter a temperature'));
Celcius = 'C';
Kelvin= 'K';
var conv= prompt('Is your temperature in Celsius(C) or Kelvin(K)');
let value;
if( value = 'Celsius'){
    temp=temp+273;
    console.log('The temperature in kelvin is' + ' ' + temp + 'K');
}
else if (value= 'Kelvin'){
    temp=temp-273;
    console.log('The temperature in celcius is' + ' ' + temp + 'C');
}
else{
    console.log('Invalid temperature');
}