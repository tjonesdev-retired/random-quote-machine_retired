var quotes = [
  { // 1
    quote: "If you do things right, people won't be sure you've done anything at all.",
    author: "- Futurama",
    color: "LightSkyBlue"
  },
  { // 2
    quote: "What can men do against such reckless hate?",
    author: "- Lord of the Rings: The Two Towers (2002)",
    color: "CornflowerBlue"
  },
  { // 3
    quote: "If wishes were fishes, we'd all cast nets.",
    author: "- Frank Herbert",
    color: "DodgerBlue"
  },
  { // 4
    quote: "Did you ever dance with the devil in the pale moonlight?",
    author: "- Batman (1989)",
    color: "SteelBlue"
  },
  { // 5
    quote: "Why for instance is this thus? And what is the reason for this thusness?",
    author: "- Lincoln (2012)",
    color: "MidnightBlue"
  },
  { // 6
    quote: "Best job I ever had.",
    author: "- Fury (2014)",
    color: "Aquamarine"
  },
  { // 7
    quote: "I would have liked to have seen Montana.",
    author: "- The Hunt for Red October (1990)",
    color: "Teal"
  },
  { // 8
    quote: "From the ground were we taken, for dust we are, and to dust we shall return.",
    author: "- The Book of Eli (2010)",
    color: "Teal"
  },
  { // 9
    quote: "Other men look up down left or right, but men like us are different, we are visionaries.",
    author: "- Airman",
    color: "PaleGreen"
  },
  { // 10
    quote: "I am afraid. Not of life or death, or nothingness, but of wasting it as if I had never been.",
    author: "- Flowers of Algernon",
    color: "LimeGreen"
  },
  { // 11
    quote: "You are the reason I am, you are all my reasons.",
    author: "- A Beautiful Mind (2001)",
    color: "IndianRed"
  },
  { // 12
    quote: "We all have our battles with darkness and shadows.",
    author: "- Motion City Soundtrack",
    color: "FireBrick"
  },
  { // 13
    quote: "If people sat outside and looked at the stars each night, I'll bet they'd live a lot differently.",
    author: "- Calvin & Hobbes",
    color: "Orange"
  },
  { // 14
    quote: "The question, Raymond, was what did you want to be?!",
    author: "- Fight Club (1999)",
    color: "Salmon"
  },
  { // 15
    quote: "Like a general under fire, lighting a cigar. (34. Rxc6)",
    author: "- Lasker & Schlecter Chess Game",
    color: "Salmon"
  },
  { // 16
    quote: "If you hate someone, you're defeated by them.",
    author: "- Confucius",
    color: "Gold"
  },
  { // 17
    quote: "A life for a life, my debt is repaid.",
    author: "- Mulan (1998)",
    color: "Gold"
  },
  { // 18
    quote: "Longing for home, and rest. I'm in great need of rest.",
    author: "- The Monuments Men (2014)",
    color: "Pink"
  },
  { // 19
    quote: "You are not your job; you are not your fucking khakis.",
    author: "- Fight Club (1999)",
    color: "DeepPink"
  },
  { // 20
    quote: "The things you own end up owning you.",
    author: "- Fight Club (1999)",
    color: "Plum"
  },
  { // 21
    quote: "I love the idea that somehow this is the universal question, the thing that unites us. When it rains, we wonder where the birds go, and hope they're staying dry.",
    author: "- XKCD",
    color: "Purple"
  },
  { // 22
    quote: "H2!",
    author: '- Jerry "ChessNetwork"',
    color: "LightGrey"
  },
  { // 23
    quote: "The enchanting charms of this sublime science reveal themselves in all their beauty only to those who have the courage to go deeply into it.",
    author: "- Carl Friedrich Gauss",
    color: "SlateGrey"
  },
  { // 24
    quote: "It is but a shadow of a thought that you love.",
    author: "- Aragorn the Chick Slayer",
    color: "DimGrey"
  },
  { // 25
    quote: "The past is history, the future a mystery, but now is a gift, that is why it's called 'present'.",
    author: "- Kung Fu Panda (2008)",
    color: "Black"
  },
  {
    quote: "You know nothing about leading men.",
    author: "- The A-Team (2010)",
    color: "Black"
  }
];


function shuffleQuotes() {
  var shuffleNum = Math.floor(Math.random() * quotes.length);
  
  // quote text fade
  $("#quoteDiv").animate(
    {
      opacity: 0
    },
    500,
    function() {
      $(this).animate(
        {
          opacity: 1
        },
        900
      );
      // changes quote after fadeout
      $("#quoteDisplay").html('<sup><i class="fa fa-quote-left"></i></sup> ' + quotes[shuffleNum].quote);
    }
  );

  // author text fade
  $("#authorDiv").animate(
    {
      opacity: 0
    },
    500,
    function() {
      $(this).animate(
        {
          opacity: 1
        },
        900
      );
      // changes author after fadeout
      document.getElementById("authorDisplay").innerHTML =
        quotes[shuffleNum].author;
    }
  );

  // change background color with shuffle
  document.getElementById("random").style.backgroundColor =
    quotes[shuffleNum].color;
  document.getElementById("twitter").style.backgroundColor =
    quotes[shuffleNum].color;
  document.getElementById("body").style.backgroundColor =
    quotes[shuffleNum].color;
  // change text color with shuffle
  document.getElementById("quoteDisplay").style.color =
    quotes[shuffleNum].color;
  document.getElementById("authorDisplay").style.color =
    quotes[shuffleNum].color;
  document.getElementById("quoteIcon").style.color = quotes[shuffleNum].color; 
} // end shuffleQuotes


$(document).ready(function() {
  shuffleQuotes();

  // shuffle on click
  $("#random").on("click", shuffleQuotes);
  // tweet quote on click
  $("#twitter").on("click", function() {
    var tweetText =
      $("#quoteDisplay").text() + " -" + $("#authorDisplay").text();
    var tweetLink =
      "https://twitter.com/intent/tweet?hashtags=FreeCodeCamp,quotes&text=" +
      encodeURIComponent(tweetText);
    window.open(tweetLink, "_blank");
  });
});
