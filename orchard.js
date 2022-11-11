///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let totalAcres = 0
//initalize total acres at 0
for (let i = 0; i < 7; i++){
    totalAcres = totalAcres + fujiAcres[i] + galaAcres[i] + pinkAcres[i]
    //loop adds acres to totalAcres from each type of apple, iterating by day
}
console.log(totalAcres)
//logs total acres of all apples picked throughout week




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = totalAcres/7
//average daily acres off apples including all types means dividing total acres throughout week by 7

console.log(averageDailyAcres)
//logs average daily acres



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0){
    days = days + 1
    acresLeft = acresLeft - averageDailyAcres
}
//loop starts at 0 days and calculates days left depending on acres left

console.log(days)
//logs days of work left

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []
let tonsPerAcre = 6.5

for (i = 0; i < 7; i++){
    fujiTons.push(tonsPerAcre*fujiAcres[i])
    galaTons.push(tonsPerAcre*galaAcres[i])
    pinkTons.push(tonsPerAcre*pinkAcres[i])
}
//loop pushes ton calculation daily to "Ton" arrays, by apple type

console.log(fujiTons, galaTons, pinkTons)
//logs all 3 apple types tons by day


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
let fujiTonsTotal = 0 
let galaTonsTotal = 0
let pinkTonsTotal = 0
//initialize arrays for total for entire week per apple

for (i = 0; i < 7; i++){
    fujiTonsTotal = fujiTonsTotal + fujiTons[i]
    galaTonsTotal = galaTonsTotal + galaTons[i]
    pinkTonsTotal = pinkTonsTotal + pinkTons[i]
}
//loop sums weekly apple count per apple type

let fujiPounds = fujiTonsTotal*2000
let galaPounds = galaTonsTotal*2000
let pinkPounds =pinkTonsTotal*2000
//converts pounds to tons per apple

console.log(fujiPounds, galaPounds, pinkPounds)
//logs apple pounds harvested per week per apple




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds*fujiPrice
let galaProfit = galaPounds*galaPrice
let pinkProfit = pinkPounds*pinkPrice
//calculates profit, in cents, per apple type as a weekly sum, depending on given price

console.log(fujiProfit, galaProfit, pinkProfit)
//logs total profit in cent per apple type as a weekly sum



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit
//weekly sum of profits including all apple types

console.log(totalProfit)
//logs total profit of all apple types throughout the week
