// Write a function called repeatedChars that receives two strings and returns a new string with the characters that are repeated 
// in both input strings:

// `repeatedChars("german", "gabriela"); // "gear"`

// 1. imput : dos strings 
// 2. Output 1 string con las letras que se repiten en los dos string de entrada. 

// 1. Creamos arreglos para los dos string de entrada.
// 2. Crear un arreglo de salida.  
// 3. Recorrer todo el arreglo del String1. 
// 4. Comparar el primer caracter con el el string2 
// 5. Si el caracter es igual a algún carater str2, almacenarlo en otro arreglo 
// 6. Y continuar con el siguiente caracter. 


function repeatedChars(str1, str2) {
    let arrstr1 = str1.split("");
    let arrstr2 = str2.split("");
    let arrsalida = [];

    arrstr1.forEach(caracter1 => {
        arrstr2.forEach(caracter2 => {
            if (caracter1 === caracter2) {
                if (!arrsalida.includes(caracter1)) {
                    arrsalida.push(caracter1)
                }
            }
        })
    });
return arrsalida
}
console.log(repeatedChars("german", "gabriela"));


