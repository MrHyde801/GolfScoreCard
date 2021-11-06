fetch("https://golf-courses-api.herokuapp.com/courses", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
         console.error(err)
       })

fetch("https://golf-courses-api.herokuapp.com/courses/19002", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
         console.error(err)
       })

let outYardSum = 0;
let outParSum = 0;
let outHandiSum = 0;
let outPlayerSum = 0;
let inYardSum = 0;
let inParSum = 0;
let inHandiSum = 0;
let inPlayerSum = 0;

const handIn = document.getElementsByClassName('handIn')
const parIn = document.getElementsByClassName('parIn')
const yardIn = document.getElementsByClassName('yardIn')
const handOut = document.getElementsByClassName('handOut')
const parOut = document.getElementsByClassName('parOut')
const yardOut = document.getElementsByClassName('yardOut')


let sum = 0;

for(x of parIn) {
  sum += parseInt(x.innerHTML);
}
document.getElementById('in-par-total').innerHTML = sum;


const table1 = document.getElementById('table1');
for (let i in table1.rows) {
  let row = table1.rows[i]

  for(let j in row.cells) {
  }
}

const table2 = document.getElementById('table2');
for (let i in table2.rows) {
  let row = table2.rows[i]

  for(let j in row.cells) {
  }
}
console.log(table1)
console.log(table2)



