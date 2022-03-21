let delay = 600;
let delayElement = document.querySelector("#speed_input");
delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 620 - parseInt(delayElement.value);
});

console.log(delay);

function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
} 

const btn = document.getElementById("Button3");
btn.addEventListener('click', fun);
function fun(event) {
  document
    .getElementById("myAnchor")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
}