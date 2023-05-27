let shareBTN = document.getElementById("share-btn");
let shareBTNActive = document.getElementById("share-btn--active");
let active = document.getElementById("share--active");

shareBTN.addEventListener("click", isActive);
shareBTNActive.addEventListener("click", isActive);

function isActive() {
  if (active.classList.contains("activated")) {
    active.classList.remove("activated");
  } else {
    active.classList.add("activated");
  }
}
