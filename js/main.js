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



function changePlayer1() {
  let name1 = document.getElementById('player1Out').innerHTML
  let box1 = document.getElementsByClassName('playerIn1') 
  box1[0].innerHTML = name1
}

function changePlayer2() {
  let name2 = document.getElementById('player2Out').innerHTML
  let box2 = document.getElementsByClassName('playerIn2')
  box2[0].innerHTML = name2 
}

function changePlayer3() {
  let name3 = document.getElementById('player3Out').innerHTML
  let box3 = document.getElementsByClassName('playerIn3')
  box3[0].innerHTML = name3 
}

function changePlayer4() {
  let name4 = document.getElementById('player4Out').innerHTML
  let box4 = document.getElementsByClassName('playerIn4')
  box4[0].innerHTML = name4
}

function clearData(){
  window.location.reload();
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


let holes1Par = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let par1OutScore = document.getElementById('player1OutTotal')
let par1inScore = document.getElementById('player1InTotal')
let total1Score = document.getElementById('all-1-score')
let player1Score = document.querySelectorAll('.score-1')
player1Score.forEach((input,index) => {
  input.addEventListener('change', e => {
    holes1Par[index] = e.target.value
    calculate1Totals()
  })
})

function calculate1Totals() {
  let outTotal = 0;
  let inTotal = 0;
  let total = outTotal + inTotal;
  let outHoles = holes1Par.slice(0,9)
  let inHoles = holes1Par.slice(9)
  outHoles.forEach(parOut => {
    outTotal += parseInt(parOut)
  })
  inHoles.forEach(parIn => {
    inTotal += parseInt(parIn)
  })
  holes1Par.forEach(par => {
    total += parseInt(par)
  })
  par1OutScore.innerHTML = outTotal
  par1inScore.innerHTML = inTotal
  total1Score.innerHTML = total
}


let holes2Par = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let par2OutScore = document.getElementById('player2OutTotal')
let par2inScore = document.getElementById('player2InTotal')
let total2Score = document.getElementById('all-2-score')
let player2Score = document.querySelectorAll('.score-2')
player2Score.forEach((input,index) => {
  input.addEventListener('change', e => {
    holes2Par[index] = e.target.value
    calculate2Totals()
  })
})

function calculate2Totals() {
  let outTotal = 0;
  let inTotal = 0;
  let total = outTotal + inTotal;
  let outHoles = holes2Par.slice(0,9)
  let inHoles = holes2Par.slice(9)
  outHoles.forEach(parOut => {
    outTotal += parseInt(parOut)
  })
  inHoles.forEach(parIn => {
    inTotal += parseInt(parIn)
  })
  holes2Par.forEach(par => {
    total += parseInt(par)
  })
  par2OutScore.innerHTML = outTotal
  par2inScore.innerHTML = inTotal
  total2Score.innerHTML = total
}


let holes3Par = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let par3OutScore = document.getElementById('player3OutTotal')
let par3inScore = document.getElementById('player3InTotal')
let total3Score = document.getElementById('all-3-score')
let player3Score = document.querySelectorAll('.score-3')
player3Score.forEach((input,index) => {
  input.addEventListener('change', e => {
    holes3Par[index] = e.target.value
    calculate3Totals()
  })
})

function calculate3Totals() {
  let outTotal = 0;
  let inTotal = 0;
  let total = outTotal + inTotal;
  let outHoles = holes3Par.slice(0,9)
  let inHoles = holes3Par.slice(9)
  outHoles.forEach(parOut => {
    outTotal += parseInt(parOut)
  })
  inHoles.forEach(parIn => {
    inTotal += parseInt(parIn)
  })
  holes3Par.forEach(par => {
    total += parseInt(par)
  })
  par3OutScore.innerHTML = outTotal
  par3inScore.innerHTML = inTotal
  total3Score.innerHTML = total
}

let holes4Par = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let par4OutScore = document.getElementById('player4OutTotal')
let par4inScore = document.getElementById('player4InTotal')
let total4Score = document.getElementById('all-4-score')
let player4Score = document.querySelectorAll('.score-4')
player4Score.forEach((input,index) => {
  input.addEventListener('change', e => {
    holes4Par[index] = e.target.value
    calculate4Totals()
  })
})

function calculate4Totals() {
  let outTotal = 0;
  let inTotal = 0;
  let total = outTotal + inTotal;
  let outHoles = holes4Par.slice(0,9)
  let inHoles = holes4Par.slice(9)
  outHoles.forEach(parOut => {
    outTotal += parseInt(parOut)
  })
  inHoles.forEach(parIn => {
    inTotal += parseInt(parIn)
  })
  holes4Par.forEach(par => {
    total += parseInt(par)
  })
  par4OutScore.innerHTML = outTotal
  par4inScore.innerHTML = inTotal
  total4Score.innerHTML = total
}