const quotes = [
  {
    quote: `While breathing in long, one knows: "I breathe in long". While breathing out long, one knows "I breathe out long."`,
    source: "Gautama Buddha",
    citation: "anapanasati sutta"
  },
  {
    quote: `While breathing in short, one knows: "I breathe in short." While breathing out short, one knows, "I breathe out short."`,
    source: "Gautama Buddha",
    citation: "anapanasati sutta"
  },
  {
    quote: `One trains oneself: "Sensitive to the whole body, I breathe in. Sensitive to the whole body, I breathe out."`,
    source: "Gautama Buddha",
    citation: "anapanasati sutta"
  },
  {
    quote: `One trains oneself: "Calming the whole body, I breathe in. Calming the whole body, I breathe out."`,
    source: "Gautama Buddha",
    citation: "anapanasati sutta"
  },
  {
    quote: `One trains oneself: "Sensitive to rapture, I breathe in. Sensitive to rapture, I breathe out."`,
    source: "Gautama Buddha",
    citation: "anapanasati sutta"
  }
]; //array of quote objects

function getRandomQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length); //random index
  return quotes[randomIndex]; //returns quote at random index
}

function printQuote () {
  const quoteObj = getRandomQuote(); //random quote object
  let htmlString = `<p class="quote">${quoteObj.quote}</p><p class="source">${quoteObj.source}`; //html string with quote and source
  for (key in quoteObj) {
    if (key !== "quote" && key !== "source"){
      htmlString += `<span class="${key}">${quoteObj[key]}</span>`;
    } //filter out quote and source properties
  } //add on spans for additional attribution elements
  document.getElementById('quote-box').innerHTML = htmlString+='</p>'; //set quote-box to html string
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
