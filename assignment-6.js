"use strict";
console.log(`\t \n Q# 2 \t\n`);
//Q#2 (By Template Literals)
let personName = "Eric";
let message = `Hello ${personName},would you like to learn some Python today?`;
console.log(message);
console.log(`\t \n Q# 3 \t\n`);
//Q3 
let Name = "Arsalan Joiya";
console.log("uppercase:", Name.toUpperCase());
console.log("lowercase:", Name.toLowerCase());
//console.log("Titlecase:", Name.toTitlecase());
console.log(`\t \n Q# 4 \t\n`);
//Q#4
let Author = "ABX";
console.log(`Once ${Author} said that,"Man is not made for defeat"`);
console.log(`\t \n Q# 5 \t\n`);
//Q#5
let famous_person = "Steve Jobs";
let Message = "Stay hungry, stay foolish.";
console.log(`Once ${famous_person} said that, '${Message}'`);
console.log(`\t \n Q# 6 \t\n`);
//Q#6
let Name__ = '\t Henry \n';
console.log("Name with whitespace:", Name__);
let Name___ = Name__.trim();
console.log("Name with stripping whitespace:", Name___);
console.log(`\t \n Q# 7 \t\n`);
//Q#7
let num1 = 5 + 3;
console.log(num1);
let num2 = 10 - 2;
console.log(num2);
let num3 = 4 * 2;
console.log(num3);
let num4 = 16 / 2;
console.log(num4);
console.log(`\t \n Q# 8 \t\n`);
//Q#8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
console.log(`\t \n Q# 9 \t\n`);
//Q#9
let FavNumber = 295;
console.log(`"${FavNumber}" is my favoruite number`);
console.log(`\t \n Q# 10 \t\n`);
//Q#10
/*I am going to solve deal with strings
 with Template Literal Method*/
