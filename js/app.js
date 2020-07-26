function runJavaFunc() {
console.log("it's clicked") 
var pal = document.getElementById("palindrome").value
 console.log(pal)  

  var regex = /[a-zA-Z0-9]/gi;
  var readToMe = str.toUpperCase();
 // console.log(readToMe)
  var splitTheLetters = str.split("");
  //console.log(splitTheLetters)
  var reverseTheWord = splitTheLetters.reverse();
  //console.log(reverseTheWord);
  var originalWord = readToMe.toLowerCase();
  console.log(originalWord)
  var palindrome = reverseTheWord.join("");
  //console.log(palindrome)
  var equality = palindrome.toLowerCase();
  console.log(equality)
  var lettersOnlyOne=equality.match(regex)
console.log(lettersOnlyOne)
var lettersOnlyTwo=originalWord.match(regex)
console.log(lettersOnlyTwo)
var wordOne = lettersOnlyOne.join("")
console.log(wordOne)
var wordTwo = lettersOnlyTwo.join("")
console.log(wordTwo)

var postHTMLTrue = '<p></p><br><p> Its a palindrome! </p>'
var postHTMLFalse = "<p></p><br><p> Yo Momma's a palindrome! </p>"

  if(wordOne === wordTwo) 
  { 
    console.log("It's a palindrome!")
    document.getElementById('yeeOrNay').innerHTML = postHTMLTrue;
  } else { 
    console.log("Yo mom's a palindrome!")
    document.getElementById('yeeOrNay').innerHTML = postHTMLFalse;
   
   }
}
 


