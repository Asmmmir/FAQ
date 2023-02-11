const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    button.parentNode.classList.toggle("active");
  });
});
