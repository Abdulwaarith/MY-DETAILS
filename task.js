var firstName = 'Abdulwaris';
var lastName = 'Kehinde';
var middleName = 'Ayobami'

var fullName = lastName + " " + firstName + " " + middleName;
var studentName = "Name: " + fullName;
console.log(studentName);

var height = "160";
var studentHeight = "Height: " + height + "cm";
console.log(studentHeight);

var country = "Nigeria";
var studentCountry = "Country: " + country;
console.log(studentCountry);


document.getElementById("studentName").innerHTML = studentName;
document.getElementById("studentHeight").innerHTML = studentHeight;
document.getElementById("studentCountry").innerHTML = studentCountry;

