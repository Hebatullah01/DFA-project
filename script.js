/*var canvas = document.querySelector("canvas");
var inp = document.querySelector("#input");
var run = document.querySelector("#run");
var res = document.querySelector("#result");
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

var c = canvas.getContext('2d');

//window.addEventListener('click',function(event){
    //let rect = canvas.getBoundingClientRect();
    //let x = event.clientX - rect.left;
    //let y = event.clientY - rect.top;
    c.beginPath();
    c.arc(200,100,35,0,Math.PI * 2, false);
    c.stroke();
    c.beginPath();
    c.arc(200,100,31,0,Math.PI * 2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.font = "30px Arial";
    c.fillText("q0",185,107);

    c.beginPath();
    c.arc(400,100,35,0,Math.PI * 2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillText("q1",385,107);

    c.beginPath();
    c.arc(200,300,35,0,Math.PI * 2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillText("q2",185,307);

    c.beginPath();
    c.arc(400,300,35,0,Math.PI * 2, false);
    c.strokeStyle = "black";
    c.stroke();
    c.fillText("q3",385,307);

    c.beginPath();
    c.moveTo(234,110);
    c.lineTo(366,110);
    c.stroke();

    c.beginPath();
    c.moveTo(234,110);
    c.lineTo(250,103);
    c.stroke();
    c.beginPath();
    c.moveTo(234,110);
    c.lineTo(250,117);
    c.stroke();






    c.beginPath();
    c.moveTo(234,90);
    c.lineTo(366,90);
    c.stroke();

    c.beginPath();
    c.moveTo(366,90);
    c.lineTo(350,83);
    c.stroke();
    c.beginPath();
    c.moveTo(366,90);
    c.lineTo(350,97);
    c.stroke();


////////////////////////


    c.beginPath();
    c.moveTo(190,134);
    c.lineTo(190,266);
    c.stroke();

    c.beginPath();
    c.moveTo(190,134);
    c.lineTo(197,150);
    c.stroke();
    c.beginPath();
    c.moveTo(190,134);
    c.lineTo(183,150);
    c.stroke();





    c.beginPath();
    c.moveTo(210,134);
    c.lineTo(210,266);
    c.stroke();


    c.beginPath();
    c.moveTo(210,266);
    c.lineTo(203,250);
    c.stroke();
    c.beginPath();
    c.moveTo(210,266);
    c.lineTo(217,250);
    c.stroke();


//////////////////////////////////////
    c.beginPath();
    c.moveTo(234,290);
    c.lineTo(366,290);
    c.stroke();

    c.beginPath();
    c.moveTo(234,310);
    c.lineTo(250,303);
    c.stroke();
    c.beginPath();
    c.moveTo(234,310);
    c.lineTo(250,317);
    c.stroke();

    c.beginPath();
    c.moveTo(234,310);
    c.lineTo(366,310);
    c.stroke();

    c.beginPath();
    c.moveTo(366,290);
    c.lineTo(350,283);
    c.stroke();
    c.beginPath();
    c.moveTo(366,290);
    c.lineTo(350,297);
    c.stroke();


    

////////////////////////////////////
    
    c.beginPath();
    c.moveTo(390,134);
    c.lineTo(390,266);
    c.stroke();

    c.beginPath();
    c.moveTo(390,134);
    c.lineTo(397,150);
    c.stroke();
    c.beginPath();
    c.moveTo(390,134);
    c.lineTo(383,150);
    c.stroke();


    c.beginPath();
    c.moveTo(410,134);
    c.lineTo(410,266);
    c.stroke();

    c.beginPath();
    c.moveTo(410,266);
    c.lineTo(417,250);
    c.stroke();
    c.beginPath();
    c.moveTo(410,266);
    c.lineTo(403,250);
    c.stroke();

////////////////////////////////////
c.font = "15px Arial";
c.fillText("0",175,200);
c.fillText("0",215,200);
c.fillText("0",375,200);
c.fillText("0",415,200);
c.fillText("1",300,285);
c.fillText("1",300,325);
c.fillText("1",300,125);
c.fillText("1",300,85);
////////////////////////////

function colorState ( state ,color1,color2){
    if(state==0){
        c.beginPath();
        c.arc(200,100,34,0,Math.PI * 2, false);
        c.fillStyle = color1;
        c.fill();
        c.beginPath();
        c.arc(200,100,31,0,Math.PI * 2, false);
        c.strokeStyle = "black";
        c.stroke();
        c.fillStyle = color2;
        c.font = "30px Arial";
        c.fillText("q0",185,107);
    }
    else if(state==1){
        c.beginPath();
        c.arc(400,100,34,0,Math.PI * 2, false);
        c.fillStyle = color1;
        c.fill();
        c.fillStyle = color2;
        c.font = "30px Arial";
        c.fillText("q1",385,107);
    }
    else if (state == 2){
        c.beginPath();
        c.arc(200,300,34,0,Math.PI * 2, false);
        c.fillStyle = color1;
        c.fill();
        c.fillStyle = color2;
        c.font = "30px Arial";
        c.fillText("q2",185,307);
    }
    else {
        c.beginPath();
        c.arc(400,300,34,0,Math.PI * 2, false);
        c.fillStyle = color1;
        c.fill();
        c.fillStyle = color2;
        c.font = "30px Arial";
        c.fillText("q3",385,307);
    }
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
run.addEventListener('click', function(){

    const awaiting = async () => {
        colorState(0,"green","white");
        await sleep(2000);
        colorState(0,'white','black');
    var inputString = inp.value, currentState = 0, finalState=0;
    for(var i=0; i<inputString.length; i++){
        var input = inputString[i];
      
  
        switch (currentState){
        case 0 : 
            if(input == '0'){
                currentState = 2;
            }
            else{
                currentState = 1;
            }
        break;
        case 1 :
            if(input == '0'){
                currentState = 3;
            }
            else{
                currentState = 0;
            }
        break;
        case 2 :
            if(input == '0'){
                currentState = 0;
            }
            else{
                currentState = 3;
            } 
        break;
        case 3 : 
            if(input == '0'){
                currentState = 1;
            }
            else{
                currentState = 2;
            }
        break;
        }
        colorState(currentState,"green","white");
        await sleep(2000);
        colorState(currentState,'white','black');
    }

    colorState(currentState,"green","white");
    if(currentState  == finalState){
        console.log("accepted");
        res.innerHTML = "Accepted";
        
        
    }
    else{
        console.log("rejected");
        res.innerHTML = "Rejected";
    }
    await(1000);
    colorState(currentState,'white','black');
}
awaiting();
});
    
*/

