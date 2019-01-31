/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

var result = "";

var quoteBank = [
  {
      quote: "Gotta Go Fast!",
      source: "Sonic The Hedgehog",
      citation: "Sonic X",
      year: 2003,
  },
  {
      quote: "Bond. James Bond.",
      source: "Sean Connery",
      citation: "Dr. No",
      year: 1962,
  },
  {
      quote: "That wasn't flying, it was falling with style!",
      source: "Woody",
      citation: false,
      year: 1995,
  }
]

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array);
  let quoteResult = quoteBank[randomNumber];
  return quoteResult;
}


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  let string = getRandomQuote(quoteBank.length);
  let result = ("<p class = quote>" + string.quote + "</p>");
  result += ("<p class = source>" + string.source);
  if (string.citation) {
    result += "<span class = citation>" + string.citation + "</span>";
  }
  if (string.year) {
    result += "<span class = year>" + string.year + "</span>";
  }
  result += "</p>"
  document.getElementById('quote-box').innerHTML = result;
}
printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

console.log("Working");

// A getRandomQuote function should grab a quote from the quoteBank array and return itand a printQuote function

// How do I generate a random number?
// How do I use that random number to get that quotes from the quotes array?
// If using a small snippet of code from another site, give them credit in the form of a comment



