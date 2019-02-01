// Program that displays a random quote and background color from an array of quotes and colors.

// Array that houses quotes and the quote's details inside key-value pairs for each object.
var quoteBank = [
  {
    quote: "Gotta Go Fast!",
    source: "Sonic The Hedgehog",
    citation: false,
    year: false,
    category: "Gaming",
  },
  {
    quote: "That's no moon... it's a space station.",
    source: "Obi Wan Kenobi",
    citation: "Star Wars Episode IV: A New Hope",
    year: 1977,
    category: "Science Fiction",
  },
  {
    quote: "That wasn't flying, it was falling with style!",
    source: "Woody",
    citation: "Toy Story",
    year: 1995,
    category: "Animation",
  },
  {
    quote: "Objection!",
    source: "Phoenix Wright - Ace Attorney",
    citation: false,
    year: false,
    category: "Gaming",
  },
  {
    quote: "When you go through hardships and decide not to surrender, that is strength.",
    source: "Arnold Schwarzenegger",
    citation: false,
    year: false,
    category: "Inspirational",
  },
  {
    quote: "Thank you Mario! But our Princess is in another castle!",
    source: "Toad",
    citation: "Super Mario Bros.",
    year: 1985,
    category: "Gaming",
  },
  {
    quote: "Not all those who wander are lost.",
    source: "J. R. R. Tolkien",
    citation: "The Lord of the Rings",
    year: 2001,
    category: "Poem",
  },
  {
    quote: "The name is Bond. James Bond.",
    source: "James Bond - 007",
    citation: false,
    year: false,
    category: "Action",
  },
  {
    quote: "Put that thing back where it came from, or so help me.",
    source: "Mike Wazowski",
    citation: "Monsters, Inc.",
    year: 2001,
    category: "Animation",
  },
  {
    quote: "Have you seen my hat?",
    source: "Bear",
    citation: "I Want My Hat Back by Jon Klassen",
    year: 2011,
    category: "Children's Literature",
  },
  {
    quote: "Welcome, to Jurassic Park!",
    source: "John Hammond",
    citation: "Jurassic Park",
    year: 1993,
    category: "Action",
  },
  {
    quote: "You know nothing, Jon Snow.",
    source: "Ygritte",
    citation: "Game of Thrones",
    year: 2012,
    category: "Fantasy",
  },
  {
    quote: "A journey of a thousand miles begins with a single step.",
    source: "Lao Tzu",
    citation: false,
    year: false,
    category: "Inspirational",
  },
  {
    quote: "The world could always use more heroes!",
    source: "Tracer",
    citation: "Overwatch",
    year: 2016,
    category: "Gaming",
  },
  {
    quote: "Sometimes your whole life boils down to one insane move.",
    source: "Jake Sully",
    citation: "Avatar",
    year: 2009,
    category: "Science Fiction",
  },
]

/*
 Function that creates a random number, uses that number as an index value for the 'quoteBank' object, and returns the property-value pairs called from the object. The array parameter is based on the total array values in the 'quoteBank' object.
 */
function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array);
  let quoteResult = quoteBank[randomNumber];
  return quoteResult;
}

/*
Calls the getRandomQuote function with an argument that sends the total value length of the quoteBank (using the .length property) to the 'array' parameter, and stores the values of that call to the 'results' variable. 
*/
function printQuote() {
  let string = getRandomQuote(quoteBank.length);
  let result = ("<p class = quote>" + string.quote + "</p>");
  result += ("<p class = source>" + string.source);
  // Conditionals that only display specific key-value pairs if they exist
  if (string.citation) {
    result += "<span class = citation>" + string.citation + "</span>";
  }
  if (string.year) {
    result += "<span class = year>" + string.year + "</span>";
  }
  if (string.category) {
    result += "<br><span class = category>" + string.category;
  }
  result += "</p>"
  document.getElementById('quote-box').innerHTML = result;
}
printQuote(); // Displays the quote and details to the document

/* Function that randomly selects a color from the 'colors' array, and sends the new color hexadecimal as the new primary background color value to the 'background' attribute
*/
function changeBackgroundColor() {
  let colors = ["#FFCCCC", "#3366FF", "#36b55c", "#d96276", "#6d249e", "#916988", "#b36cbe", "#6f90dd", "#0cb5f4", "#c981a0", "#7888bd", "#4d697a", "#ed628f", "#9265b2", "#65ced3", "#b73131", "#59aa2e"];
  let formula = Math.floor(Math.random() * colors.length);
  let randomColor = colors[formula];
  let final = document.body.style.background = randomColor;
  // Transitions background colors over a 0.5 second period, created from trial-and-error with assistance from https://www.w3schools.com/jsref/prop_style_background.asp
  final += document.body.style.transition = "all 0.5s"; 
  return final;
}

// Calls the changeBackgroundColor and printQuote function when the "show another quote" button is clicked.
document.getElementById('loadQuote').addEventListener("click", changeBackgroundColor, false);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Calls the changeBackgroundColor() and printQuote() function when 30 seconds pass.
setInterval(printQuote, 30000);
setInterval(changeBackgroundColor, 30000);

console.log("Complete");




