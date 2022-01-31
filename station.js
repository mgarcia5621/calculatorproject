//document.getElementById('count-el').innerText = 5

//initialize the count as 0 
//listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


// this is to create a function or to declare such one


let countEl = document.getElementById('count-el')


console.log(countEl)

let count = 0 

function increment () {
    count = count + 1
    countEl.innerText = count
}

increment()