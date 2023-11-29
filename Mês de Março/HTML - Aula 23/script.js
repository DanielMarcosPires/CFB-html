const abrir = document.querySelector("#abrir ");
const fechar = document.querySelector("#Fechar ");
const d1 = document.querySelector("#d1");

abrir.addEventListener("click", () => {
  d1.setAttribute("open", "");
});
fechar.addEventListener("click", () => {
  alert();
  d1.removeAttribute("open");
});
