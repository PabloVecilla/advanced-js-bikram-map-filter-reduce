//RESUELVE LOS EJERCICIOS AQUI
//  1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el resultado de elevar cada número a si mismo.
const numbers = [4, 5, 6, 7, 8, 9, 10]; 
function elevados(arr) {
    return numbers.map(num => num**num); 
}
console.log(elevados(numbers)); 

console.log("************************************")
// 2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']; 
const frases = [
    (food) => 'Como soy de Italia, amo comer ' + food,
    (food) => 'Como soy de Japón, amo comer ' + food,
    (food) => 'Como soy de Valencia, amo comer ' + food,
    (food) => 'Aunque no como carne, el ' + food + ' es sabroso'
]; 

const result2 = foodList.map((food, index) => frases[index](food)); 


// 3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];
/* RESULTADO:: 
[
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ] */  

  const result3 = staff.map(human => {
    console.log(human.hobbies[0])
    return `${human.name} es ${human.role} y le gusta ${human.hobbies[0]} y ${human.hobbies[1]}`
  })

// 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num%2 !== 0); 

// 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true,
    //   gender: "m"
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true,
    //   gender: "f"
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];
/* result = ['Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!'] */
let veggies = foodList2.filter(item => item.isVeggie === true); 


const result5 = veggies.map(item => {   
    const adjective = item.name === "Tempeh" ? "rico" : "rica"; 
    return `Que ${adjective} ${item.name} me voy a comer!`; 

}); 
console.log(result5); 


// 6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.
const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
  
  /*
    [
      'TV Samsung',
      'Viaje a Cancún'
    ]
  */

    const result6Pre = inventory.filter(item => item.price > 300); 
    const result6 = result6Pre.map(item => item.name); 

// 7.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
const numeros3 = [39, 2, 4, 25, 62]; 
let result7 = numeros3.reduce((acc, curr) => {
    return acc * curr
}, 1); 
console.log(result7); 


// 8.- Concatena todos los elementos del array con reduce para que devuelva una sola frase
const nombre = "Yoda"; 
 const sentenceElements = [
  'Me',
  'llamo',
    nombre,
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
]; 

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
const result7Test = sentenceElements.reduce((acc, curr) => acc + " " +   curr , ""); 
const result8 = result7Test.trim(); 
console.log(result8); 

//  8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
const result9 = books.filter(item => item.category === "code").reduce((acc, curr) => acc+curr.price, 0); 
console.log(result9); 
// Resultado --> 60 */
