/// to lowerCase ///
const theName = "hanSE";
const thirdCaped1 = theName.substring(0, 2).toLowerCase();
const thirdCaped2 = theName.substring(2, 3).toLowerCase();
const thirdCaped3 = theName.substring(3).toLowerCase();

console.log(thirdCaped1 + thirdCaped2 + thirdCaped3);
console.log(theName.substring(0, 2).toLowerCase() + theName.substring(2, 3).toLowerCase() + theName.substring(3).toLowerCase());
//herover bliver det fra const'erne konkatineret direkte i log - så man kan tekniskset være foruden const'erne

/// to upperCase ///
const theName2 = "hanSE";
console.log(theName.substring(0, 2).toUpperCase() + theName.substring(2, 3).toUpperCase() + theName.substring(3).toUpperCase());
