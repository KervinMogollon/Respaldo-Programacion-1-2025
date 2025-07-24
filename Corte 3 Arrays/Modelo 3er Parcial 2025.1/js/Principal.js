// Main.js
import Cl_mArticulo from "./Cl_mArticulo.js";
import Cl_mArticulos from "./Cl_mArticulos.js";
import Cl_mFactura from "./Cl_mFactura.js";
import Cl_mFacturas from "./Cl_mFacturas.js";

class Main {
  static run() {
    // 1. Crear el manejador de artículos (Cl_mArticulos) y agregar datos de prueba
    const articulosManager = new Cl_mArticulos();
    articulosManager.agregarArticulo({ codigo: 101, nombre: "Laptop", costo: 500 });     // Precio: 500 * 1.25 = 625
    articulosManager.agregarArticulo({ codigo: 102, nombre: "Smartphone", costo: 300 });   // Precio: 300 * 1.25 = 375
    articulosManager.agregarArticulo({ codigo: 103, nombre: "Tablet", costo: 200 });       // Precio: 200 * 1.25 = 250
    articulosManager.agregarArticulo({ codigo: 104, nombre: "Auriculares", costo: 7 });
    articulosManager.agregarArticulo({ codigo: 105, nombre: "Teclados", costo: 30 });
    articulosManager.agregarArticulo({ codigo: 106, nombre: "Mouse", costo: 20 });
    articulosManager.agregarArticulo({ codigo: 107, nombre: "Mouse-Pad", costo: 5 });
    articulosManager.agregarArticulo({ codigo: 108, nombre: "Forro de Celular sencillo", costo: 5 });
    articulosManager.agregarArticulo({ codigo: 109, nombre: "Forro de Celular con Bisuteria", costo: 7 });
    articulosManager.agregarArticulo({ codigo: 110, nombre: "Forro de Celular 360", costo: 10 });

    // 2. Mostrar el listado de artículos en la tabla con id "table"
    const listadoArticulos = articulosManager.listado();
    let htmlArticulos = '<thead><tr><th>Código</th><th>Nombre</th><th>Costo</th><th>Precio</th></tr></thead><tbody>';
    listadoArticulos.forEach(a => {
      htmlArticulos += `<tr>
                          <td>${a.codigo}</td>
                          <td>${a.nombre}</td>
                          <td>${a.costo}</td>
                          <td>${a.precio}</td>
                        </tr>`;
    });
    htmlArticulos += "</tbody>";
    document.getElementById("table").innerHTML = htmlArticulos;

    // 3. Crear el manejador de facturas (Cl_mFacturas) y agregar algunas facturas de prueba
    const facturasManager = new Cl_mFacturas();

    // Factura 1: F001
    const factura1 = new Cl_mFactura("F001", "2023-01-15");
    // Agregamos items: (codigo de artículo, cantidad)
    factura1.agregarItem(101, 1);  // 1 Laptops
    factura1.agregarItem(103, 1);  // 1 Tablet
    factura1.agregarItem(104, 2);
    factura1.agregarItem(105, 1);
    factura1.agregarItem(107, 1);
    facturasManager.agregarFactura(factura1);

    // Factura 2: F002
    const factura2 = new Cl_mFactura("F002", "2023-01-16");

    factura2.agregarItem(102, 1);  // 1 Smartphones
    factura2.agregarItem(104, 1);  // 1 Laptop
    factura2.agregarItem(110, 1);
    facturasManager.agregarFactura(factura2);

    //factura 3: F003
    const factura3 = new Cl_mFactura("F003", "20-01-16");
    factura3.agregarItem(101, 2);
    factura3.agregarItem(102, 10); // 1 smartphone
    factura3.agregarItem(103, 3);
    factura3.agregarItem(104, 25);
    factura3.agregarItem(105, 5);
    factura3.agregarItem(106, 5);
    factura3.agregarItem(107, 5);
    factura3.agregarItem(109, 10);
    factura3.agregarItem(110, 10);
    facturasManager.agregarFactura(factura3)

    // 4. Obtener y mostrar la info de una factura (por ejemplo, factura1) 
    /*
    modelo para reporte de factura:
    (cambiar la N infoFacturaN, facturaN, htmlFacturaInfoN por el respectivo numero de factura.)
    (no olvidar sumar el htmlFacturaInfoN al final del htmlSalida)

    let infoFacturaN = facturaN.info(articulosManager);
    // Nota: en el método info() actual se usa this.articulos.arrayArticulos.find(...) en lugar de usar el parámetro `articulos` recibido.
    // Se recomienda cambiarlo para que use los datos de la instancia pasada (articulosManager).
    let htmlFacturaInfoN = `<h2>Detalle de Factura ${infoFacturaN.codigo}</h2>`;
    htmlFacturaInfoN += `<p>Fecha: ${infoFacturaN.fecha}</p>`;
    htmlFacturaInfoN += "<table border='1'><thead><tr>" +
      "<th>Código</th><th>Nombre</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th>" +
      "</tr></thead><tbody>";
    infoFacturaN.articulosVendidos.forEach(item => {
      if (item !== null) {
        htmlFacturaInfoN += `<tr>
                              <td>${item.codigo}</td>
                              <td>${item.nombre}</td>
                              <td>${item.cantidad}</td>
                              <td>${item.precio}</td>
                              <td>${item.subtotal}</td>
                            </tr>`;
      }
    });
    htmlFacturaInfoN += "</tbody></table>";
    */
   
    let infoFactura1 = factura1.info(articulosManager);
    // Nota: en el método info() actual se usa this.articulos.arrayArticulos.find(...) en lugar de usar el parámetro `articulos` recibido.
    // Se recomienda cambiarlo para que use los datos de la instancia pasada (articulosManager).
    let htmlFacturaInfo1 = `<h2>Detalle de Factura ${infoFactura1.codigo}</h2>`;
    htmlFacturaInfo1 += `<p>Fecha: ${infoFactura1.fecha}</p>`;
    htmlFacturaInfo1 += "<table border='1'><thead><tr>" +
      "<th>Código</th><th>Nombre</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th>" +
      "</tr></thead><tbody>";
    infoFactura1.articulosVendidos.forEach(item => {
      if (item !== null) {
        htmlFacturaInfo1 += `<tr>
                              <td>${item.codigo}</td>
                              <td>${item.nombre}</td>
                              <td>${item.cantidad}</td>
                              <td>${item.precio}</td>
                              <td>${item.subtotal}</td>
                            </tr>`;
      }
    });
    htmlFacturaInfo1 += "</tbody></table>";

    let infoFactura2 = factura2.info(articulosManager);
    // Nota: en el método info() actual se usa this.articulos.arrayArticulos.find(...) en lugar de usar el parámetro `articulos` recibido.
    // Se recomienda cambiarlo para que use los datos de la instancia pasada (articulosManager).
    let htmlFacturaInfo2 = `<h2>Detalle de Factura ${infoFactura2.codigo}</h2>`;
    htmlFacturaInfo2 += `<p>Fecha: ${infoFactura2.fecha}</p>`;
    htmlFacturaInfo2 += "<table border='1'><thead><tr>" +
      "<th>Código</th><th>Nombre</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th>" +
      "</tr></thead><tbody>";
    infoFactura2.articulosVendidos.forEach(item => {
      if (item !== null) {
        htmlFacturaInfo2 += `<tr>
                              <td>${item.codigo}</td>
                              <td>${item.nombre}</td>
                              <td>${item.cantidad}</td>
                              <td>${item.precio}</td>
                              <td>${item.subtotal}</td>
                            </tr>`;
      }
    });
    htmlFacturaInfo2 += "</tbody></table>";

    let infoFactura3 = factura3.info(articulosManager);
    // Nota: en el método info() actual se usa this.articulos.arrayArticulos.find(...) en lugar de usar el parámetro `articulos` recibido.
    // Se recomienda cambiarlo para que use los datos de la instancia pasada (articulosManager).
    let htmlFacturaInfo3 = `<h2>Detalle de Factura ${infoFactura3.codigo}</h2>`;
    htmlFacturaInfo3 += `<p>Fecha: ${infoFactura3.fecha}</p>`;
    htmlFacturaInfo3 += "<table border='1'><thead><tr>" +
      "<th>Código</th><th>Nombre</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th>" +
      "</tr></thead><tbody>";
    infoFactura3.articulosVendidos.forEach(item => {
      if (item !== null) {
        htmlFacturaInfo3 += `<tr>
                              <td>${item.codigo}</td>
                              <td>${item.nombre}</td>
                              <td>${item.cantidad}</td>
                              <td>${item.precio}</td>
                              <td>${item.subtotal}</td>
                            </tr>`;
      }
    });
    htmlFacturaInfo3 += "</tbody></table>";

    // 5. Listado de facturas, mostrando para cada: fecha, código, cantidad total de artículos y total pagado
    let listadoFacturas = facturasManager.listado(articulosManager);
    let htmlListadoFacturas = "<h2>Listado de Facturas</h2>";
    htmlListadoFacturas += "<table border='1'><thead><tr>" +
      "<th>Código</th><th>Fecha</th><th>Cantidad Artículos</th><th>Total Pagado</th>" +
      "</tr></thead><tbody>";
    listadoFacturas.forEach(f => {
      htmlListadoFacturas += `<tr>
                                <td>${f.codigo}</td>
                                <td>${f.fecha}</td>
                                <td>${f.cantidadTotal}</td>
                                <td>${f.totalPagado}</td>
                              </tr>`;
    });
    htmlListadoFacturas += "</tbody></table>";

    // 6. Obtener y mostrar el monto total vendido por la tienda
    let totalVendido = facturasManager.totalVendido(articulosManager);
    let htmlTotal = `<h3>Total Vendido: ${totalVendido}</h3>`;

    // 7. Mostrar toda la salida en el div con id "salida" //
    let salidaHTML = htmlFacturaInfo1 + htmlFacturaInfo2 + htmlFacturaInfo3 + htmlListadoFacturas + htmlTotal;
    document.getElementById("salida").innerHTML = salidaHTML;
  }
}

// Ejecutar Main.run() al cargar la página
window.addEventListener("load", Main.run);
