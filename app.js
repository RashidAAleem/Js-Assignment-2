// chapter 3

// Variables for Numbers

// Q1

// var age = 15;
// alert("I am "+ age +" years old");

// Q2

// var visit = 14
// var message = " You have visited this site "
// alert(message + visit + " times")

// Q3

// var birthYear = 1987
// message = "My birth Year is "
// document.write(message + birthYear)

// message = "Date type of my declared variable is "
// document.write(message + typeof(birthYear));

//Q4
// var webSite = "XYZ Clothing Store";
// var visitor = "Rana Rashid";
// var product = "Shirt";
// var quantity = "5";

// document.write(
//   "<strong>" +
//     visitor +
//     "</strong>" +
//     " ordered " +
//     "<strong>" +
//     quantity +
//     " " +
//     product +
//     "</strong> on " +
//     webSite);

// CHAPTER - 4

// Q1

// var userName = "Rana Rashid";
// var course = "WebDevelopment";
// var duration = 3;

// Q2

// // legal variables

// var userName="Rana Rashid"
// var num = 123;
// var $age = 68;
// var father_name = "Zulfiqar Ali";
// var batch12 = "SMIT- WMA"

// // Illegal variables

// var 1 = 212;
// var name Class = "First";
// var @today = 25;
// var group-R = "five members";

// var var = "variable";

//Q3

// var heading = "Rules for naming JS variables";
// var varName =
//   "variable names can only contain, numbers, $ and _. For example : $my_1stVariable";
// var varStart =
//   "Variable must begin with a letter, $ or _. For example : $name, _name or name";
// var varSensitive = "Variable name are case sensitive";
// var varKeywords = " Variable names should not be JS keywords";

// document.write("<h1>" + heading + "</h1>");
// document.write(
//   "<p>" +
//     varName +
//     "</p>" +
//     "<p>" +
//     varStart +
//     "</p>" +
//     "<p>" +
//     varSensitive +
//     "</p>" +
//     "<p>" +
//     varKeywords +
//     "</p>"
// );

// CHAPTER-5

// Q1

// var num1 = 3;
// var num2 = 5;
// var total = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + total);

//Q2

// var num1 = 3;
// var num2 = 5;
// var total = num1 - num2;
// document.write("Subtration of " + num1 + " and " + num2 + " is " + total);

// var num1 = 3;
// var num2 = 5;
// var total = num1 * num2;
// document.write("Multiplicaiton of " + num1 + " and " + num2 + " is " + total);

// var num1 = 3;
// var num2 = 5;
// var total = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + total);

//Q3

// var num;
// var message= "Value afer variable declaration is "
// document.write("<p>" + message + num +"</p>");

// num = 5
// message = "Initial Value : "
// document.write("<p>" + message + num +"</p>");

// var num2 = 1
// var total = num + num2
//  message = "Value after increment is : "
//  document.write("<p>" + message + total +"</p>");

//  var num3 = 7
//  var total1 = total + num3
//  message = "Value after addition is : "
//  document.write("<p>" + message + total1 +"</p>");

// //  var num3 = 7
//  var total2 = total1 - num2
//  message = "Value after addition is : "
//  document.write("<p>" + message + total2 +"</p>");

//  var total3 = total2 % total2
//  message = "The remainder is : "
//  document.write("<p>" + message + total3 +"</p>");

// Q4

// var tickets = 5;
// var cost = 600;
// var unit =" PKR "
// var  total = cost * tickets;
// var message = "Total cost to buy "
// var message1 = " tickets to a movies is  "
// document.write(message + tickets + message1 + total + unit)

//Q5

// var number = 4;
// var first = number * 1;
// var second = number * 2;
// var third = number * 3;
// var fourth = number * 4;
// var fifth = number * 5;
// var sixth = number * 6;
// var seventh = number * 7;
// var eigth = number * 8;
// var nineth = number * 9;
// var tenth = number * 10;
// var message = "4 X ";
// document.write(
//   "<h1>Table of 4 </h1>" + "<p>" + message + " 1" + " = " + first + "</p>"
//   + "<p>" + message + " 2" + " = " + second + "</p>"
//   + "<p>" + message + " 3" + " = " + third + "</p>"
//   + "<p>" + message + " 4" + " = " + fourth + "</p>"
//   + "<p>" + message + " 5" + " = " + fifth + "</p>"
//   + "<p>" + message + " 6" + " = " + sixth + "</p>"
//   + "<p>" + message + " 7" + " = " + seventh + "</p>"
//   + "<p>" + message + " 8" + " = " + eigth + "</p>"
//   + "<p>" + message + " 9" + " = " + nineth + "</p>"
//   + "<p>" + message + " 10" + " = " + tenth + "</p>"

// );

//Q6

// var Celsius = 25;
// var Fahrenheit = 70

// var fahrenheit = (Celsius*9/5)+32

// document.write("25C is " + fahrenheit + " in Fahrenheit");

// var celsius = (Fahrenheit-32)*5/9
// document.write("<br/>"+ "70F is " + celsius + " in Celsius");

//Q7

// var item1 = 650;
// var item2 = 100;
// var shipping = 100;
// var quantity1 = 3;
// var quantity2 = 7;

// var total1 = item1 * quantity1;
// var total2 = item2 * quantity2;
// var total = total1 + total2 + shipping;

