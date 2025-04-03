// At a restaurent, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5.
// Use Javascript to calculate the cost of the order.
10+3*8+5

// You're at a restaurent with 2 friends (3 people in total) and make the same order as above. 
//  Calculate how much each person pays
(10+3*8+5)/3

// Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).
(1850+(2*750))/100

// Calculate a 10% tax for the total of above 
((1850+2*750)/0.1)/100

// Calculate a 20% tax for the total of above (remember that 1%=1/100, so 20%=20/100=0.2)
((1850+2*650)/0.2)/100


/** 
 * https://supersimple.dev/projects/amazon/
 * Setup: In the Amazon Project, go to the home page and add a toster ($18.99) to your cart so you have 
 * 1 basketball, 1 t-shirt, and 1 toaster.
 * Choose $4.99 shipping for the toaster.
 */

// Calculate the cost of the products (before shipping and taxes).
//  HINT: calculate in cents to avoid inaccuracies.
(2095+799+1899)/100

//  Calculate the Total before tax.
(2095+799+1899+499)/100

// Calculate the 10% tax exactly.
// HINT: use Math.round()
Math.round((2095+799+1899+499) * 0.1) / 100

// Calculate Order total at the bottom.
(2095+799+1899+499)/100 + Math.round((2095+799+1899+499) * 0.1) / 100

// Let's say we want to always round a number down  (2.8=>2) 
// Using Google or an A.I. tool, search for the code to do this.
Math.floor(2.8)

// Let's always round a number up (2.2=>3). Search how to do this.
Math.ceil(2.2)


/**
 * Challenge Exercises
 * We'll use JavaScript to convert temperatures from Celsius(`C) to Fahremheit (`F) The Formula is:
 * Fahrenheit = (Celsius * 9 / 5) + 32
 * Celsius = (Fahrenheit - 32) * 5 / 9
 */

// The temperature is 25C. Calculate the temperature in Fahrenheit.(77)
(25*9/5)+32

// The temperature is 86F. Calculate the temperature in Celsius.(30)
(86-32)*5/9

// The temperature is -5C. Calculate the temperature in Fahrenheit.(23)
(-5*9/5)+32
