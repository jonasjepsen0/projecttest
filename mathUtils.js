export function add( a, b){
  return a + b;
}

add( 2, 3 );

console.log(add(2, 3));

export const square = n => n * n;

console.log(square(5));

export const calculateVat = pris => {
  return pris * 1.25;
};

console.log(calculateVat(100));