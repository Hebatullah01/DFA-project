var run = document.querySelector("#run");
var inp = document.querySelector("#input");
var result = document.querySelector("#result");
var read = document.querySelector("#read");
var inputDisplay = document.querySelector("#inputDisplay");

var q0 = document.querySelector("#q0");
var q1 = document.querySelector("#q1");
var q2 = document.querySelector("#q2");
var q3 = document.querySelector("#q3");
var q4 = document.querySelector("#q4");
var q5 = document.querySelector("#q5");
var q6 = document.querySelector("#q6");
var q5border = document.querySelector("#q56");
var q6border = document.querySelector("#q86");


function transition(input, currentState) {
    //this switch statement simulates the DFA
    switch (currentState) {
        case 0:
            currentState = input == 'w' ? 1 : 4;
            break;
        case 1:
            currentState = input == 'w' ? 2 : 3;
            break;
        case 2:
            currentState = input == 'w' ? 2 : 5;
            break;
        case 3:
            currentState = input == 'w' ? 2 : 5;
            break;
        case 4:
            currentState = input == 'w' ? 2 : 6;
            break;
        case 5:
            currentState = input == 'w' ? 2 : 5;
            break;
        case 6:
            currentState = input == 'w' ? 2 : 4;
            break;
    }
    return currentState;
}

//to change the color of the states in the graph
function colorState(state, color) {
    switch (state) {
        case 0:
            q0.setAttribute('fill', color);
            break;
        case 1:
            q1.setAttribute('fill', color);
            break;
        case 2:
            q2.setAttribute('fill', color);
            break;
        case 3:
            q3.setAttribute('fill', color);
            break;
        case 4:
            q4.setAttribute('fill', color);
            break;
        case 5:
            q5.setAttribute('fill', color);
            q5border.setAttribute('fill', color);
            break;
        case 6:
            q6.setAttribute('fill', color);
            q6border.setAttribute('fill', color);
            break;
    }
}



var lastState = 0;
// every time the arrow button is clicked, the next character is read to make a transition
function readChar(characters, index, currentState, prevState, inputString) {
    let box1 = characters[index];
    let box2 = index != 0 ? characters[index - 1] : characters[0];

    if (index < inputString.length) {
        box1.style.backgroundColor = "rgb(232, 235, 212)";
        box1.style.fontSize = "1.6em";
    }
    if (index != 0) {
        box2.style.backgroundColor = "#a2b69c";
        box2.style.fontSize = "1em";
    }
    index++;
    var input = box1.textContent;
    prevState = currentState;

    
    currentState = transition(input, currentState);

    if (index < inputString.length) {
        colorState(currentState, 'rgb(179, 185, 136)');
    }
    if (currentState != prevState) {
        colorState(prevState, '#d2dbed');
    }
    //check if the end of the string is reached, then accept or reject
    if (index == inputString.length) {
        colorState(currentState,'rgb(179, 185, 136)');
            if(currentState == 5 || currentState == 6){
                result.innerHTML = "Accpeted";
                result.style.color = "#498236";
            }
            else{
                result.innerHTML = "Rejected";
                result.style.color = " #9a3030";
            }    
            lastState = currentState;
    }
    return [index, currentState, prevState, lastState];
}

// to create the box that displays the input characters
function createInputDisplay(inputString) {
    inputDisplay.innerHTML = "";
    for (var i = 0; i < inputString.length; i++) {
        var char = inputString[i];
        var box = document.createElement('div');
        inputDisplay.appendChild(box);
        box.classList.add('charBox');
        box.innerHTML = char;
    }
}
// starting the program and initialising the variables when the run button is clicked
run.addEventListener('click', function () {
    colorState(lastState, '#d2dbed');
    result.innerHTML = "";
    var inputString = inp.value;
    var currentState = 0;
    var prevState = 0;
    createInputDisplay(inputString);
    var characters = document.getElementsByClassName("charBox");
    var index = 0;
    colorState(0, 'rgb(179, 185, 136)');
    
    //to read the character when the arrow is clicked
    read.addEventListener('click', function (event) {
        var result = readChar(characters, index, currentState, prevState, inputString);
        index = result[0];
        currentState = result[1];
        prevState = result[2];
        lastState = result[3];
    });
});
