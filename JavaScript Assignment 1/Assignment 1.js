
// Function 1 to Print Hello + "name" accept from user
function hello() {
    let a = prompt("Enter your name")
    console.log("Hello " + a)
}


// Function to find even or Odd by accepting number from user
function evenOdd() {
    let num = parseInt(prompt("Please enter the number"))
    if (num % 2 == 0) {
        console.log("The Number is Even")
    } else {
        console.log("The number is Odd")
    }
}


//Funtion to pring the number is prime or not prime
function prime() {
    let number = parseInt(prompt("Enter the number"))
    let isprime = true
    if (number == 1) {
        console.log("1 is not a prime number")
    } else if (number >= 2) {
        for (let i = 2; i < number / 2; i++) {
            if (number % i == 0) {
                isprime = false
                break
            }
        }
        if (isprime) {
            console.log(number + " is a primer number")
        } else {
            console.log(number + " is not a prime number")
        }
    } else {
        console.log("the number is not a primer number")
    }
}


//Function to print the Maths table
function multiples(){
    let c = parseInt(prompt("Enter the number"))
    for(let j=1; j<=10; j++){
        let result=j*c
        console.log(c+"*"+j+"="+ result)
    }
}