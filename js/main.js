alert("Bienvenido al Botinero");
let nombreUsuario = prompt("Por favor ingrese su nombre");
while (nombreUsuario === "") {
  alert("Ingrese un nombre");
  nombreUsuario = prompt("Por favor ingrese su nombre");
}
alert("Hola " + nombreUsuario + ", un gusto verte");

const productos = [
  {
    nombre: "Botín Nike",
    precio: 5000,
  },
  {
    nombre: "Botín Adidas",
    precio: 4500,
  },
  {
    nombre: "Botín Puma",
    precio: 3500,
  },
];

const catalogo = () => {
  let carrito = [];
  let total = 0;

  let mostrarCatalogo = prompt(
    "¿Estarías interesado en conocer nuestro catálogo?\nResponder con SI o NO"
  ).toUpperCase();

  while (mostrarCatalogo !== "SI" && mostrarCatalogo !== "NO") {
    alert("Por favor, selecciona una opción válida (SI o NO).");
    mostrarCatalogo = prompt(
      "¿Estarías interesado en conocer nuestro catálogo?\nResponder con SI o NO"
    ).toUpperCase();
  }

  if (mostrarCatalogo === "SI") {
    let opciones = "";
    while (opciones !== "ESC") {
      opciones = prompt(
        "Estas son las opciones que tenemos disponibles en este momento:\n" +
          productos
            .map(
              (producto, index) =>
                index + 1 + "- " + producto.nombre + ": $" + producto.precio
            )
            .join("\n") +
          "\nColoque el número del botín en el que se encuentra interesado\n" +
          "Si no es lo que usted esperaba escriba ESC"
      ).toUpperCase();

      if (!isNaN(opciones)) {
        opciones = parseInt(opciones);
        if (opciones >= 1 && opciones <= productos.length) {
          let productoSeleccionado = productos[opciones - 1];
          carrito.push(productoSeleccionado);
          total += productoSeleccionado.precio;
          let continuarComprando = confirm(
            `Ha seleccionado: ${productoSeleccionado.nombre}\nPrecio: $${productoSeleccionado.precio}\n¿Desea seguir comprando?`
          );

          if (!continuarComprando) {
            alert(
              `¡Gracias por su compra, ${nombreUsuario}! Monto total: $${total}`
            );
            break;
          }
        }
      } else if (opciones === "ESC") {
        if (carrito.length > 0) {
          alert(
            `¡Gracias por su compra, ${nombreUsuario}! Monto total: $${total}`
          );
        } else {
          alert("¡Hasta luego!");
        }
        break;
      }
    }
  } else {
    alert("¡Hasta luego!");
  }
};

catalogo();
