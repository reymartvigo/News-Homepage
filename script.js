let open = document.getElementById("menu-open");
let close = document.getElementById("menu-close");
let mobile = document.getElementById("mobile");
let body = document.getElementById("body");
let image = document.getElementById("image-one");

open.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.backgroundColor = "hsl(233, 8%, 79%)";
  open.style.display = "none";
  mobile.style.display = "flex";
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.backgroundColor = "white";
  open.style.display = "flex";
  mobile.style.display = "none";
});
