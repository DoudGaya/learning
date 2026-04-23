/* introduces the nullish coalescence */

// nuliish perform the first function as the OR operator (||) but the problem is returns the fist truthy value, while ?? returns the first defined value
let height = 0; 

alert (height ?? 100); //returns 0
alert (height || 100); //returns 100
