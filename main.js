function add( a, b){
  return a + b;
}

add( 2, 3 );

console.log(add(2, 3));

const navn = "jonas"

function sayHello(navn) {
  return navn;
}

console.log("hej " + sayHello(navn));

const square = n => n * n;

console.log(square(5));

const calculateVat = pris => {
  return pris * 1.25;
};

console.log(calculateVat(100));