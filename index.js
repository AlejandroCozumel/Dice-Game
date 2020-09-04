function myFunction() {

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDIceImage1 = "dice" + randomNumber1 + ".png";
let randomImageSource1 = "images/" + randomDIceImage1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDIceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDIceImage2;


document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🌟Player 1 Wins !";
    var audio = new Audio("sound/win.mp3");
    audio.play();
    document.querySelectorAll("img")[2].setAttribute("src", "images/Ryu.gif");
    document.querySelectorAll("img")[3].setAttribute("src", "images/Mbison2.gif");
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins🌟 !";
    var audio = new Audio("sound/lose.mp3");
    audio.play();
    document.querySelectorAll("img")[2].setAttribute("src", "images/Ryu2.gif");
    document.querySelectorAll("img")[3].setAttribute("src", "images/Mbison.gif");
}
else{
    document.querySelector("h1").innerHTML = "🌟Draw !🌟";
    var audio = new Audio("sound/draw.mp3");
    audio.play();
    document.querySelectorAll("img")[3].setAttribute("src", "images/Mbison.gif");
    document.querySelectorAll("img")[2].setAttribute("src", "images/Ryu.gif");
}

}
