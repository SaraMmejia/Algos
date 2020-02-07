// // There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, 
// judge if this robot ends up at (0, 0) after it completes its moves.

// // The move sequence is represented by a string, and the character moves[i] represents its ith move.
//  Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves,
//   return true. Otherwise, return false.

// // Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the
//  right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

// // Example 1:

// // Input: "UD"
// // Output: true 
// // Explanation: The robot moves up once, and then down once. All moves have the same magnitude, 
// so it ended up at the origin where it started. Therefore, we return true.
 

// // Example 2:

// // Input: "LL"
// // Output: false
// // Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return
//  false because it is not at the origin at the end of its moves.

// Imput: Un string con movimientos
// Outsid: Truel / Falcase 


// 1. Crear un Array con los moviemientos. 
// 2. Crear variables Y y X 
// 2. Recorrerlos 
// 3. Si es Y sumarle Y a U. Si es Down restarle 1 a U. Si el Left tumarle 1 a X y si es Right restarle 1 a X 
// 4. Evaluar si U y L son iguales a cero
// 5. Retornar True.

let y = 0;
let x = 0;
   

function movimientos ( caracter ) { 
    
    switch(caracter){
        case "U" : 
            y ++
            break

        case "D" : 
            y --
            break

        case "L" : 
            x --
            break
        
        case "R" :
            x ++
            break

    }

}

function judgeCircle ( str ) {
    let arrstr = str.split("");

    arrstr.forEach(element => {
        movimientos(element)
    });

    if( x === 0 && y === 0 ){
        return true 
    } return false 

}

console.log(judgeCircle("UDLRLL"))


