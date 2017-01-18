let types = ["Rock", "Paper", "Scissors"];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play(c) {
    let compchoice = getRandomIntInclusive(0,2);
    let pcname = types[c]
    let helperheader = document.getElementById("helptext")
    document.getElementById("pchoice").innerHTML = pcname
    document.getElementById("cpchoice").innerHTML = types[compchoice]

    let playercard = document.getElementById("pchoicecard")
    let compcard = document.getElementById("cchoicecard")
    playercard.className = "card blue-grey darken-1"
    compcard.className = "card blue-grey darken-1"
    if (compchoice === c) {
        helperheader.innerHTML = "It's a tie!"
        return
    }
   
    if (compchoice === 0) {
        if (c === 1) {
            helperheader.innerHTML = "Paper covers Rock!"
            playercard.className = "card green darken-1"
            compcard.className = "card red darken-1"
             Materialize.toast("YOU WON!", 2000);
            return
        }
        helperheader.innerHTML = "Rock beats " + pcname
        playercard.className = "card red darken-1"
        compcard.className = "card green darken-1"
          Materialize.toast("YOU LOSE!", 2000);
        return
    }
    else if (compchoice === 1) {
        if (c === 2) {
            helperheader.innerHTML = "Scissors cuts paper!"
            playercard.className = "card green darken-1"
            compcard.className = "card red darken-1"
             Materialize.toast("YOU WON!", 2000);
            return
        }
        playercard.className = "card red darken-1"
        compcard.className = "card green darken-1"
        helperheader.innerHTML = "Paper beats " + pcname
        Materialize.toast("YOU LOSE!", 2000);
    }
    else if (compchoice === 2) {
        if (c === 0) {
            helperheader.innerHTML = "Rock smashes Scissors"
            playercard.className = "card green darken-1"
            compcard.className = "card red darken-1"
            Materialize.toast("YOU WON!", 2000);
            return
        }
        playercard.className = "card red darken-1"
        compcard.className = "card green darken-1"
         helperheader.innerHTML = "Scissors beats " + pcname
         Materialize.toast("YOU LOSE!", 2000);
    }
}