var run  = document.querySelector("#run");
var inp = document.querySelector("#input");
var result = document.querySelector("#result");
var q0 = document.querySelector("#q0");
var q1 = document.querySelector("#q1");
var q2 = document.querySelector("#q2");
var q3 = document.querySelector("#q3");
var q4 = document.querySelector("#q4");
var q5 = document.querySelector("#q5");
var q6 = document.querySelector("#q6");
var q56 = document.querySelector("#q56");
var q86 = document.querySelector("#q86");


function colorState ( state ,color1){
    switch (state){
        case 0 : 
            q0.setAttribute('fill', color1);
        break;

        case 1 :
            q1.setAttribute('fill', color1);
            
        break;
        case 2 :
            q2.setAttribute('fill', color1);        
        break;
        case 3 : 
            q3.setAttribute('fill', color1);          
        break;
        case 4 : 
            q4.setAttribute('fill', color1);               
        break;
        case 5 : 
            q5.setAttribute('fill', color1);
            q56.setAttribute('fill', color1);
        break;
        case 6 : 
            q6.setAttribute('fill', color1);
            q86.setAttribute('fill', color1);
        break;
   }
}


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
run.addEventListener('click', function(event){

    const awaiting = async () => {

        var inputString = inp.value;
        var currentState = 0;
        colorState(0,"#ced177");
        await sleep(2000);
        colorState(0,'#d2dbed');
        for(var i=0; i<inputString.length; i++){
            var input = inputString[i];
            switch (currentState){
            case 0 : 
                if(input == 'w'){
                    currentState = 1;
                }
                else{
                    currentState = 4;
                }
            break;
            case 1 :
                if(input == 'w'){
                    currentState = 2;
                }
                else{
                    currentState = 3;
                }
            break;
            case 2 :
                if(input == 'w'){
                    currentState = 2;
                }
                else{
                    currentState = 5;
                } 
            break;
            case 3 : 
                if(input == 'w'){
                    currentState = 2;
                }
                else{
                    currentState = 5;
                }
            break;
            case 4 : 
                if(input == 'w'){
                    currentState = 2;
                }
                else{
                    currentState = 6;
                }
            break;
            case 5 : 
                if(input == 'w'){
                    currentState = 2;
                }
                else{
                    currentState = 5;
                }
            break;
            case 6 : 
                if(input == 'w'){
                    currentState = 2;
                }
                else{
                    currentState = 6;
                }
            break;
            }
            colorState(currentState,"#ced177");
            await sleep(2000);
            colorState(currentState,'#d2dbed');
        }
        if(currentState == 5 || currentState == 6){
            result.innerHTML = "Accpeted";
            result.style.color = "#498236";
        }
        else{
            result.innerHTML = "Rejected";
            result.style.color = " #9a3030";
        }
        await(2000);
        colorState(currentState,'#d2dbed');
    }
    awaiting();
});

