
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function play(c) {
    let compchoice = getRandomIntInclusive(1,3);
    let pcname = types[c]
    let helperheader = document.getElementById("helptext")
    if (compchoice === c) {
        helperheader.innerHTML = "It's a tie!"
        return
    }

    if (compchoice === 0) {
        if (c === 2) {
            helperheader.innerHTML = "Paper beats Rock!"
            return
        }
        helperheader.innerHTML = "Rock beats " + pcname
        return
    }
    else if (compchoice === 1) {
        if (c === 2) {
            helperheader.innerHTML = "Scissors cuts paper!"
            return
        }
        helperheader.innerHTML = "Paper beats " + pcname
    }
    else if (compchoice === 2) {
        if (c === 0) {
            helperheader.innerHTML = "Rock smashes Scissors"
            return
        }
         helperheader.innerHTML = "Scissors beats " + pcname
    }
}
