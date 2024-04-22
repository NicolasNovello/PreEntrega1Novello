// cambio de color de la pagina

const btnColorDePagina = document.querySelector(".colorDePagina");

btnColorDePagina.addEventListener("click", () => {
  document.body.classList.toggle("cambioDeColor");

  if (document.body.classList.contains("cambioDeColor")) {
    btnColorDePagina.innerText = "Modo claro";
    localStorage.setItem("modoColor", "oscuro");
  } else {
    btnColorDePagina.innerText = "Modo oscuro";
    localStorage.setItem("modoColor", "claro");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const modoColor = localStorage.getItem("modoColor");

  if (modoColor === "oscuro") {
    document.body.classList.add("cambioDeColor");
    document.querySelector(".colorDePagina").innerText = "Modo claro";
  } else {
    document.body.classList.remove("cambioDeColor");
    document.querySelector(".colorDePagina").innerText = "Modo oscuro";
  }
});

//Simulacion de inicio de sesion
