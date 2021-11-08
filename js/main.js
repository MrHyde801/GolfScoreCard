// fetch("https://golf-courses-api.herokuapp.com/courses", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => {
//       console.error(err)
//     })
       
//question about different id
function getCourseInfo(){
  return fetch("https://golf-courses-api.herokuapp.com/courses/19002", {
    method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      courseInfo = data.data
      populateTeeBoxes(data.data)
    })
    .catch(err => {
      console.error(err)
    })
    
  }

let courseInfo = null;

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


window.onload = () => {
  getCourseInfo()
  let teeBoxSelect = document.getElementById('teeBox-select')
  teeBoxSelect.addEventListener('change', (e) => selectTeeBox(e))
}

function populateCards(tbIndex) {
  let outYard = 0
  let inYard = 0
  let outPar = 0
  let inPar = 0
  let outHand = 0
  let inHand = 0

  courseInfo.holes.forEach((hole, index) => {
    let teeBox = hole.teeBoxes[tbIndex]
    let yardage = teeBox.yards
    let yardBox = document.getElementById(`y${index + 1}`)
    yardBox.innerHTML = yardage

    let parInfo = teeBox.par
    let parBox = document.getElementById(`p${index + 1}`)
    parBox.innerHTML = parInfo

    let handInfo = teeBox.hcp
    let handBox = document.getElementById(`h${index + 1}`)
    handBox.innerHTML = handInfo

    if(index < 9) {
      outYard += yardage;
      outPar += parInfo;
      outHand += handInfo;
    } else {
      inYard += yardage;
      inPar += parInfo;
      inHand += handInfo;
    }
    
  })
  let outYardTotal = document.getElementById('out-yard-total')
  outYardTotal.innerHTML = outYard

  let outParTotal = document.getElementById('out-par-total')
  outParTotal.innerHTML = outPar
  
  let outHandTotal = document.getElementById('out-hand-total')
  outHandTotal.innerHTML = outHand

  let inYardTotal = document.getElementById('in-yard-total')
  inYardTotal.innerHTML = inYard

  let inParTotal = document.getElementById('in-par-total')
  inParTotal.innerHTML = inPar
  
  let inHandTotal = document.getElementById('in-hand-total')
  inHandTotal.innerHTML = inHand

  let allYardage = document.getElementById('all-yardage')
  allYardage.innerHTML = outYard + inYard

  let allPar = document.getElementById('all-par')
  allPar.innerHTML = outPar + inPar

  let allHand = document.getElementById('all-handicap')
  allHand.innerHTML = outHand + inHand
}




function populateTeeBoxes(courseInfo) {
  console.log(courseInfo)
  let teeBoxes = courseInfo.holes[0].teeBoxes.map((teebox , index) => {
    let option = `<option value="${index}" >${capitalizeFirstLetter(teebox.teeColorType)}</option>`
    return option
  })
  console.log(teeBoxes)
  let teeBoxSelect = document.getElementById('teeBox-select')
  teeBoxSelect.innerHTML = teeBoxSelect.innerHTML + teeBoxes.join('')
  console.log(teeBoxSelect);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function selectTeeBox(e) {
console.log(e)
let tbIndex = e.target.value
console.log(tbIndex)
populateCards(tbIndex)
}


//open up function to whatever I want bow chick wowow (discord chat)
let holesPar = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let parOutScore = document.getElementById('playerOutTotal')
let parinScore = document.getElementById('playerInTotal')
let totalScore = document.getElementById('all-score')
let playerScore = document.querySelectorAll('.score-1')
playerScore.forEach((input,index) => {
  input.addEventListener('change', e => {
    holesPar[index] = e.target.value
    calculateTotals()
  })
})

function calculateTotals() {
  let outTotal = 0;
  let inTotal = 0;
  let total = outTotal + inTotal;
  let outHoles = holesPar.slice(0,9)
  let inHoles = holesPar.slice(10)
  outHoles.forEach(parOut => {
    outTotal += parseInt(parOut)
  })
  inHoles.forEach(parIn => {
    inTotal += parseInt(parIn)
  })
  holesPar.forEach(par => {
    total += parseInt(par)
  })
  parOutScore.innerHTML = outTotal
  parinScore.innerHTML = inTotal
  totalScore.innerHTML = total
}

  // counter = 0

  // function getNextId() {
  //   this.id = counter++;
  // } 

  // function renderPlayers() {
  //   const outPlayers = document.importNode(playerOut.content, true)
  //   const inPlayers = document.importNode(playerIn.content, true)


// function renderPlayers() {
//   const outPlayers = document.importNode(playerOut.content, true)
//   const 
//   const inPlayers = document.importNode(playerIn.content, true)
// }

/* <template id="playerIn">
        <tr>
            <th scope="row" class="player1Out" contenteditable="true">Player 1</th>
            <td><input type="number" class="score-1" name="quantity" min="1" placeholder="0"></td>
            <td><input type="number" class="score-1" name="quantity" min="1" placeholder="0"></td>
            <td><input type="number" class="score-1" name="quantity" min="1" placeholder="0"></td>
            <td><input type="number" class="score-1" name="quantity" min="1" placeholder="0"></td>
            <td><input type="number" class="score-1" name="quantity" min="1" placeholder="0"></td>
            <td><input type="number" class="score-1" name="quantity" min="1" placeholder="0"></td>
            <td><input type="number" class="score-1" name="quantity" min="1" placeholder="0"></td>
            <td><input type="number" class="score-1" name="quantity" min="1" placeholder="0"></td>
            <td><input type="number" class="score-1" name="quantity" min="1" placeholder="0"></td>
            <td id="playerOutTotal"></td>
        </tr>
    </template> */

/* <div class="task">
<input type="checkbox" />
<label>
    <span class="custom-checkbox"></span>
</label>
</div> */

function renderTasks(selectedList) {
  selectedList.tasks.forEach(task => {
      const taskElement = document.importNode(taskTemplate.content, true)
      const checkbox = taskElement.querySelector('input')
      checkbox.id = task.id
      checkbox.checked = task.complete
      const label = taskElement.querySelector('label')
      label.htmlFor = task.id
      label.append(task.name)
      tasksContainer.appendChild(taskElement)
  })
}