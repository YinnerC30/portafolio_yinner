const themeToggleButton = document.getElementById("toggle");
const body = document.body;
const header = document.getElementById("navbar");
const links = document.querySelectorAll(".navbar__item");

console.log(themeToggleButton);
console.log(header);

themeToggleButton.addEventListener("change", function () {
  return themeToggleButton.checked ? changeThemePage(1) : changeThemePage(0);
});

function changeThemePage(estado) {
  if (estado != 0) {
    header.style.backgroundColor = "black";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    // Cambia el color de todos los links a blanco
    for (const link of links) {
      link.style.color = "white";
    }
  } else {
    header.style.backgroundColor = "white";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    // Cambia el color de todos los links a negro
    for (const link of links) {
      link.style.color = "black";
    }
  }
  console.log(header);
  console.log(body);
}






