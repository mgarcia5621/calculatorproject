//document.getElementById('count-el').innerText = 5

//initialize the count as 0 
//listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


// this is to create a function or to declare such one


"use strict";

let countEl = document.getElementById('count-el')


let count = 0 

function increment () {
    count = count + 1
    countEl.innerText = count
}

increment()


function save () {
    console.log(count)   
}

save()

var price = 20;
var isSale = true;

//variable shadowing
//let & const - block-scoped

//any var created within a block doesnt exist and cannot be accessed outside of the block

if (isSale) {
  // discount price of product
  let price = 20 - 2; 
  // do something 
  console.log('sale price', price);
}

console.log('price', price);