let FavNumber1 = 295;
let FavNumber2 = 'Favoruite number';
console.log(`"${FavNumber1}" is my ${FavNumber2}`);
console.log(`\t \n Q# 11 \t\n`);
//Q#11
let Friends = ['Tana', 'Kashi', 'Ahmad', 'Ali'];
// Printing each name using index values
console.log(`\t \n Q-11=method 1: to print message \t\n`);
console.log(Friends[0]);
console.log(Friends[1]);
console.log(Friends[2]);
console.log(Friends[3]);
// Printing each name using a for loop
console.log(`\t \nQ-11= method 2: to print message \t\n`);
for (let i = 0; i <= 3; i++) {
    console.log(Friends[i]);
}
console.log(`\t \n Q# 12 \t\n`);
//Q#12
let Friendss = ['Tana', 'Kashi', 'Ahmad', 'Ali'];
// Using index value
console.log(`\t \n Q-12-using index value Method to print message \t\n`);
console.log('Hello,', Friends[0], 'have a nice day!');
console.log('Hello,', Friends[1], 'have a nice day!');
console.log('Hello,', Friends[2], 'have a nice day!');
console.log('Hello,', Friends[3], 'have a nice day!');
// Using for loop
console.log(`\t \n Q-12=using for loop method  to print message \t\n`);
for (let i = 0; i <= 3; i++) {
    let friend1 = Friendss[i];
    console.log(`Hello, ${friend1} have a nice day!`);
}
//using template literals
console.log(`\t \n Q-12=using template literals method  to print message \t\n`);
console.log(`Hello, ${Friendss[0]} have a nice day!`);
console.log(`Hello, ${Friendss[1]} have a nice day!`);
console.log(`Hello, ${Friendss[2]} have a nice day!`);
console.log(`Hello, ${Friendss[3]} have a nice day!`);
console.log(`\t \n Q# 13 \t\n`);
//Q#13
let favoruiteCars = ['Honda', 'Tesla', 'Suzuki', 'Ferrari', 'Range-Rover'];
//mwthod 1
console.log(`\t \n Q-13=method 1: to print message \t\n`);
console.log(`I would like to buy,${favoruiteCars[0]}`);
console.log(`I would like to drive,${favoruiteCars[1]}`);
console.log(`I would like to sell,${favoruiteCars[2]}`);
console.log(`I would like to purchase,${favoruiteCars[3]}`);
console.log(`I would like to get,${favoruiteCars[4]}`);
//loop method 2
console.log(`\t \n Q-13=method 2: to print message \t\n`);
for (let i = 0; i <= 4; i++) {
    let cars = favoruiteCars[i];
    console.log(`I would like to own ${cars[i]}`);
}
//Method 3
console.log(`\t \n Q-13=method 3: to print message \t\n`);
for (let carss of favoruiteCars) {
    console.log(`I would like to own ${carss}`);
}
console.log(`\t \n Q# 14 \t\n`);
//Q#14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest = ['Ali', 'Ahmad', 'Rehman', 'Mahi'];
//method 1 
console.log(`\t \n Q-14=method 1: to print message \t\n`);
guest.forEach((person) => {
    console.log(`Dear ${person},you are invited to dinner`);
});
//method 2  
console.log(`\t \n Q-14=method 2: to print message \t\n`);
for (let i = 0; i < guest.length; i++) {
    let print = guest[i];
    console.log(`Dear ${print},you are invited to dinner`);
}
;
//method 3 
console.log(`\t \n Q-14=method 3: to print message \t\n`);
let invitation = guest.map((person) => {
    console.log(`Dear ${person} , you are invited to dnner`);
});
//method 4 
console.log(`\t \n Q-14=method 3: to print message \t\n`);
for (let guest1 of guest) {
    console.log(`Hello ${guest1}, you are invited to dinner`);
}
;
console.log(`\t \n Q# 15 \t\n`);
//Q#15
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let unabletoattend = guest.pop();
console.log(` ${unabletoattend} unable to attend`);
//Print a second set of invitation messages, one for each person who is still in your list.
let StillInvited = guest.map((person123) => {
    console.log(`${person123} is still invited`);
});
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.Zaki is our new guest
let newguest = guest.push('Zaki');
console.log(`${guest[newguest - 1]} is our new guest `);
//combine message for guests
console.log(`${guest} are our guests who are still invited`);
console.log(`\t \n Q# 16 \t\n`);
//Q#16
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log('Good News ! We have bigger dinner table');
//Add one new guest to the beginning of your array. Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
guest.unshift('GM'); //added to start
guest.splice(2, 0, 'Arsal'); //added to middle
guest.push('Ayaz'); //added to end
// Print a new set of invitation messages, one for each person in your list. 
//All guests are invited with single print message
console.log(`${guest} are invited to bigger dinner table`);
//All guests are invited ,with isolated message.
guest.forEach((person12) => {
    console.log(`Mr.${person12} is invited to bigger dinner table`);
});
console.log(`\t \n Q# 17 \t\n`);
//Q#17
//  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//slice will select last five member out of 7 from the array 
let Rejectedguests = guest.slice(-5);
//it will print a combine message for all 5 rejected members.
console.log(`Sorry, ${Rejectedguests} you are not invited`);
//Now if you want to send isolated message for each person who are rejacted that you are not invited
for (let i = guest.length - 5; i < guest.length; i++) {
    let RemovedGuest = guest[i];
    console.log(`${RemovedGuest} is not invited`);
}
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry, can invite only two people for dinner.");
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
guest.splice(2);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`${guest} ; you're still invited `);
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest.splice(0, 2);
console.log(`${guest}[empty array]`);
//Q#18
console.log(`\t\n Q#18 \t\n`);
// Store the locations in a array. Make sure the array is not in alphabetical order.
let PlaceToVisit = ['Berlin', 'Dubai', 'Essen', 'Capetown', 'Athens'];
//Print your array in its original order.
console.log('Origional order;');
console.log(PlaceToVisit);
//Print your array in alphabetical order without modifying the actual list.
console.log('Alphabatic order;');
let Alphaorder = [...PlaceToVisit].sort();
console.log(Alphaorder);
//Show that your array is still in its original order by printing it.
console.log('Origional order is same;');
console.log(PlaceToVisit);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse order;');
let Reverse = [...PlaceToVisit].sort((a, b) => b.localeCompare(a));
console.log(Reverse);
//Show that your array is still in its original order by printing it.
console.log('Origional order is same;');
console.log(PlaceToVisit);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log('Reverse order;');
let reversed = PlaceToVisit.sort((a, b) => b.localeCompare(a));
console.log(reversed);
console.log('Origional order changed;');
console.log(PlaceToVisit);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Reverse and Back to its original order;');
let OrigOrd = [...PlaceToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reversed:", OrigOrd);
console.log("back to its original order:", PlaceToVisit); //wrong 
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let Array123 = ['A', 'D', 'C', 'B', 'E'];
// Sort in alphabetical order
Array123.sort();
console.log("sorted in Alphabetical Order:", Array123);
// Sort in reverse alphabetical order
Array123.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse Order:", Array123);
//Q#19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`\t\n Q#19 \t\n`);
let guestes = ['Arsal', 'Asif', 'Mohsin', 'Messi'];
let numberofguest = guestes.length;
if (numberofguest === 4) {
    console.log('Sorry, We do not have sitting place for 4 people');
}
else if (numberofguest === 2) {
    console.log('Both of you are invited');
}
else if (numberofguest === 0) {
    console.log('Party Cancelled');
}
else {
    console.log('Number of guests does not match any expected count.');
}
//Q#20:
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
console.log(`\t\n Q#20 \t\n`);
const countries = ["United States", "Canada", "Australia",
    "United Kingdom", "Germany", "France",];
console.log("List of countries:", countries);
//Q#21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
console.log(`\t\n Q#21 \t\n`);
let classes = [
    {
        name: 'Srsal',
        class: '10th',
        Roll_No: '11',
    },
    {
        name: 'arsal',
        class: '11th',
        Roll_No: '12',
    },
    {
        name: 'basit',
        class: '12th',
        Roll_No: '13',
    }
];
console.log("class_details:", classes);
//Q#22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log(`\t\n Q#22 \t\n`);
let numArray = [1, 2, 3, 4];
console.log("Index Error:", numArray[10]); //index value=10 is not present in origional array,so it is index error
//correct the error before 
console.log(`Corrected the error: ${numArray}`);
//Q#23
//
console.log(`\t\n Q#23 \t\n`);
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True");
console.log(car == 'subaru');
console.log("Is car == 'Hyundai'? I predict False.");
console.log(car == 'Hyundai');
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');
console.log("Is car != 'Subaru'? I predict True.");
console.log(car != 'Subaru');
console.log("Is car.length > 4? I predict True.");
console.log(car.length > 4);
console.log("Is car=='corolla'? I predict False.");
console.log(car == 'corolla');
console.log("Is car !== 's'? I predict True.");
console.log(car !== 's');
//Q#24
//
console.log(`\t\n Q#24 \t\n`);
//Tests for equality and inequality with strings
let st1 = 'hello';
let st2 = 'world';
let stringEquality = st1 == st2; //false
console.log("String Equality:", stringEquality);
let stringInEquality = st1 !== st2; //True
console.log("string In-Equality:", stringInEquality);
//Tests using the lower case function
let O_string = "HELLO WORLD!";
let lowerCase = O_string.toLowerCase();
let LowerCaseEquality = st1 == 'hello'; //
console.log("Lower case equality:", LowerCaseEquality);
let LowerCaseInEquality = st2 == 'world'; //true
console.log("Lower case In-equality:", LowerCaseInEquality);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1_a = 10;
let num2_a = 20;
let equality = num1_a == num2_a; //false
console.log("num1 is equal to num2:", equality);
let Inequality = num1_a !== num2_a; //true
console.log("num1 is not equal to num2:", Inequality);
let greaterthan = num1_a > num2_a; //false
console.log("num1 is greater than num2:", greaterthan);
let lessthan = num1_a < num2_a; //true
console.log("num1 is less than num2:", lessthan);
let lessthanEqualTo = num1_a <= num2_a; //true
console.log("num1 is less than Equal To  num2:", lessthanEqualTo);
let greaterthanEqualTo = num1_a >= num2_a; //false
console.log("num1 is greater than Equal To  num2:", greaterthanEqualTo);
//Tests using "and" and "or" operators
let theory1 = 'true';
let theory2 = 'false';
let ANDoperator = theory1 && theory2; //false
console.log("AND-Operator:", ANDoperator);
let ORopearator = theory1 || theory2; //true
console.log("OR-Operator:", ORopearator);
//Test whether an item is in a array
let num_ = [1, 2, 3, 4];
let itemtofind = 3;
let iteminArray = num_.includes; //true
console.log("Item to find in array:", itemtofind);
//Test whether an item is not in a array
let itemtofind2 = 6;
let NotInArray = !num_.includes;
console.log("number-6 present in array:", NotInArray);
//Q#25
//
console.log(`\t\n Q#25 \t\n`);
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points
let alien_color = "Green";
if (alien_color == "Green") {
    console.log(" player just earned 5 points.");
}
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
else {
    console.log(" no output");
}
;
//Q#26
//
console.log(`\t\n Q#26 \t\n`);
let alien__color = "green";
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien__color == "green") {
    console.log("The player just earned 5 points");
}
;
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien__color !== "green") {
    console.log("The player just earned 10 points");
}
;
//Write one version of this program that runs the if block and another that runs the else block.
//one version of this program that runs the if block
if (alien__color == "green") {
    console.log("The player just earned 5 points");
}
else {
    console.log("The player just earned 10 points");
}
;
//another that runs the else block.
if (alien__color !== "green") {
    console.log("The player just earned 10 points");
}
else {
    console.log("The player just earned 5 points");
}
;
//Q#27
//
console.log(`\t\n Q#27 \t\n`);
//If the alien is green, print a message that the player earned 5 points.
if (alien__color == "green") {
    console.log("The player just earned 5 points");
}
//If the alien is yellow, print a message that the player earned 10 point
else if (alien__color == "yellow") {
    console.log("The player just earned 10 points");
}
// If the alien is red, print a message that the player earned 15 points.
else if (alien__color == "red") {
    console.log("The player just earned 15 points");
}
else {
    console.log("Color is not recognized");
}
;
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Switch case method
switch (alien__color) {
    case 'green':
        console.log('The player just earned 5 points');
        break;
    case "yellow":
        console.log('The player just earned 10 points');
        break;
    case "red":
        console.log('The player just earned 15 points');
}
//Object Method
let alienColor = {
    green: 5,
    yellow: 10,
    red: 15
};
if (alienColor) {
    console.log(`The player has just earned ${alienColor} points`);
}
else {
    console.log("Color is not recognized");
}
;
//Q#28
//
console.log(`\t\n Q#28 \t\n`);
let age = 68;
if (age < 2) {
    console.log("the person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("the person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("the person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("the person is teenager");
}
else if (age >= 20 && age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}
;
//Q#29
//
console.log(`\t\n Q#29 \t\n`);
let favorite_fruits = ['apple', 'banana', 'strawberry', 'orange', 'grape'];
if (favorite_fruits.includes("apple")) {
    console.log('I really like apples!');
}
if (favorite_fruits.includes('banana')) {
    console.log('I really like bananas!');
}
if (favorite_fruits.includes('strawberry')) {
    console.log('I really like strawberries!');
}
if (favorite_fruits.includes('orange')) {
    console.log('I really like oranges!');
}
if (favorite_fruits.includes('grape')) {
    console.log('I really like grapes!');
}
//Q#30
//
console.log(`\t\n Q#30 \t\n`);
let username = ['Admin', 'Arsal', 'Arham', 'Kashif', 'Altaf'];
for (let usernames of username) {
    if (usernames == 'Admin') {
        console.log(`Hello ${usernames},would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${usernames}, thank you for logging in again`);
    }
}
//Q#31
console.log('\t\n Q#31 \t\n');
let users = []; //removed all users name from array
if (users.length === 0) {
    console.log("We need to find some users!");
}
;
//Q#32
console.log('\t\n Q#32 \t\n');
let current_users = ['Ali', 'Ahmad', 'Altaf', 'Kashif', 'Rehman'];
let new_users = ['GM', 'Sufi', 'Altaf', 'Aftab', 'Ahmad'];
//Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for (let Username of current_users) {
    //Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
    let lowercaseusername = Username.toLowerCase();
    if (new_users.includes(lowercaseusername)) {
        console.log(` The person will need to enter a new username `);
    }
    else {
        console.log(`The username is available `);
    }
}
;
//Q#33
console.log('\t\n Q#33 \t\n');
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinalsuffix;
    if (num == 1) {
        ordinalsuffix = 'st';
    }
    else if (num == 2) {
        ordinalsuffix = 'nd';
    }
    else if (num == 3) {
        ordinalsuffix = 'rd';
    }
    else {
        ordinalsuffix = 'th';
    }
    console.log(`${num}${ordinalsuffix}`);
}
;
//Q#34
console.log('\t\n Q#34 \t\n');
// Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let Fav_Pizza = ['Fajita', 'Hawaiian', 'stone ove'];
console.log('\n\n\t Pizza Names \t');
for (let pizza of Fav_Pizza) {
    console.log(pizza);
}
//Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
console.log('\n\n\t Statement \t\n');
for (let pizza of Fav_Pizza) {
    console.log(`I Like ${pizza} pizza`);
}
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log('\n I really love pizza!');
//Q#35
console.log('\t\n Q#35 \t\n');
let animals = ['Dog', 'Horse', 'Cat'];
for (let ani of animals) {
    console.log(ani);
}
for (let ani of animals) {
    console.log(`A ${ani} would make a great pet `);
}
console.log("Any of these animals would make a great pet!");
//Q#36
//
console.log(`\t\n Q#36 \t\n`);
function make_shirt(size, message) {
    console.log(`The ${size} sized shirt with the message ${message}`);
}
make_shirt("medium", "Hey there!");
//Q#37
//
console.log(`\t\n Q#37 \t\n`);
function makes_shirt(sized = 'large', massaged = 'I love Typescript') {
    console.log(`The ${sized} sized shirt with the message ${massaged}`);
}
makes_shirt("small"); //by default message
makes_shirt("medium", "Hello Typescript");
makes_shirt(); //by defaukt size and message
//Q#38
//
console.log(`\t\n Q#38 \t\n`);
function describe_city(city, country = "USA") {
    console.log(`${city} is in ${country}`);
}
describe_city('New_york'); //by default country
describe_city('Washingtion'); // by default country
describe_city('Karachi', 'Pakistan');
//Q#39
//
console.log(`\t\n Q#39 \t\n`);
function city_country(city, country) {
    console.log(`${city}, ${country}`);
}
city_country("Lahore", "Pakistan");
city_country("Berlin", "Germany");
city_country("Tokyo", "Japan");
//Q#41
//
console.log(`\t\n Q#41 \t\n`);
let magician = ['Ali', 'Ahmad', 'Kashi', 'GM'];
function mag_name(name) {
    for (let mag of name) {
        console.log(mag);
    }
}
console.log('Magician_Names');
mag_name(magician);
//Q#42
//
console.log(`\t\n Q#42 \t\n`);
