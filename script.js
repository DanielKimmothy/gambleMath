let hint_add = Math.floor(Math.random() * 5 + 1)
let hint_subtract = Math.floor(Math.random() * 4 + 1)
let chance_input 

let number
let number1
let number2
let number3
let number4
let number5
let number6
let number7
let number8
let number9
let number10
let number11
let number12
let hint
let hint1

let result = false // True is win, false is lose.
const answer_1 = "1/4"
const answer_2 = "1/2"
const answer_3 = "1/3"
const answer_4 = "1/6"
const answer_5 = "1/12"
const answer_6 = "1/4"
const answer_7 = "1/2"
//let question = 1
let bet
let money = 1000
question = 5
function resultCheck(){
    if (result == true) {
        money = money + bet
        document.getElementById("wallet.").innerHTML = "You have: $" + money
        document.getElementById("profit").innerHTML = "You won $" + bet
        console.log("works - True")
        console.log(money + " " + bet + " " + result)
    }
    else if (result == false) {
        money = money - bet
        document.getElementById("wallet.").innerHTML = "You have: $" + money
        document.getElementById("profit").innerHTML = "You lost $" + bet
        console.log("works - false")
        console.log(money + " " + bet + " " + result)
    }
}
function checkButtons12(){
    document.getElementById("button1").onclick = function() {
        console.log("button pressed")
        if (1 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }

        resultCheck()        
    }
    document.getElementById("button2").onclick = function() {
        console.log("button pressed")
        if (2 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button3").onclick = function() {
        console.log("button pressed")
        if (3 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
        
    }
    document.getElementById("button4").onclick = function() {
        console.log("button pressed")
        if (4 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button5").onclick = function() {
        console.log("button pressed")
        if (5 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button6").onclick = function() {
        console.log("button pressed")
        if (6 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button7").onclick = function() {
        console.log("button pressed")
        if (7 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            result = false
        }
        resultCheck()
    }
    document.getElementById("button8").onclick = function() {
        console.log("button pressed")
        if (8 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }

        resultCheck()
    }
    document.getElementById("button9").onclick = function() {
        console.log("button pressed")
        if (9 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button10").onclick = function() {
        console.log("button pressed")
        if (10 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button11").onclick = function() {
        console.log("button pressed")
        if (11 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button12").onclick = function() {
        console.log("button pressed")
        if (12 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
}
function checkButtons4() {
    document.getElementById("button1").onclick = function() {
        console.log("button pressed")
        if (1 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
            
        }
        else if (1 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot!!!! "

            result = false
        }
        resultCheck()
    }
    document.getElementById("button2").onclick = function() {

        console.log("button pressed")
        if (2 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (2 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (2 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (2 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result:  You lost - 99% of gamblers quit before they jackpot"

            result = false
        }
        resultCheck()
    }
    document.getElementById("button3").onclick = function() {

        console.log("button pressed")
        if (3 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (3 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (3 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (3 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result:  You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button4").onclick = function() {
        console.log("button pressed")
        if (4 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button5").onclick = function() {
        console.log("button pressed")
        if (5 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (5 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (5 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (5 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button6").onclick = function() {
        console.log("button pressed")
        if (6 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (6 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (6 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (6 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button7").onclick = function() {
        console.log("button pressed")
        if (7 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (7 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (7 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (7 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button8").onclick = function() {
        console.log("button pressed")
        if (8 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (8 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (8 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (8 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = true
        }
        resultCheck()
    }
    document.getElementById("button9").onclick = function() {
        console.log("button pressed")
        if (9 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (9 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (9 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (9 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button10").onclick = function() {
        console.log("button pressed")
        if (10 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (10 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (10 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (10 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button11").onclick = function() {
        console.log("button pressed")
        if (11 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (11 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (11 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (11 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button12").onclick = function() {
        console.log("button pressed")
        if (12 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (12 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (12 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (12 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
}
function checkButtons2(){
    document.getElementById("button1").onclick = function() {
        console.log("button pressed")
        if (1 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
            
        }
        else if (1 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number4){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number5){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot!!!! "

            result = false
        }
        resultCheck()
    }
    document.getElementById("button2").onclick = function() {

        console.log("button pressed")
        if (2 == number){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (2 == number1){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (2 == number2){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (2 == number3){
            document.getElementById("result").innerHTML = "Result: you win."
            console.log("won")

            result = true
        }
        else if (2 == number4){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (2 == number5){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (2 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"

            result = false
        }
        resultCheck()
    }
    document.getElementById("button3").onclick = function() {

        console.log("button pressed")
        if (3 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (3 == number1){
            document.getElementById("result").innerHTML = "Result: You win... for now!"
            console.log("won")

            result = true
        }
        else if (3 == number2){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (3 == number3){
            document.getElementById("result").innerHTML = "Result: you win."
            console.log("won")

            result = true
        }
        else if (3 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (3 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (3 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button4").onclick = function() {
        console.log("button pressed")
        if (4 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (4 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (4 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button5").onclick = function() {
        console.log("button pressed")
        if (5 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (5 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (5 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (5 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (5 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (5 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (5 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button6").onclick = function() {
        console.log("button pressed")
        if (6 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (6 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (6 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (6 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (6 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (6 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (6 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button7").onclick = function() {
        console.log("button pressed")
        if (7 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (7 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (7 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (7 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (7 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (7 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (7 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button8").onclick = function() {
        console.log("button pressed")
        if (8 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (8 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (8 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (8 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (8 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (8 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (8 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button9").onclick = function() {
        console.log("button pressed")
        if (9 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (9 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (9 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (9 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (9 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (9 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (9 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You lost - 99% of gamblers quit before they jackpot"
            console.log("lost")

            result = false 
        }
        resultCheck()
    }
    document.getElementById("button10").onclick = function() {
        console.log("button pressed")
        if (10 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (10 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (10 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (10 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (10 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (10 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (10 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button11").onclick = function() {
        console.log("button pressed")
        if (11 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
        }
        else if (11 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (11 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (11 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (11 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (11 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (11 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button12").onclick = function() {
        console.log("button pressed")
        if (12 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (12 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (12 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (12 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (12 == number4){
            document.getElementById("result").innerHTML = "Result: VICTORYYY!"
            console.log("won")

            result = true
        }
        else if (12 == number5){
            document.getElementById("result").innerHTML = "Result:  you win."
            console.log("won")

            result = true
        }
        else if (12 == number6){
            document.getElementById("result").innerHTML = "Result: You win... for now"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")

            result = false
        }
        resultCheck()
    }

}
function checkButtons3(){
    document.getElementById("button1").onclick = function() {
        console.log("button pressed")
        if (1 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (1 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "

            result = false


        }

        resultCheck()
    }
    document.getElementById("button2").onclick = function() {

        console.log("button pressed")
        if (2 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (2 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (2 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (2 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"

            result = false
        }
        resultCheck()
    }
    document.getElementById("button3").onclick = function() {

        console.log("button pressed")
        if (3 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (3 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (3 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (3 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button4").onclick = function() {
        console.log("button pressed")
        if (4 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else if (4 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")

            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")

            result = false
        }
        resultCheck()
    }
    document.getElementById("button5").onclick = function() {
        console.log("button pressed")
        if (5 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (5 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (5 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (5 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")
            result = false
        }
        resultCheck()
    }
    document.getElementById("button6").onclick = function() {
        console.log("button pressed")
        if (6 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (6 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (6 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (6 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")
            result = false
        }
        resultCheck()
    }
    document.getElementById("button7").onclick = function() {
        console.log("button pressed")
        if (7 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (7 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (7 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (7 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")
            result = false
        }
        resultCheck()
    }
    document.getElementById("button8").onclick = function() {
        console.log("button pressed")
        if (8 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (8 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (8 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (8 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")
            result = false
        }
        resultCheck()
    }
    document.getElementById("button9").onclick = function() {
        console.log("button pressed")
        if (9 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (9 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (9 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (9 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")
            result = false
        }
        resultCheck()
    }
    document.getElementById("button10").onclick = function() {
        console.log("button pressed")
        if (10 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (10 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (10 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (10 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")
            result = false
        }
        resultCheck()
    }
    document.getElementById("button11").onclick = function() {
        console.log("button pressed")
        if (11 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (11 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (11 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (11 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")
            result = false
        }
        resultCheck()
    }
    document.getElementById("button12").onclick = function() {
        console.log("button pressed")
        if (12 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (12 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (12 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (12 == number3){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            console.log("lost")
            result = false
        }
        resultCheck()
    }
}
function checkButtons6() {
    document.getElementById("button1").onclick = function() {
        console.log("button pressed")
        if (1 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (1 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (1 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button2").onclick = function() {
        console.log("button pressed")
        if (2 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (2 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (2 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button3").onclick = function() {
        console.log("button pressed")
        if (3 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (3 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (3 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button4").onclick = function() {
        console.log("button pressed")
        if (4 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (4 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (4 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button5").onclick = function() {
        console.log("button pressed")
        if (5 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (5 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (5 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button6").onclick = function() {
        console.log("button pressed")
        if (6 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (6 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (6 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button7").onclick = function() {
        console.log("button pressed")
        if (7 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (7 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (7 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have lost womp womp"
            result = false
        }
        resultCheck()
    }
    document.getElementById("button8").onclick = function() {
        console.log("button pressed")
        if (8 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (8 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (8 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button9").onclick = function() {
        console.log("button pressed")
        if (9 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (9 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (9 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button10").onclick = function() {
        console.log("button pressed")
        if (10 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (10 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (10 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button11").onclick = function() {
        console.log("button pressed")
        if (11 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (11 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (11 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    document.getElementById("button12").onclick = function() {
        console.log("button pressed")
        if (12 == number){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (12 == number1){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else if (12 == number2){
            document.getElementById("result").innerHTML = "Result: You have won!"
            console.log("won")
            result = true
        }
        else{
            document.getElementById("result").innerHTML = "Result: You have LOST!!!! "
            result = false
        }
        resultCheck()
    }
    
}



document.getElementById("payment").onclick = function() {
    bet = document.getElementById("bet").value
    bet = Number(bet)
    console.log(bet)
}

document.getElementById("begin_btn").onclick = function() {
    let question = Math.floor(Math.random() * 7 + 1)
    number = Math.floor(Math.random() * 12 + 1)
    console.log("Question number: " + question)

    document.getElementById("wallet.").innerHTML = "You have: $" + money





    if (question == 1){ // question 1     
        
        console.log("the number is: " + number)
        document.getElementById("question").innerHTML = "Your chances are: (2/5) / (16/10)" // answer is 1/4

        if (number < 8){
            hint = number + hint_add
            hint1 = number - hint_subtract

            number1 = number + 1
            number2 = number + 3
        }
        else{
            hint = number - 3
            hint1 = number - hint_add

            number1 = number - 1
            number2 = number - 3
        }
        
        
        document.getElementById("submit_btn").onclick = function(){
            chance_input = document.getElementById("chances_input").value
            console.log("submit button pressed")
            console.log("answer = " + chance_input)
            
            if (chance_input == answer_1){
                document.getElementById("hint").innerHTML = "Hint: " +  hint1 +  " < n < " + hint
                console.log("correct answer")
            }
            else {
                document.getElementById("hint").innerHTML = "WRONG ANSWER!"
            }
        }

        console.log(number +" " + number1+" "+number2+" "+number3)

        checkButtons4()


        
    }

    if (question == 2){ // question 2
        let number = Math.floor(Math.random() * 12 + 1)
        number = Number(number)

        console.log("the number is " + number)
        document.getElementById("question").innerHTML = "Your chance is x/y: 3x + 4 = 13, y(5 + x) - 5 = 43" // answer is 1/2
        
        if (number < 8){
            hint = number + hint_add
            hint1 = number - hint_subtract
            number1 = number + 1
            number2 = number + 2
            number3 = number + 3
            number4 = number + 4
            number5 = number + 5
            if (number > 1){
                number6 = number - 1
            }
            else{
                number6 = number + 1
            }
        }
        else{ // if the nuumber is greater or otherwise equal to 9, this is enacted.
            if (number > 11){
                hint = number + 2
                hint1 = number - hint_subtract
            }
            else {
                hint = number + 1
                hint1 = number - hint_subtract

            }

            number1 = number - 1 // i wish they didnt notice that they were in order and being just guessing. 
            number2 = number - 2
            number3 = number - 3
            number4 = number - 4
            number5 = number - 5
            number6 = number - 6
        }

        document.getElementById("submit_btn").onclick = function(){
            chance_input = document.getElementById("chances_input").value
            console.log("submit button pressed")
            console.log("answer = " + chance_input)
            
            if (chance_input == answer_2){
                document.getElementById("hint").innerHTML = "" + hint1 +" < n < " + hint
                console.log("correct answer")
            }
            else {
                document.getElementById("hint").innerHTML = "Wrong answer womp womp!"
            }
        }

        console.log(number +" " + number1+" "+number2+" "+number3+" "+number4+" "+number5+" "+number6)

        checkButtons2()
    }

    if (question == 3){ // question 3
        let number = Math.floor(Math.random() * 12 + 1)
        number = Number(number)

        console.log("the number is " + number)
        document.getElementById("question").innerHTML = "Your chance is x: x^2 + 15/18 = 1" // answer is 1/3
        
        if (number < 8){
            hint = number + hint_add
            if (number > 5){hint1 = number - hint_add}
            else if (number == 1){hint1 = number - 1}
            else {hint1 = number - 1}

            number1 = number + 1
            number2 = number + 3
            number3 = number + 2
        }
        else{
            hint = number + hint_subtract
            hint1 = number - hint_add

            number1 = number - 3
            number2 = number - 4
            number3 = number - 6
            number4 = number - 7
        }

        document.getElementById("submit_btn").onclick = function(){
            chance_input = document.getElementById("chances_input").value
            console.log("submit button pressed")
            console.log("answer = " + chance_input)
            
            if (chance_input == answer_3){
                document.getElementById("hint").innerHTML = "One of the numbers are:" + hint1 + " < n < " + hint
                console.log("correct answer")
            }
            else{
                document.getElementById("hint").innerHTML = "Wrong answer L"

            }
        }
        
        console.log(number +" "+ number1+" "+number2+" "+number3)
        /*
        document.getElementById("submit_btn").onclick = function(){
            chance_input = document.getElementById("chances_input").value
            console.log("submit button pressed")
            console.log("answer = " + chance_input)
            
            if (chance_input == answer_2){
                document.getElementById("hint").innerHTML = "Hint: 0 < n < " + hint
                console.log("correct answer")
            }
        } */
        checkButtons3()
    }

    if (question == 4){ // question 4
        let number = Math.floor(Math.random() * 12 + 1)
        number = Number(number)

        console.log("the number is " + number)
        document.getElementById("question").innerHTML = "Your chance is: a(x - 1). find x if 2x + 4 = 7, and a if 64/192 = a" // answer is 1/6
        
        if (number < 8){
            hint = number + hint_add
            hint1 = number - hint_subtract
            number1 = number + 3
        }
        else{
            hint = number + hint_subtract
            hint1 = number - hint_add
            
            number1 = number - 1
            number2 = number - 4
        }

        document.getElementById("submit_btn").onclick = function(){
            chance_input = document.getElementById("chances_input").value
            console.log("submit button pressed")
            console.log("answer = " + chance_input)
            
            if (chance_input == answer_4){
                console.log(hint)
                document.getElementById("hint").innerHTML = "One of the numbers are: " + hint1 + " < n < " + hint
                console.log("correct answer")
            }
            else{
                document.getElementById("hint").innerHTML = "Wrong answer L"

            }
        }
        
        console.log(number+" "+ number1 +" "+number2)

        checkButtons6()
        
    }

    if (question == 5){ // question 5

        //number = Number(number)
        
        document.getElementById("question").innerHTML = "Your chance is: a/1 / b/6, 1/2 times a = 1, b/15 = 4/60" // answer is 1/12
        
        if (number < 8){
            hint = number + hint_add
            hint1 = number - hint_subtract
            //number1 = number + 1
        }
        
        
        else{
            hint = number + hint_subtract
            hint1 = number - hint_add
            //number1 = number - 3
            //number2 = number - 4
        }

        console.log(number)

        document.getElementById("submit_btn").onclick = function(){
            chance_input = document.getElementById("chances_input").value
            console.log("submit button pressed")
            console.log("answer = " + chance_input)
            
            if (chance_input == answer_5){
                document.getElementById("hint").innerHTML = "One of the numbers are: "+ hint1 +" < n < " + hint
                console.log("correct answer")
            }
            else{
                document.getElementById("hint").innerHTML = "Wrong answer L"
            }
        }
        
        


        checkButtons12()
    }

    if (question == 6){ // question 6

        console.log("the number is " + number)
        document.getElementById("question").innerHTML = "Your chance is: x, when 1/2(x) - (-3) = 3 1/8" // answer is 1/4
        
        if (number < 8){
            hint = number + hint_add
            hint1 = number - hint_subtract

            number1 = number + 2
            number2 = number + 5
        }
        else{
            hint = number + hint_subtract
            hint1 = number - hint_add

            number1 = number - 6
            number2 = number - 4
        }

        console.log(number+" "+ number1 +" "+number2)
        document.getElementById("submit_btn").onclick = function(){
            chance_input = document.getElementById("chances_input").value
            console.log("submit button pressed")
            console.log("answer = " + chance_input)
            console.log(hint)
            if (chance_input == answer_6){
                document.getElementById("hint").innerHTML = "One of the numbers are: 0 < n < " + hint
                console.log("correct answer")
            }
            else{
                document.getElementById("hint").innerHTML = "Wrong answer L"
            }
        }
        


        checkButtons4()

    
    }
    if (question == 7){ // question 2
        let number = Math.floor(Math.random() * 12 + 1)
        number = Number(number)

        console.log("the number is " + number)
        document.getElementById("question").innerHTML = "Your chance is: (13/6 - 2) / (1/3)" // answer is 1/2
        
        if (number < 8){
            hint = number + hint_add
            hint1 = number - hint_subtract
            number1 = number + 1
            number2 = number + 2
            number3 = number + 3
            number4 = number + 4
            number5 = number + 5
            if (number > 1){
                number6 = number - 1
            }
            else{
                number6 = number + 1
            }
        }
        else{ // if the nuumber is greater or otherwise equal to 9, this is enacted.
            if (number > 11){
                hint = number + 2
                hint1 = number - hint_subtract
            }
            else {
                hint = number + 1
                hint1 = number - hint_subtract

            }

            number1 = number - 1 // i wish they didnt notice that they were in order and being just guessing. 
            number2 = number - 2
            number3 = number - 3
            number4 = number - 4
            number5 = number - 5
            number6 = number - 6
        }

        document.getElementById("submit_btn").onclick = function(){
            chance_input = document.getElementById("chances_input").value
            console.log("submit button pressed")
            console.log("answer = " + chance_input)
            
            if (chance_input == answer_7){
                document.getElementById("hint").innerHTML = "" + hint1 +" < n < " + hint
                console.log("correct answer")
            }
            else {
                document.getElementById("hint").innerHTML = "Wrong answer womp womp!"
            }
        }

        console.log(number +" " + number1+" "+number2+" "+number3+" "+number4+" "+number5+" "+number6)

        checkButtons2()
    }
}


document.getElementById("retry_btn").onclick = function() {
    if (money <= 0) {
        document.getElementById("body").innerHTML = "   "
        document.getElementById("body").innerHTML = "<h1>You lost all your money, you are now poor. <a href='index.html'>Retry?</a></h1>"
        console.log("lost")
    }
    else {
        document.getElementById("result").innerHTML = "Result:"
        document.getElementById("hint").innerHTML = "The hints for <b>one</b> of the numbers will show here."
        document.getElementById("question").innerHTML = "Your chances are.."
        document.getElementById("profit").innerHTML = " "

        number = 0
        number1 = 0
        number2 = 0
        number3 = 0
        number4 = 0
        number5 = 0
        number6 = 0
        number7 = 0
        number8 = 0
        number9 = 0
        number10 = 0
        number11 = 0
        number12 = 0
    }

}


