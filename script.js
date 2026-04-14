const saveBtn = document.getElementById("save-btn")
const delBtn = document.getElementById("del-btn")
const form = document.getElementById("form_name")
const p = document.getElementById("p-space")

const stocazzo = localStorage.getItem("user")
if (stocazzo) {
  p.innerText = stocazzo
} else {
  p.innerText = "nessun utente"
}

form.addEventListener("submit", function (e) {
  e.preventDefault()
  const nameInput = document.getElementById("name_field").value
  console.log(nameInput)
  if (nameInput) {
    localStorage.setItem("user", nameInput)
    const nameSaved = localStorage.getItem("user")
    console.log("nameSaved")
    form.reset()

    p.innerText = nameSaved
  } else {
    alert("nessun utente è registrato")
  }
})

delBtn.addEventListener("click", function () {
  localStorage.removeItem("user")

  const p = document.getElementById("p-space")
  p.innerText = "nessun utente"
})

const counter = document.getElementById("counter_space")
const buttonStart = document.getElementById("start-time")
const buttonReset = document.getElementById("reset-time")
const buttonStop = document.getElementById("stop-time")

const actualTime = sessionStorage.getItem("counter")
let time = actualTime
const timer = function () {
  time++
  counter.innerText = time
  sessionStorage.setItem("counter", time)
}

buttonStart.addEventListener("click", function () {
  setInterval(timer, 1000)
})

buttonReset.addEventListener("click", function () {
  time = 0
})

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const buttonSpace = document.getElementById("button-space")

const cinesebutton = document.getElementById("array_bottoni")
cinesebutton.addEventListener("click", function () {
  const x = Math.floor(Math.random() * 1000)
  for (let i = 0; i < 1000; i++) {
    if (i === x) {
      console.log(x)
      buttonSpace.innerHTML += `<button class='w-25 bg-danger' style="background-color: rgb(255, 0, 0);" id='btnstrano' onclick='munnezza()')>你好</button>`
    } else {
      buttonSpace.innerHTML += `<button class='w-25'>你好</button>`
    }
  }
})

const btnstrano = document.getElementById("btnstrano")
const munnezza = function () {
  const body = document.querySelector("body")
  body.innerHTML = `<h1 class=' text-center my-3' >Na MUNNEZZZZZ</h1>
  <p>.cit</p>`
  nonfuma()
}

function nonfuma() {
  for (let i = 0; i < 100; i++) {
    let sigaretta = document.createElement("div")
    sigaretta.className = "cigarette"
    sigaretta.innerHTML = `<img class='w-50'
src="./360_F_32714544_mej20SmxNQCpfODYq4voiWephNBtU3p7.png"
alt="munnezza"
/>`

    sigaretta.style.left = Math.random() * 100 + "vw"

    sigaretta.style.animationDuration = Math.random() * 3 + 2 + "s"

    document.body.appendChild(sigaretta)

    setTimeout(() => {
      sigaretta.remove()
    }, 5000)
  }
}
