//Make a Div
const div = document.createElement("div");
//Add a class of wrapper to it
div.classList.add("wrapper");
//put into the body
document.body.appendChild(div);
//make an unordered list
const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`;
//add three list items with the words "one,two,three" in them
//put that list into above wrapper
div.innerHTML = ul;
console.log(div);
//create an image;
const img = document.createElement("img");
//set the source to an image
img.src = "https://picsum.photos/500";
//set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add("cute");
//add an alt of cute puppy
img.alt = "cute puppy";
//append that image to wrapper;
div.appendChild(img);
//with HTML string,make a div,with two paragraphs inside of it.
const myHtml = `
<div class="myDiv">
<p>Paragraph one</p>
<p>Paragraph two</p>
</div>
`;
//put this div before the unordered list from abov
const ulElement = div.querySelector("ul");
ulElement.insertAdjacentHTML("beforebegin", myHtml);
//add a class to the second paragraph called warning
const myDiv = div.querySelector(".myDiv");
myDiv.children[1].classList.add("warning");
//remove the first paragraph
myDiv.firstElementChild.remove();
//create a function called generatePlayerCard that takes in three arguments: name,age and height.
function generatePlayerCard(name, age, height) {
  const html = `<div class="playerCard">
  <h2> ${name} -${age}</h2>
  <p>Their Height is ${height} and ${age} years old. In dog years this person would be ${
    age * 7
  }. that would be a tall dog!</p>
  <button class="delete" type="button">&times; Delete </button> 
  </div>`;
  return html;
}
//have that function return html that looks like this;
// <div class="playercard">
//<h2>Name-age</h2>
// <p>They are Height and Age years old. In dog years this person would be AGEINDOGYEARS. that would be a tall dog! </p>
//<div>
//make a new div with a class of cards
const cards = document.createElement("div");
cards.classList.add("cards");
//have that function make 4 cards
let cardsHTML = generatePlayerCard("shafiqcoder", 12, 150);
cardsHTML += generatePlayerCard("web", 12, 150);
cardsHTML += generatePlayerCard("snickers", 12, 150);
cards.innerHTML = cardsHTML;
div.insertAdjacentElement("beforebegin", cards);
// append those cards to the div

//put the div into the DOM just before the wrapper element
//Bonus, put a delete button on each card so when you click it,the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll(".delete");
//make out delete function
function deleteCard(event) {
  const clickedButton = event.currentTarget;
  // clickedButton.parentElement.remove();
  clickedButton.closest(".playerCard").remove();
}
//loop over them and attach a listener
buttons.forEach((button) => button.addEventListener("click", deleteCard));
