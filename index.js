// render home
let homeBtnOne = document.getElementById("home-btn1")
let homeBtnTwo = document.getElementById("home-btn2")
let homeBtnThree = document.getElementById("home-btn3")
let homeScoreEl = document.getElementById("home-score")

// render Away 
let awayBtnOne = document.getElementById("away-btn1")
let awayBtnTwo = document.getElementById("away-btn2")
let awayBtnThree = document.getElementById("away-btn3")
let awayScoreEl = document.getElementById("away-score")

// initialize and declare homeScore
 let homeScore = 0
//  initialize and declare awayScore
 let awayScore = 0

// create function for plusOneHome
function plusOneHome(){
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

// creat function for plusTwoHome
function plusTwoHome(){
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

// create function for plusThreeHome
function plusThreeHome(){
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

// create function for plusOneAway
function plusOneAway(){
    awayScore += 1
    awayScoreEl.innerText = awayScore
}

// create function for plusTwoAway
function plusTwoAway(){
    awayScore += 2
    awayScoreEl.innerText = awayScore
}

// create function for plusThreeAway
function plusThreeAway(){
    awayScore += 3
    awayScoreEl.innerText = awayScore
}



