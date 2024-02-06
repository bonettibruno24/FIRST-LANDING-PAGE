const button = document.querySelector(".openbtn")
const nav = document.querySelector(".color")
button.addEventListener("click", () => {
  nav.classList.toggle("active")
  console.log("afirm")
})
console.log(button)