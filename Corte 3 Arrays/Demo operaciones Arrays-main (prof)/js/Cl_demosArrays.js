export default class Cl_demosArrays {
  ejemploCreacion() {
    let numeros = [
      1,
      2,
      3,
      4,
      5];
    let booleanos = [
      true,
      false,
      true];
    let strings = ["hola", "mundo"];
    let personas = [
      { nombre: "Leo", edad: 19 }, { nombre: "Ana", edad: 20 },{ nombre: "Eva", edad: 17 },
    ];
    alert(`
==> Tipos de datos primitivos:
numeros[2] = ${numeros[2]}
booleanos[1] = ${booleanos[1]}
strings[0] = ${strings[0]}

==> Tipos de datos objetos:        
personas[0].nombre = ${personas[0].nombre}
personas[1].edad = ${personas[1].edad}
        `);
  }

  ejemploAcceso1() {
    let personas = [
      { nombre: "Leo", edad: 19 },
      { nombre: "Ana", edad: 20 },
      { nombre: "Eva", edad: 17 },
    ];

    alert(`
==> Acceder a una Propiedad de un Objeto:
Nombre primera persona:
    personas[0].nombre = ${personas[0].nombre}

==> Acceder a una Propiedad Usando Notación de Corchetes:
Edad primera persona: 
    personas[0]["edad"] = ${personas[0]["edad"]}
      `);
  }

  ejemploAcceso2() {
    let numeros = [1, 2, 3, 4, 5];

    let desarrolladores = [
      { nombre: "John", edad: 25, lenguajes: ["JavaScript", "Python"] },
      { nombre: "Kelly", edad: 37, lenguajes: ["Ruby", "Python", "C", "C++"] },
      { nombre: "Zack", edad: 45, lenguajes: ["Go", "C#"] },
    ];
    alert(`
==> Tipos de datos primitivos:
numeros[2] = ${numeros[2]}

==> Tipos de datos objetos:
Acceder al nombre del primer desarrollador
desarrolladores[0].nombre = ${desarrolladores[0].nombre}
Acceder al segundo lenguaje del segundo desarrollador
desarrolladores[1].lenguajes[1] = ${desarrolladores[1].lenguajes[1]}
      `);
  }

  ejemploPush() {
    let numeros = [1, 2, 3];
    alert(`
==> Antes de push
numeros = ${numeros}
    `);
    numeros.push(4);
    alert(`
==> Despues de numeros.push(4)
numeros = ${numeros}
    `);
    numeros.push(5, 6);
    alert(`
==> Despues de numeros.push(5, 6)
numeros = ${numeros}
    `);
  }

  ejemploUnshift() {
    let frutas = ["manzana", "banana"];
    alert(`
==> Antes de unshift
frutas = ${frutas}
    `);
    frutas.unshift("naranja");
    alert(`
==> Despues de frutas.unshift("naranja")
frutas = ${frutas}
    `);
    frutas.unshift("uva", "pera");
    alert(`
==> Despues de frutas.unshift("uva", "pera")
frutas = ${frutas}
    `);
  }

  ejemploPop() {
    let numeros = [1, 2, 3, 4, 5];
    alert(`
==> Array de números
Antes de pop
numeros = ${numeros}`);
    let ultimoNumero = numeros.pop();
    alert(`
==> Despues de numeros.pop()
numeros = ${numeros}
El último número fue ${ultimoNumero}
      `);
    let personas = [
      { nombre: "Ana", edad: 25 },
      { nombre: "Luis", edad: 30 },
      { nombre: "Carlos", edad: 35 },
    ];
    alert(`
==> Array de objetos
Antes de pop
personas = ${JSON.stringify(personas)}`);
    let ultimaPersona = personas.pop();
    alert(`
==> Despues de personas.pop()
personas = ${JSON.stringify(personas)}
La persona eliminada fue ${JSON.stringify(ultimaPersona)}
      `);
  }

  ejemploShifty() {
    // Array de elementos primitivos (números)
    let numeros = [1, 2, 3, 4, 5];
    alert(`
==> Array de elementos primitivos (números)
Antes de shift
numeros = ${numeros}
      `);
    let primerNumero = numeros.shift();
    alert(`
==> Despues de numeros.shift()
numeros = ${numeros}
El primer número fue ${primerNumero}
      `);
    // Array de objetos
    let personas = [
      { nombre: "Ana", edad: 25 },
      { nombre: "Luis", edad: 30 },
      { nombre: "Carlos", edad: 35 },
    ];
    alert(`
==> Array de objetos
Antes de shift
personas = ${JSON.stringify(personas)}
      `);
    let primeraPersona = personas.shift();
    alert(`
==> Despues de personas.shift()
personas = ${JSON.stringify(personas)}
La persona eliminada fue ${JSON.stringify(primeraPersona)}
      `);
  }

  ejemploSplice() {
    // Array de elementos primitivos (números)
    let numeros = [1, 2, 3, 4, 5];
    alert(`
==> Array de elementos primitivos (números)
Antes de splice
numeros = ${numeros}
      `);
    let eliminados = numeros.splice(2, 2, 6, 7);
    alert(`
==> Luego de splice
numeros = ${numeros}
Elementos eliminados: ${eliminados}
      `);
    // Array de objetos
    let personas = [
      { nombre: "Ana", edad: 25 },
      { nombre: "Luis", edad: 30 },
      { nombre: "Carlos", edad: 35 },
      { nombre: "María", edad: 28 },
    ];
    alert(`
==> Array de objetos
Antes de splice
personas = ${JSON.stringify(personas)}
      `);
    eliminados = personas.splice(1, 0, { nombre: "Pedro", edad: 40 });
    alert(`
==> Luego de splice
personas = ${JSON.stringify(personas)}
Elementos eliminados: ${JSON.stringify(eliminados)}
      `);
  }

  metodoMap1() {
    // Ejemplo con Elementos Primitivos
    const numeros = [1, 2, 3, 4, 5];
    const duplicados = numeros.map((num) => num * 2);
    alert(`
==> Ejemplo con Elementos Primitivos
numeros = ${numeros}
duplicados = ${duplicados}
      `);
    // Ejemplo con Objetos
    const personas = [
      { nombre: "Ana", edad: 25 },
      { nombre: "Luis", edad: 30 },
      { nombre: "Carlos", edad: 35 },
    ];
    const nombres = personas.map((persona) => persona.nombre);
    alert(`
==> Ejemplo con Objetos
personas = ${JSON.stringify(personas)}
nombres = ${nombres}
      `);
  }
  metodoMap2() {
    const personas = [
      { nombre: "Ana", edad: 25 },
      { nombre: "Luis", edad: 30 },
      { nombre: "Carlos", edad: 35 },
    ];
    const personasConEdadIncrementada = personas.map((persona) => ({
      ...persona,
      edad: persona.edad + 1,
    }));
    alert(`
==> Ejemplo método map()
personas = ${JSON.stringify(personas)}
personasConEdadIncrementada = ${JSON.stringify(personasConEdadIncrementada)}
      `);
  }
  ciclosTradicionales() {
    // Con ciclo for
    let numeros = [1, 2, 3, 4, 5];
    // Usamos un bucle for para recorrer el array
    for (let i = 0; i < numeros.length; i++) {
      alert(`CICLO for: numeros[${i}] = ${numeros[i]}`);
    }

    // Con ciclo while
    let frutas = ["manzana", "banana", "cereza", "durazno"];
    let i = 0;
    while (i < frutas.length) {
      alert(`CICLO while: frutas[${i}] = ${frutas[i]}`);
      i++;
    }
    // Con ciclo do-while
    let arr = [1, 2, 3, 4, 5];
    i = 0;
    do {
      alert(`CICLO do-while: arr[${i}] = ${arr[i]}`);
      i++;
    } while (i < arr.length);
  }

  metodoForEach() {
    // Mock Data
    const mockData = [10, 20, 30, 40, 50];


    mockData.forEach(function (item) {
      alert(`Recorrido con función tradicional: ${item}`);
    });
    // Using arrow function
    mockData.forEach((item) => alert(`Recorrido con función flecha: ${item}`));
  }

  metodoFilter() {
    const numeros = [5, 12, 8, 130, 44];
    const mayoresQueDiez = numeros.filter((num) => num > 10);
    alert(`
==> Ejemplo con datos primitivos
números = ${numeros}
números mayores que 10: ${mayoresQueDiez}
      `);
    const personas = [
      { nombre: "Ana", edad: 25 },
      { nombre: "Luis", edad: 15 },
      { nombre: "Carlos", edad: 35 },
    ];
    const mayoresDe18 = personas.filter((persona) => persona.edad > 18);
    alert(`
==> Ejemplo con objetos
personas = ${JSON.stringify(personas)}
mayores de 18 = ${JSON.stringify(mayoresDe18)}
        `);
  }

  metodoSort() {
    let numeros = [10, 5, 8, 1, 7];
    alert(`
==> Ejemplo con datos primitivos
números = ${numeros}
      `);
    numeros.sort((a, b) => a - b); // Ordena de menor a mayor
    alert(`
==> Los números ordenados de menor a mayor
números = ${numeros}
        `);
    let palabras = ["manzana", "naranja", "banana", "kiwi"];
    alert(`
==> Ejemplo con datos primitivos
palabras = ${palabras}
        `);
    palabras.sort(); // Ordena alfabéticamente
    alert(`
==> Las palabras ordenadas alfabéticamente
palabras = ${palabras}
        `);
    let personas = [
      { nombre: "Ana", edad: 25 },
      { nombre: "Luis", edad: 30 },
      { nombre: "Carlos", edad: 20 },
    ];
    alert(`
==> Ejemplo con objetos
personas = ${JSON.stringify(personas)}
        `);
    personas.sort((a, b) => a.edad - b.edad); // Ordena por edad de menor a mayor
    alert(`
==> Las personas ordenadas por edad de menor a mayor
personas = ${JSON.stringify(personas)}
        `);
  }
}
