const quotes = [
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength.",
    author: "- Arnold Schwarzenegger -",
  },
  {
    quote: "It is kind of fun to do the impossible",
    author: "- Walt Disney -",
  },
  {
    quote: "Tough times never last, but tough people do",
    author: "- Robert H. Schuller -",
  },
  {
    quote:
      "I failed over and over and over again in my life and that is why I succeed",
    author: "- Michael Jordan -",
  },
  {
    quote:
      "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "- Martin Luther King, Jr -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
