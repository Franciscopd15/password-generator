function generarContraseña() {
    const nombre = document.getElementById("nombre").value.trim();

    if (nombre.length < 5) {
        alert("El nombre debe tener al menos 5 letras.");
        return;
    }

    // Seleccionar 5 letras aleatorias del nombre
    let letras = "";
    let indicesUsados = new Set();
    while (letras.length < 5) {
        let indice = Math.floor(Math.random() * nombre.length);
        if (!indicesUsados.has(indice)) {
            letras += nombre[indice];
            indicesUsados.add(indice);
        }
    }

    // Convertir algunas letras a mayúsculas aleatoriamente
    letras = letras.split("").map(letra => Math.random() > 0.5 ? letra.toUpperCase() : letra).join("");

    // Caracteres posibles
    const numeros = "0123456789";
    const especiales = "!@#$%^&*()-_=+<>?/";

    // Agregar 2 números y 1 carácter especial aleatorio
    let num1 = numeros[Math.floor(Math.random() * numeros.length)];
    let num2 = numeros[Math.floor(Math.random() * numeros.length)];
    let especial = especiales[Math.floor(Math.random() * especiales.length)];

    // Mezclar los caracteres
    let contraseña = (letras + num1 + num2 + especial).split("").sort(() => Math.random() - 0.5).join("");

    // Mostrar en pantalla
    const lista = document.getElementById("listaContraseñas");
    const item = document.createElement("li");
    item.innerHTML = `<span class="password">${contraseña}</span>`;
    lista.appendChild(item);
}
      
      password += char;
  }

  return password;
}
