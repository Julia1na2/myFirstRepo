let num1=Number(prompt('Enter a number'));
if (num1<0){
    console.log('The number is a negative number')
}
else if(num1>0){
    console.log('The number is a positive number');
}
else{
    console.log('The number is 0 hence neutral');
}

console.log('This is to solve a quadratic equation');
let a= Number(prompt('Enter the value for a'));
let b= Number(prompt('Enter the value for b'));
let c=Number(prompt('Enter the value for c'));
let answer= (b*b)-(4*a*c);
if (answer>0){
    let r1=(-b+Math.pow(answer,0.5)/ 2*a);
    let r2=(-b-Math.pow(answer,0.5)/ 2*a);
    console.log('The roots of your equation are'+' '+ r1+' '+ 'and'+' '+ r2);
}
else if(answer==0){
    let r1= -b/(2*a);
    console.log('The root of your equation is'+ r1);
}
else{
    console.log('The equation has no real roots')
}

console.log('This is to give you the day of a week');
let day=Number(prompt('input a number to display a day of the week'));
let dayname=day;
switch(dayname){
    case 1: console.log("Monday");break;
    case 2: console.log("Tuesday");break;
    case 3: console.log("Wednesday");break;
    case 4: console.log("Thursday");break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday");break;
    case 7: console.log("Sunday");break;
    default: console.log("Invalid day range");
}

console.log('This tells us whether a year is leap or not');
let year=prompt('Enter a year');
for (let i in year){
    if (year.length<4){
        console.log(prompt('Enter a valid year range'));
}
}
let x= Number(year%4)==0;
let y= Number(year%100)!=0;
let z= Number((year%100==0) && (year%400==0));
if(x && (y||z)){
    console.log(year +' '+ "is a leap year")
}
else {
    console.log(year +' '+'is not a leap year');
}

console.log('This tells us whether a character is a vowel or a consonant');

