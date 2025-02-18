// heading call ?

let heading = document.getElementById("heading");

console.log(heading);

// innerHTML

/*
primitive : 
    1 : number (integer , float)
    2 : string (char string)
    3 : boolean (true false)
    4 : Null (empty)
    5 : Undefined (value not assingned)
    6 : BigInt (integer)
    7 : symbol (uniqueness)

non primitive
    1 : array
    2 : object
    3 : function

    positive = true , negative = true , neutral = false (-0,0) , Infinity, -Infinity => console.log(-10 / 0), 
        Infinity=> true,
        -Infinity => true,
        NaN => Not a Number false,
    String : "A" => true , "" => khali(empty) => false
    boolean : true , false
    Null : false
    undefined : false
    BigInt(0n) : false
    BigInt(6732547n) : true
    BigInt : true
    Symbol : true
    Symbol("dik") : true



*/

let array = [
  0,
  -0,
  "fuet",
  "",
  true,
  false,
  null,
  undefined,
  BigInt(0n),
  BigInt(345n),
  Symbol,
  Symbol("sfukye"),
  Infinity,
  -Infinity,
  NaN,
];

for (let i = 0; i < array.length; i++) {
  if (array[i]) {
    // true = boolean
    // heading.innerHTML = `${array[i]}`;
    console.log(array[i]);
  }
}
