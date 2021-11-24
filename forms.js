console.log("working");
const sc = document.querySelector(".sc");
sc.addEventListener("click", function (event) {
  const changePage = confirm("Would you like to proceed?");

  if (!changePage) {
    event.preventDefault();
    // window.location = event.currentTarget.href;
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", function (event) {
  const name = event.currentTarget.name.value;
  if (name.includes("chad")) {
    alert("sorry Bro");
    event.preventDefault();
  }
});
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("focus", logEvent); //it can be used to find how long people take to fill specific field.
signupForm.name.addEventListener("blur", logEvent);

//Accesibility Gotchas and Keyboard Codes

const photo = document.querySelector(".photo");

function handlePhotoClick(event) {
  if (event.type === "click" || event.key === "Enter") {
    console.log("You clicked the photo");
  }
}

photo.addEventListener("click", handlePhotoClick);
photo.addEventListener("keyup", handlePhotoClick);
