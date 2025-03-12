//Pratice 1
console.log(4 === 3); 
console.log(5 > 2); 
console.log(12 > 12); 
console.log(3 < 0); 
console.log(3 >= 3); 
console.log(11 <= 11); 
console.log(3 <= 2); 


//Pratice 2 Array
let items = ["6Months of Project Associate at Pixalive", "MCA", "Frontend Developer", "ReactJS", "MongoDB", "JavaScript"];
console.log(items[1] + items[2] + items[0] + items[3] + items[5] + items[4]);
console.log(items.length); //6

//for eg array items of name, age, graduate
let details = ["Thulasi", 24, true];
console.log(details)

//add the new variable in the list --> we can used PUSH
let number = [2, 3];
number.push(5);
console.log(number);

//remove the variable in the list --> we can used POP
number.pop();
console.log(number);

//Pratice 3 For Loop
for(let count=1; count<=10; count++ ){
    console.log(count);
}

//Pratice 4 Math Function
function rollDisc(){
    let randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
}
console.log(rollDisc());
