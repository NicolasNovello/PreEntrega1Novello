alert("¡Bienvenido a El Botinero!");
let nombre = prompt("Ingrese su nombre por favor");
alert("¡Hola " + nombre + ", encantado de conocerte!");

const catalogo = () => {
  let mostrarCatalogo = prompt(
    "¿Estarías interesado en conocer nuestro catálogo?\n Responder con SI o NO"
  ).toUpperCase();

  let total = 0;
  if (mostrarCatalogo === "SI") {
    let opciones = "";
    while (opciones !== "ESC") {
      opciones = prompt(
        "Perfecto, estas son las opciones que tenemos disponibles en este momento:\n" +
          "1- Botines Nike: $5000 \n" +
          "2- Botines Adidas: $4500 \n" +
          "3- Botines Puma: $3500 \n" +
          "Coloque el número del botín en el que se encuentra interesado\n" +
          "Si no es lo que usted esperaba escriba ESC"
      ).toUpperCase();

      if (opciones === "1") {
        total += 5000;
        alert("¡Genial! Elegiste los botines Nike");
        alert("El total de su compra es " + total);
      } else if (opciones === "2") {
        total += 4500;
        alert("¡Genial! Elegiste los botines Adidas");
        alert("El total de su compra es " + total);
      } else if (opciones === "3") {
        total += 3500;
        alert("¡Genial! Elegiste los botines Puma");
        alert("El total de su compra es " + total);
      } else if (opciones === "ESC") {
        alert("Gracias por visitarnos.");
        return;
      } else {
        alert("Porfavor selecciona una opción válida.");
      }

      let seguirComprando = prompt(
        "¿Desea seguir comprando?\n" + "Responda con SI o NO"
      ).toUpperCase();
      if (seguirComprando === "NO") {
        alert(
          "Gracias por confiar en nosotros, el total de tus productos es " +
            total
        );
        return;
      }
    }
  } else {
    alert("Gracias por visitarnos.");
  }
};

catalogo();
