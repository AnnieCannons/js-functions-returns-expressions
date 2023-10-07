/***********************  Exercise 1  ************************/

// Review the following function:
function addNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addNumbers(5, 3);
console.log(sum); 

// Create a variable called largerSum. Assign it the return value from calling `addNumbers` with your own arguments. Choose arguments that will result in a larger number than the previous call (which put the return value in a variable called `sum`).

const largerSum = addNumbers(10,5)
console.log(largerSum)


/***********************  Exercise 2 ************************/

let user1 = {
  name: 'Rose Smith',
  programmer: true,
  age: 47
};

let user2 = {
  name: 'Tabitha Daniels',
  programmer: true,
  age: 27
};

// Complete the function "greet" so that it returns the string "Welcome [NAME]! We are glad you are here." The function should be able to have user1 or user2 as an imput.

function greet(name) {
  return `welcome ${name}!`
}

// Call the function so that "Welcome Rose Smith! We are glad you are here." is returned from the function and stored in a variable. 
console.log(greet(user1.name))

// Call the function so that "Welcome Tabitha Daniels!  We are glad you are here." is returned from the function and stored in a variable.
console.log(greet(user2.name))
// Check both variables in the console. (With a console.log call or by evaluating the values directly in the console.)



/***********************  Exercise 3 ************************/
// The function below, "makeName", should take a first name and last name as arguments, and return the first name and last name separated by a space:
// e.g. makeName("Rose", "Smith") => "Rose Smith"

// Fill in the missing arguments and function body:

function makeName(firstName,lastName){
  return  `${firstName} ${lastName}`
}
    
  


// Call the function and store the value in a variable. 
console.log(makeName("lai","lavaughn"))



/***********************  Exercise 4 ************************/

// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// const celsiusTemp = 25;
// const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
// console.log("Temperature in Fahrenheit:", fahrenheitTemp);

function fahrenheitToCelsius(fahrenheit){
  return (fahrenheit-32)*5/9
}
let messege =`Temperature in celsius ${fahrenheitToCelsius(77)}°C`
console.log(messege)
// Change this code so that the user instead inputs fahrenheit and the function returns celsius. You will likely have to look up the conversion formula!

// Call the function with different values.

// Have you changed the name of the function and the name of the parameter? If not, do it now!


/***********************  Exercise 5 ************************/

let animals = ["monkey", "giraffe", "zebra", "rhino", "hippo"];

// Write a function called "first" that takes an array as an argument and returns the first element.

function first(array){
  return array[0]
}
first(Array)

// Remove // -- from the below lines to test (VS Code can toggle comments on a line with Command-/).
console.log("The first animal should be monkey:", first(animals));
console.log("The first number should be 15:", first([15, 5, 23, 30]));



/***********************  BONUS PRACTICE  ************************/



/***********************  Exercise 6 ************************/

// Declare a function "makeBio" that takes a "user" object as an argument and returns a minimal bio/profile sentence about the user. You can decide what properties a person has that might make a good bio sentence!

function makeBio(user){
  return `${user.name} is ${user.age} years old and lives in ${user.city} she fears ${user.fear}`
}


// Then make two example objects called `user3` and `user4`.

let user3={
  name:'Alexandra ',
  age:26,
  city:'jamaica,NY',
  fear:'The future '
};
let user4={
  name:'Laí',
  age:26,
  city:'jamaica,NY',
  fear:'not being or doing enough'
}

// Finally, uncomment the following two lines to test your function!
console.log("Your bio is:", makeBio(user3));
console.log("Your bio is:", makeBio(user4));



/***********************  Exercise 7 ************************/

// Convert the following function declaration into a function expression. 

// function square(num) {
//   return num * num;
// };

let square = function(num){
  return num * num;
};

console.log(square(5)); // Expected output: 25
console.log(square(7)); // Expected output: 49



/***********************  Exercise 8 ************************/

// Convert the following function expression into a function declaration. Call the function twice with different arguments. 

// const formatName = function(firstName, lastName) {
//   return `${lastName}, ${firstName}`;
// };

function formatName(firstName, lastName){
  return `${lastName},${firstName}`
}
console.log('Alexandra','LaVaughn')
console.log(`SirBishop LaVaughn`)