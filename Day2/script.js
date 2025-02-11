/* 
Console.log : debug // tag => string => console view
Document write // tag // browser 
Alert() // tag => string // top of browser
Inner HTML()  // tag // browser
*/

console.log("Arti", "syfvy");
console.log(61234.354678);
console.log(6734523);

namee = "Arti";
// my name is Arti
console.log("my name is ", namee);
console.log("my name is " + namee);
console.log("my name is " + namee);

console.log(`My name is ${namee}`);

document.write(`My name is ${namee} <br/>`);
document.write(`<h1>my name is <span style = "color : blue">Arti</span></h1>`);

alert(`My name is ${namee}`);

let name;

let div = document.getElementById("hello"); // box container dabba call

console.log(div);

// div.innerHTML = "yuwerfweyui";
// div.innerHTML = `<h1>my name is <span style = "color : blue">Arti</span></h1>`;

div.innerHTML = "Hello<br/> world";
