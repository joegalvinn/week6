//wite an event that counts in vanilla JS

//event handler
//i have button in my Dom
//get element by id --> button

//event handler
let count = 0;

function handleCount() {
  count = count + 1;
}

//event listener
button.addEventListener("click", handleCount);
