/* playing around with Logical operators */

//returns 2
alert ( null || 2 || undefine);

//returns 1 and 2 
alert ( alert(1) || 2 || alert(3) ); 

//returns false 
alert (1 && null && 2);

//returns 1 and undefined 
alert ( alert(1) && alert(2) );

//returns 3 
alert ( null || 2 && 3 || 4);

// Write an if condition to check that age is between 14 and 90 inclusively.

let age = prompt (" enter your agee: ",'15');
if (age >= 14 && age <= 99) {
  alert (" You are within the age limit"); 
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
if ( !(age >= 14 && age <= 99)){
  alert (" You can no t be granted access sadly! ");
}

if ( age < 14 || age > 90){
  alert (" You can not be granted access sadly! ");
}


// Which of the alerts are going to execute?

//1 
if (-1 || 0) alert( 'first' );

//2 
if (-1 && 0) alert( 'second' );

//3 
if (null || -1 && 1) alert( 'third' );

/* Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */

u_name = prompt ("Who's there? ",'user');

if (u_name == "Admin"){
  password = prompt( "Enter the password: ", '****');
  if (password == "TheMaster"){
    alert ("Welcome!"); 
  } else {
    alert ("Wrong password");
  }
else if ( u_name == ''){
  alert (" Canceled! "); 
}
else {
  alert ("I don’t know you! ); 
}
  
}
