
var colors = generateRandomColors(6);



var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var correctcolor = pickrandomcolor();
var h1 = document.querySelector("h1");
var restbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var numofsquares = 6;
var modebtn = document.querySelectorAll(".mode");



colordisplay.textContent = correctcolor;
restbutton.addEventListener("click", function() {
    if (numofsquares === 6) {
    colors = generateRandomColors(6);
    } else {
        colors = generateRandomColors(3);
    }
    correctcolor = pickrandomcolor();
    colordisplay.textContent = correctcolor;
    this.textContent = "New Colors";
    messagedisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    
    squares[i].addEventListener("click", function(){
        var clickedcolor = this.style.backgroundColor;
        console.log(clickedcolor + correctcolor);
        if (clickedcolor === correctcolor) {
            messagedisplay.textContent = "Correct!";
            changecolor(clickedcolor);
            h1.style.background = correctcolor;
            restbutton.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#232323";
            messagedisplay.textContent = "Try Again";
        }
    })
};

function changecolor(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};

function pickrandomcolor() {
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
};

function generateRandomColors(num) {
    var arr =[ ];
    for (var i = 0; i < num; i++) {
        arr.push(randomcolor());
    }
    return arr;
};

function randomcolor() {
    var r = Math.floor(Math.random()* 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random()* 256);

    return color = "rgb(" + r + ", " + g + ", " + b + ")";
};

easybtn.addEventListener("click",function() {
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    colors = generateRandomColors(3);
    var n = Math.floor(Math.random() * 3);
    correctcolor = colors[n];
    colordisplay.textContent = correctcolor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.background = "none";
        }
    }
    numofsquares = 3;

});

hardbtn.addEventListener("click",function() {
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    colors = generateRandomColors(6);
    var n = Math.floor(Math.random() * 6);
    correctcolor = colors[n];
    colordisplay.textContent = correctcolor;
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
        }
    numofsquares = 6;

});




