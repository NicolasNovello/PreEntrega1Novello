//Productos
const botines = [
  {
    titulo: "Botines Adidas",
    precio: 5000,
    img: "./img/botin-adidas1.jpg",
  },

  {
    titulo: "Botines Nike",
    precio: 7000,
    img: "./img/botin-nike1.jpg",
  },

  {
    titulo: "Botines Puma",
    precio: 3500,
    img: "./img/botin-puma1.webp",
  },
];

const productos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carritoSinNada");
const productosDelCarrito = document.querySelector("#productosDelCarrito");
const totalCarrito = document.querySelector("#totalDelCarrito");

botines.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("cajas");
  div.innerHTML = `
  <img class="imagenes" src="${producto.img}" alt="${producto.titulo}">
  <h3>${producto.titulo}</h3>
  <h3>$${producto.precio}</h3>
  <button>Agregar al carrito</button>
  `;
  productos.append(div);
});

//Cambio de color de la pagina

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
document.addEventListener("DOMContentLoaded", function () {
  const registroDeFormulario = document.getElementById("loginForm");
  const entradaDeNombre = document.getElementById("username");
  const enlaceDeUsuario = document.querySelector(
    ".barraNavegacion ul li:nth-child(2) a"
  );

  const usuarioRegistrado = localStorage.getItem("usuarioRegistrado");
  if (usuarioRegistrado) {
    enlaceDeUsuario.textContent = "Hola, " + usuarioRegistrado;
  }

  registroDeFormulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreDeUsuario = entradaDeNombre.value.trim();

    if (!nombreDeUsuario) {
      alert("Por favor, ingrese un nombre de usuario.");
      return;
    }

    localStorage.setItem("usuarioRegistrado", nombreDeUsuario);

    enlaceDeUsuario.textContent = "Hola, " + nombreDeUsuario;

    alert("Inicio de sesión exitoso. ¡Hola, " + nombreDeUsuario + "!");

    registroDeFormulario.reset();
  });
});
