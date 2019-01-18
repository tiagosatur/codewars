
/*
Your task is to construct a building which will be a pile of n cubes.
The cube at the bottom will have a volume of n^3, the cube above will have
volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find
the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb) will be
an integer m and you have to return the integer n such as
n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
*/

function findNb(m) {
  //create an endless loop that increments n, the cube number, starting with a value of 1
  for (var n = 0; ; n++) {
    if(m > 0) {
      //if m (the total volume) is not 0, we will subtract the volume of the current cube from it

      //first calculate the voluem of the current cube
      // Math.pow(base, exponent) function returns  the raised base to the exponent
      var currCubeVol = Math.pow(n+1, 3);

      // subtract the current cube volume from the total volume
      m = m - currCubeVol;
    } else if (m == 0) {
      //if m is zero then we have found our n, so return n
      return n;
    } else if (m < 0) {
      //if we have gone below zero there is no such n!
      return(-1);
    }
  }
}

console.log('findNb(1071225)', findNb(1071225));
console.log('findNb(91716553919377)', findNb(91716553919377));


/*Alterntive code*/
function findNb2(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}

function findNb3(m) {
    // your code
    let n = (Math.sqrt(8 * Math.sqrt(m) + 1) -1) / 2;
    return Number.isInteger(n) ? n:-1
}


// this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
// also, the sum of the first n cubes is always a square
function findNb4(m) {
    m = Math.sqrt(m) * 2;
    if (m != parseInt(m)){
      return -1;
    }
    var result = parseInt(Math.sqrt(m));
    return (result * (result + 1) == m) ? result : -1;
}


function findNb5(m) {
  let total = 1;
  for(var i = 2; total < m; i++) total += i * i * i;
  return total == m ? i - 1 : -1;
}


// Bitwise NOT - The ~ operator: http://rocha.la/JavaScript-bitwise-operators-in-practice
// The ~~ operator is a substitute for Math.floor() function, but quicker
const findNb6 = m => Math.sqrt(m) % 1 === 0 ? ~~Math.sqrt(2*Math.sqrt(m)) : -1

console.log('findNb6(1071225)', findNb6(1071225));
