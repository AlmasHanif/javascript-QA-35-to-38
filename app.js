// Chapter no 35 to 38

// Q no 1

// function time(){
//      var now = new Date();
//     document.write(now)
// }
// time()


// Q no 2

// function greet(){
//     var first_name = prompt("Enter your first name")
//     var last_name = prompt("Enter your last name")
//     var full_name = first_name + " "  + " "  + last_name
//     alert(full_name)
// }
// greet()


// Q no 3

// function add(){
//     var firstvalue = +prompt("Enter first value")
//     var secondvalue = +prompt("Enter second value")
//     var adding = firstvalue + secondvalue
//     alert(adding)
// }
// add()


// Q no 4


//     var firstvalue = +prompt("Enter first value")
//      var secondvalue = +prompt("Enter second value")

// function calculate(){
//     var result = eval(firstvalue + secondvalue)
//     return result
// }     
// var a = calculate(firstvalue , secondvalue)
// alert(a)


// Q no 5

// function sumOfSquares(num) {

//     for (var i = 0; i <=num ; i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum ) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);



// Q no 6


// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//    else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = +prompt("enter value");
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);


// Q no 7


//      var start = +prompt("Enter start value")
//       var end = +prompt("Enter end value")

// function count(){
//     for(var i = start; i <= end ; i++ ){
//         document.write(i + "<br>")
//     }
// } 
// count()     


// Q no 8


// function calcHypotenus(base,  per) { 
//     var result = Math.sqrt(base*base  + per*per) ;
//     return result 
// }
// var i = calcHypotenus(8 ,6)
// alert(i)


// Q no 9


        // var length = prompt("Enter a whole number for the length of your rectangle.");
        // var width = prompt("Enter a whole number for the width of your rectangle.");
        // function area(length, width) {
        //     return length * width;
        // }
        
        // document.write('The area of your rectangle is ' + area(length, width));         
        


// Q no 10        



// var isPalindrome = prompt("Enter words")
//  function palindrome () {
//     if (isPalindrome == isPalindrome.split('').reverse().join('')) {
//         alert(isPalindrome + ' is palindrome.');
//     }
//     else {
//         alert(isPalindrome + ' is not palindrome.');
//     }
// }
// palindrome()


// Q no 11


// function abc(str) {
//     var sentence = str.toLowerCase().split(' ');
//     for(var i = 0; i<sentence.length; i++){
//         sentence[i]= sentence[i][0].toUpperCase()+sentence[i].slice(1)
//     }
//     document.write(sentence.join(" "));
//     return sentence;
    
// }

// abc( 'the quick brown fox');



// Q no 12


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


// // Q no 13



// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('w3resource.com', 'o'));



// Q no 14


// function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// document.write('Area =', c.area().toFixed(2));
// document.write('perimeter =', c.perimeter().toFixed(2));