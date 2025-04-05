function mostrarListas(listaPokes) {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Limpiar el contenido previo

    // Crear un string con los nombres de los Pokémon
    let pokes = ""; // Declarar la variable correctamente
    for (let i = 0; i < listaPokes.length; i++) {
        pokes += listaPokes[i].name + "<br>"; // Agregar nombre con salto de línea
    }

    // Mostrar la lista en el contenedor
    app.appendChild = pokes; // Asignar la lista al contenedor
}
