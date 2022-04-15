const body = document.querySelector("body");
console.log(body);
body.style.background = "red";

setInterval(() => {
  if (body.style.background === "black") {
    body.style.background = "red";
  } else {
    body.style.background = "black";
  }
}, 1000);
