/* Playing around with JS functions */

//the functions below checks if you're of age.
function checkAge (age){
  if (age > 18){
    return True;
  }

  return confirm("did your parents Allow you?");
}

//rewriting the above function using the question mark operator
function checkAge2(age){
  return (age > 18) ? true : confirm("did your parents allow you?");
}

//Write a function min(a,b) which returns the least of two numbers a and b.
function checkMin (num1,num2){
  if (num1 > num2){
    return num2;
  }

  return num1; 
}

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(num1,num2){
  let result = num1
  for (let i=1, i < num2, i++){
    result *= num1 
  }

  return result;
}

let num1 = prompt ("num1 ?", "");
let num2 = prompt ("num2 ? ","");

if (num1 < 1){
  alert ("power ${num2} is not supported. please use a positive integer");
} else {
  alert (pow(num1,num2));
}
