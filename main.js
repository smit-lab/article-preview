// let shareBTN = document.getElementById("share-btn");
// let shareBTNActive = document.getElementById("share-btn--active");
// let active = document.getElementById("share--active");

// shareBTN.addEventListener("click", isActive);
// shareBTNActive.addEventListener("click", isActive);

// function isActive() {
//   if (active.classList.contains("activated")) {
//     active.classList.remove("activated");
//   } else {
//     active.classList.add("activated");
//   }
// }

// Add a single click event listener to a common parent element
document.addEventListener("click", handleShareButtonClick);

function handleShareButtonClick(e) {
  // Check if the clicked element has the id "share-btn" or "share-btn--active"
  if (e.target.id === "share-btn" || e.target.id === "share-btn--active") {
    // Toggle the "activated" class on the element with id "share--active"
    const active = document.getElementById("share--active");
    active.classList.toggle("activated");
  }
}
