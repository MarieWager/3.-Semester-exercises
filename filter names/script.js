//split the string into three variables: firstName, middleName and lastName.
//Hint: use indexOf and substring

//substr() are start and length
//substring() are start and end

const name1 = "Peter Heronimous Lind";
console.log(name1);
console.log(name1.length);
console.log(name1.indexOf(" "));
console.log(name1.lastIndexOf(" "));
console.log(name1.substring());

const firstName = name1.substring(0, name1.indexOf(" "));
console.log("firstname: ", "_" + firstName + "_");
const middleName = name1.substring(name1.indexOf(" ") + 1, name1.lastIndexOf(" "));
console.log("middlename: ", "_" + middleName + "_");

const lastName = name1.substring(name1.lastIndexOf(" ") + 1);
console.log("lastname: ", "_" + lastName + "_");

const name1Arr = name1.split(" "); //deler navnet op efter hvert mellemrum
console.log(name1Arr);
/*name1Arr.forEach((elm, i) =>
    if(){

    }
)
/*
name1.indexOf(" ");
console.log("change? ", name1.indexOf);
name1.lastIndexOf(" ");
console.log("new change? ", name1.lastIndexOf);
*/
