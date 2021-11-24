//select the elements on the page, shake button, canvas
const canvas = document.querySelector("#etch-a-sketch"); //id
const ctx = canvas.getContext("2d");
const shakebutton = document.querySelector(".shake");
const MOVE_AMOUNT = 50; //true constant
//setup canvas for drawing
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x and y starting points on the canvas
ctx.lineJoin = "round"; //The ends of lines are rounded.
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT; //A number specifying the line width, in coordinate space units.
let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.beginPath(); //start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
//write draw function
function draw({ key }) {
  //we need to explicit change the variable/stroke style
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  //increment the hue
  hue = hue + 10;
  //start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  //move x and y values depending on what the user did
  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
//write the handler for keys
function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    console.log(e.key);
    draw({ key: e.key });
  }
}
//clear/shake function
function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function () {
      canvas.classList.remove("shake");
    },
    { once: true } //we need to remove event listener
  );
}
//listen for arrow keys
window.addEventListener("keydown", handleKey);
shakebutton.addEventListener("click", clearCanvas);
