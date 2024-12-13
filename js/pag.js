
const productos = [
  {nombre: "Gta", precio: 4500, stock: 5, imagen: "imagenes/1538762676-grand-theft-auto-5-gta-v-gta-5-ps4-primaria-solo-por-hoy.jpg"},
  {nombre: "fc24", precio: 5500, stock: 3, imagen: "imagenes/69f9d013468e6e550b47444ac84c762c137f06800640bf3d67bda949ab9eb69784660.png"},
  {nombre: "Spiderman", precio: 6500, stock: 5, imagen: "imagenes/productos_300x400_1697557700-marvels-spider-man-2-ps5-pre-orden-0.jpg"},
  {nombre: "Call of duty", precio: 3500, stock: 10, imagen: "imagenes/productos_300x400_1698953444-call-of-duty-modern-warfare-iii-ps4-0.jpg"},
  {nombre: "Fc23", precio: 1500, stock: 2, imagen: "imagenes/productos_300x400_1626128314-fifa-22-ps4-pre-orden.jpg"},

];


const lista = document.getElementById('lista');
const totalText = document.getElementById('totalText');
const finalizarCompras = document.getElementById('finalizarCompras');
let totalProductosEnCarrito = 0;
function pintarProductos(arrayProductos) {
  lista.innerHTML = ''; 
  for (let i = 0; i < arrayProductos.length; i++) {
      lista.innerHTML += `
          <li class="tarjeta">
              <img src="${arrayProductos[i].imagen}" alt="${arrayProductos[i].nombre}">
              <p>Prod: ${arrayProductos[i].nombre}</p>
              <p>Precio: $${arrayProductos[i].precio}</p>
              <input type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly>
              <input type="number" id="entrada${i}" placeholder="Ingrese cantidad">
              <button id="btn${i}">Agregar al carrito</button>
          </li>`;
  }

 
  for (let i = 0; i < arrayProductos.length; i++) {
      document.getElementById(`btn${i}`).addEventListener("click", () => {
          comprar(i);
      });
  }
}


function comprar(index) {
  const cantidad = parseInt(document.getElementById(`entrada${index}`).value);
  if (isNaN(cantidad) || cantidad <= 0) {
      alert("Por favor, ingresa una cantidad válida.");
      return;
  }

  if (cantidad > productos[index].stock) {
      alert("No hay suficiente stock disponible.");
      return;
  }



  document.getElementById(`stock${index}`).value = productos[index].stock;


  const totalActual = parseInt(totalText.textContent.replace("Total: $", ""));
  const nuevoTotal = totalActual + (cantidad * productos[index].precio);
  totalText.textContent = `Total: $${nuevoTotal}`;
  totalProductosEnCarrito += cantidad;
  alert(`Has agregado ${cantidad} unidades de ${productos[index].nombre} al carrito.`);
}


pintarProductos(productos);

document.getElementById("finalizar").addEventListener("click", function() {
  
  if (totalProductosEnCarrito > 0)
    alert("¡Tu compra se ha hecho con exito ");
  else 
  alert("No has agregado productos al carrito.");
  

});