// document.write(
//   "Price of item 1 is " +
//     item1 +
//     "<br/>" +
//     "Quantity of item 1 is " +
//     quantity1 +
//     "<br/>" +
//     "Price of item 2 is " +
//     item2 +
//     "<br/>" +
//     "Quantity of item 2 is " +
//     quantity2 +
//     "<br/>" +
//     "Shipping Charges " +
//     shipping +
//     "<br/>" +
//     "<br/>" +
//     "Total Cose of your order is " +
//     total
// );

//Q8

// var tMarks = 980;
// var oMarks = 804;

// var percentage = (oMarks / tMarks) * 100;

// document.write(
//   "<h1>" +
//     "Marks Sheet" +
//     "</h1>" +
//     "<br/>" +
//     "<br/>" +
//     "<br/>" +
//     "Total Marks: " +
//     tMarks +
//     "<br/>" +
//     " Marks Obtained: " +
//     oMarks +
//     "<br/>" +
//     "Percentage: " +
//     percentage +
//     "%"
// );

//Q9

// var us1Dollar = 104.8 //1 US Dollar = 104.80 Pakistani Rupee
// var saudi1Riyal = 28 //1 Saudi Riyal = 28 Pakistani Rupee

// var total = 10*us1Dollar + 25*saudi1Riyal

// document.write(
//   "<h1>" +
//     "Currency in PKR" +
//     "</h1>" +
//     "<br/>" +
//     "<br/>" +
//     "<br/>" +
//     "Total Currency in PKR: " +
//     total
// );

//Q10

// var num=10
//  var result= ((num+5)*5)/2
//  document.write(result)

//q11

// var  currentYear = 2024
// var birthYear = 1987
// var age = 2024-1987

// document.write(
//   "<h1>" +
//     "Age Calculator" +
//     "</h1>" +
//     "<br/>" +
//     "<br/>" +
//     "<br/>" +
//     "Current Year: " +
//     currentYear +
//     "<br/>" +
//     " Birth Year: " +
//     birthYear +
//     "<br/>" +
//     "Your Age is: " +
//     age
// );

//Q12

// var r=20;
// var c=2*3.142*r;
// var a = 3.142*r*r

// document.write(
//   "<h1>" +
//     "The Geometrizer" +
//     "</h1>" +
//     "<br/>" +
//     "<br/>" +
//     "<br/>" +
//     "Radius of a circle: " +
//     r +
//     "<br/>" +
//     " The circumference is: " +
//     c +
//     "<br/>" +
//     "The area is: " +
//     a
// );

// var favSnack = "Chocolate chip"
// var curAge = 15
// var estAge = 65
// var snackPerDay = 3

// var totalSnack = (estAge-curAge)*snackPerDay

// document.write(
//   "<h1>" +
//     "The Lifetime Supply Calculator" +
//     "</h1>" +
//     "<br/>" +
//     "<br/>" +
//     "<br/>" +
//     "Favourite Snack: " +
//     favSnack +
//     "<br/>" +
//     " Current Age: " +
//     curAge +
//     "<br/>" +
//     "Estimate Maximum Age: " +
//     estAge +
//     "<br/>" +
//     "Amount of snacks per day: " + snackPerDay +
//     "<br/>" +
//     "You will need " + totalSnack + " " +favSnack + " to last you until the ripe old age of " + estAge
// );

//chap 6

// q1

// var a = 10;
// document.write(
//     "The Value of a is: " + a + "<br/><br/><br/>");
// var num1 = ++a;
// document.write(
//     "The Value of ++a is: " + num1 + "<br/> Now the value of a is :" + a + "<br/><br/><br/>");
// var num2 = a++;
// document.write(
//     "The Value of a++ is: " + num2 + "<br/> Now the value of a is :" + a + "<br/><br/><br/>");
// var num3 = --a;
// document.write(
//     "The Value of ++a is: " + num3 + "<br/> Now the value of a is :" + a + "<br/><br/><br/>");

// var num4 = a--;

// document.write(
//     "The Value of a-- is: " + num4 + "<br/>" + " The value of a is:" + a);

//q2

// var a = 2, b = 1;
// document.write("a = " + a + ", b = " + b + "<br/><br/><br/>")

// var num1 = --a
// document.write("The value of --a is " + num1 + "<br/> Now the value of a is " + a + "<br/><br/><br/>")
// var num2 = --b
// var num3 = a - num2
// document.write("The value of a is " + a + "<br/> Now the value of b after --b is: " + num2 + "<br/>Therefore the value of a - --b is: " + num3 + "<br/><br/><br/>")
// var num4 = ++b
// var num5 = num3 + num4
// document.write("The value of ++b is " + b + "<br/> Now the value of b after ++b is: " + b + "<br/>Therefore the value of --a - --b + ++b is: " + num5 + "<br/><br/><br/>")
// var num6 = b--
// var num7 = num5 + num6
// document.write("The value of b is " + num6 + "<br/> Now the value of b after b-- is: " + b + "<br/>Therefore the value of --a - --b + ++b + b-- is: " + num7 + "<br/><br/><br/> The value of a is: "+a+"<br/> The value of b is: " + b + "<br/> The Final result is: "+ num7)


//q3

// var userName = prompt("Please enter your name:");
// document.write("Hello, " + userName + "! Welcome!");


