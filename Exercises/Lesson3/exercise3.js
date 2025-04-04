// Create a text 'My name is:' as a String
'My name is:'

// Create your name as a string (for Example: 'Pravin')
'Pravin'

// Use concatination, add the 2 strings from above together to create the text:
// 'My name is: __' (Replace __ with your name).
'My name is: '+'Pravin'

// At a restaurent, you order 1 coffee ($5) and 1 bagel($3). 
// Using math, calculate the total cost, and using concatination, create the text:
// 'Total cost:$__' (Replace __ with the total you calculated).
'Total cost:$'+(5+3)

// Do the same thing as above, but use a template string and interpolation
`Total cost:$${5+3}`

// Display the text from above in a popup using alert(...);
alert(`Total cost:$${5+3}`)

// You order 1 coffee($5.99) and 1 bagel($2.95). Using math, calculate the total cost,
// using concatination, create the text:
// 'Total cost:$__' (HINT: calculate in cents to avoid inaccuracies)
'Total cost:$'+(599+295)/100

// Do the same thing mentioned above, but use a template string and interpolation. 
`Total cost:$${((599+295)/100)}`

// Display the text from above in a popup
alert(`Total cost:$${(599+295)/100})`);

// Using a multi-line string, create the text from 3h and add a line of text underneath:
// 'Thank you, come again!'. Display both lines in a popup.
alert(`Total cost:$${(599+295)/100} 
Thank you, come again!`);

/**
 * Challenge Exercises
 * 
 * Setup:
 * In the Amazon Project, update the cart to 2 basketballs ($20.95 each) woth $4.99 shipping,
 * and 2 t-shirts ($7.99 each) with $4.99 shipping.
 */

// Using interpolation, create the first line of text(use math to calculate the numbers 4 and 57.88).
`Items(${2+2}): $${(2095*2+799*2)/100} 
 Shipping & handling: $${4.99*2} 
 Total before tax: $${((2095*2+799*2)/100 + 4.99*2)}
 Estimated tax (10%): $${Math.round(((2095*2+799*2+ 4.99*2)*0.1))/100}`
