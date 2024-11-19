//  Guess The Number
const det = document.getElementsByTagName("summary");
const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");

for (let hid of minus) {
  hid.classList.add("hidden");
}

for (let i = 0; i < det.length; i++) {
  det[i].addEventListener("click", () => {
    minus[i].classList.toggle("hidden");
    plus[i].classList.toggle("hidden");
  });
}
