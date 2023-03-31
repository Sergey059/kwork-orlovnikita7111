const modal = document.getElementById("popup");

const btn = document.getElementById("top-button");

const span = document.getElementsByClassName("popup-close")[0];

if (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
  };
}

if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const menuOpen = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  burger.onclick = () => {
    burger.classList.toggle("active");
    if (burger.classList.contains("active")) {
      nav.classList.add("active");
    } else {
      burger.classList.remove("active");
      nav.classList.remove("active");
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  menuOpen();
});
