let randNum = Math.random() * 100 + 1
randNum = parseInt(randNum)



let output = document.getElementById("answer")
let count = document.getElementById("count_it")
let n = 0
document.querySelector("#nr_game").addEventListener("keyup",function (event) {
    if(event.keyCode == 13)
    check()

})


console.log(randNum)

function check() {
    n++
    count.innerHTML = "guess count is: " + n;
    let inpNum = document.getElementById("nr_game").value
    console.log(inpNum)
    if(inpNum == randNum) {
        output.textContent = "correct";
        
        setTimeout(function() {const choice = confirm("Game again?")
        if(choice){
            n = 0
            count.innerText = "";
            randNum = Math.floor(Math.random() * 100 + 1)
            output.textContent = ""
            console.log(randNum)
        }
        else {
            alert("Thanks For Playing");
            output.textContent = "Best guess count: " + n;
            count.innerText = "";   
        }}, 10)
    }
    else if(inpNum > 100){
        output.textContent = "bigger than 100! Try again!"
    }
    else if(inpNum > randNum){
        output.textContent = "too big"
    }
    else if(inpNum < randNum){
        output.textContent = "too small"
    }
    else {
        output.textContent = "not a number"
    }

}



